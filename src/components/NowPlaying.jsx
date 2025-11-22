import React from "react";
import "./NowPlaying.css";

function NowPlaying({ currentStation }) {
  const name = currentStation.name;

  return (
    <div className="now-playing">
        <div className="now-playing-marquee">{name}</div>
    </div>
  );
}

export default NowPlaying;