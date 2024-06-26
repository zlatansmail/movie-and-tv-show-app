import React, { useEffect, useState } from "react";

import ShowCard from "../../showCard/ShowCard.jsx";
import SearchInput from "../../searchInput/SearchInput.jsx";

import "./shows-grid.css";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const ShowsGrid = () => {
  const [selectedShowType, setSelectedShowType] = useState("movie");
  const [movieData, setMovieData] = useState([]);

  const fetchTrending = async () => {
    const data = await fetch(`
  https://api.themoviedb.org/3/discover/${selectedShowType}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=&vote_count.gte=1000&api_key=${API_KEY}`);
    const dataJ = await data.json();
    setMovieData(dataJ.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [selectedShowType]);

console.log(selectedShowType);
  return (
    <div className="main-container">
      <div className="buttons-container">
        <button
          className="movies-button"
          onClick={() => setSelectedShowType("movie")}
        >
          Movies
        </button>
        <button className="tv-show-button" onClick={() => setSelectedShowType("tv")}>
          TV Shows
        </button>
      </div>
      <SearchInput />
      {movieData.slice(0,10).map((show) => (
        <ShowCard
          key={show.id}
          title={show.title || show.name}
          poster_path={show.backdrop_path}
          backdrop_path={show.backdrop_path}
          id={show.id}
          selectedShowType={selectedShowType}
        />
      ))}
    </div>
  );
};

export default ShowsGrid;
