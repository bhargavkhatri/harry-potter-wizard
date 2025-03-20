export const fetchElixirs = async (filters) => {
  let query = Object.keys(filters)
    ?.filter((key) => filters[key])
    ?.map((key) => `${key}=${encodeURIComponent(filters[key])}`)
    ?.join("&");

  const url = `https://wizard-world-api.herokuapp.com/Elixirs${
    query ? `?${query}` : ""
  }`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      const errorTitle = data?.title || "Unknown Error";
      const errorMessage = data?.errors
        ? Object.values(data?.errors)?.[0]?.[0]
        : "An error occurred";

      // INFO: Throw combined error
      throw new Error(
        JSON.stringify({ title: errorTitle, message: errorMessage })
      );
    }

    return data;
  } catch (error) {
    throw error;
  }
};
