import React, { useState, useEffect, useCallback } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline, Typography } from "@mui/material";
import FilterBar from "./components/FilterBar";
import ElixirTable from "./components/ElixirTable";
import PaginationControls from "./components/PaginationControls";
import { fetchElixirs } from "./api/elixirService";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { debounce } from "lodash";

const App = () => {
  const [elixirs, setElixirs] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    difficulty: "",
    ingredient: "",
    inventor: "",
    manufacturer: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [errorTitle, setErrorTitle] = useState(null);
  const itemsPerPage = 10;

  const fetchData = useCallback(
    debounce(async (filters) => {
      setLoading(true);
      setError(null);
      setErrorTitle(null);
      try {
        const data = await fetchElixirs(filters);
        setElixirs(data);
      } catch (err) {
        const errorObj = JSON.parse(err.message); // INFO: Parse the JSON string from new Error
        setErrorTitle(errorObj?.title);
        setError(errorObj?.message);
      }
      setLoading(false);
    }, 800),
    []
  );

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedElixirs = elixirs.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Container sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Harry Potter Wizard - Elixirs
        </Typography>
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
        {loading && <Loader />}
        {errorTitle && <ErrorMessage title={errorTitle} message={error} />}
        {!loading && !error && (
          <>
            <ElixirTable elixirs={paginatedElixirs} />
            {elixirs?.length > 0 && (
              <PaginationControls
                count={Math.ceil(elixirs.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
              />
            )}
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
