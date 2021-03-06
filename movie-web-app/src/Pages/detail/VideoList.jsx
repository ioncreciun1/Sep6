import { Typography } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";

import { useParams } from "react-router";

import tmdbApi from "./../../api/tmdbApi";

const VideoList = (props) => {
  const { category,id } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbApi.getVideos(category, id);
      setVideos(res.results.filter(video => video.type === "Trailer").slice(0,1));
    };
    if(category!=="actor")
      getVideos();
  }, [category, id]);

  return (
    <>
      {videos.map((item, i) => (
        <Video key={i} item={item} />
      ))}
      {videos.length===0 && <Typography variant="h5">No trailer available for this {category === "movie"? "movie" : "TV show"}</Typography>}
    </>
  );
};

const Video = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);


  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoList;
