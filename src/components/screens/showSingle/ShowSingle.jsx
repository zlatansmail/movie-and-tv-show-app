import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const ShowSingle = () => {
  const base_url = "https://image.tmdb.org/t/p/w1280";
  const { id } = useParams();
  const navigate = useNavigate();

  const [showData, setShowData] = useState({});
  const location = useLocation();
  const [videoData, setVideoData] = useState({});

  let { selectedShowType } = location.state || {};

  const fetchData = async () => {
    const data = await fetch(`
  https://api.themoviedb.org/3/${selectedShowType}/${id}?api_key=${API_KEY}`);
    const dataJ = await data.json();
    setShowData(dataJ);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchVideo = async () => {
    const video = await fetch(`
  https://api.themoviedb.org/3/${selectedShowType}/${id}/videos?api_key=${API_KEY}`);
    const videoJ = await video.json();
    console.log(videoJ);
    const filteredVideos = videoJ.results.filter(
      (item) => item.site === "YouTube" && item.type === "Trailer"
    );
    console.log(filteredVideos);
    setVideoData(filteredVideos[0]);
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  console.log(selectedShowType);

  return (
    <div className="single-page-container">
      <div className="back button">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
      <div className="image-wrapper">
        {videoData ? (
          <iframe
            width="560"
            height="315"
            muted="1"
            src={`https://www.youtube.com/embed/${videoData.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={base_url + showData.backdrop_path}
            alt={`${showData.title} backdrop`}
          />
        )}
      </div>
      <div className="info">
        <h1>{showData.title || showData.name}</h1>
        <p>{showData.overview}</p>
      </div>
    </div>
  );
};

export default ShowSingle;
