export const getTopMovies = async () => {
  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODk1ZWRkMTdmMWU0N2I4OWY1NjFlYzA2ZWFkYWRkZiIsIm5iZiI6MTcxOTIzOTc2MC4yNTU0NjgsInN1YiI6IjY2Mzc2YzA1YzYxNmFjMDEyMjFiMDc5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3My0jKJIHHy9C2Di9VfTCK0b3FYlAtjbU0w4TzizPE"
    }
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      config
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

export const getTopTvShows = async () => {
  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODk1ZWRkMTdmMWU0N2I4OWY1NjFlYzA2ZWFkYWRkZiIsIm5iZiI6MTcxOTIzOTc2MC4yNTU0NjgsInN1YiI6IjY2Mzc2YzA1YzYxNmFjMDEyMjFiMDc5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3My0jKJIHHy9C2Di9VfTCK0b3FYlAtjbU0w4TzizPE"
    }
  };

  fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    config
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
