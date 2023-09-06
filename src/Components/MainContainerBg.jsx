import React from 'react'
import useGetTrailer from "../Hooks/useGetTrailer";
import { useSelector } from 'react-redux';

export default function MainContainerBg({movieId}) {
    const trailerVideo = useSelector((store) => store.movies.trailer);

    useGetTrailer(movieId);
   
  return (
    <div className=" w-screen">
    <iframe
      className="w-screen aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo +
        "?&autoplay=1&loop=1&mute=1"
      }
      FrameBorder={0}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
  )
}
