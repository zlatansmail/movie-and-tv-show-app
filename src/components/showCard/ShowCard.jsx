import React from "react";

import "./show-card.css";
import { Link } from "react-router-dom";

const ShowCard = ({
  id,
  title,
  poster_path,
  backdrop_path,
  selectedShowType
}) => {
  const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="show-card-wrapper">
      <Link
        to={`${selectedShowType}/${id}`}
        state={{ selectedShowType: selectedShowType }}
      >
        <img
          src={BASE_POSTER_URL + (poster_path || backdrop_path)}
          alt="show"
        />
        <h2 className="show-title">{title}</h2>
      </Link>
    </div>
  );
};

export default ShowCard;
