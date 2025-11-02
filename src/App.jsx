import React, { useState, useRef } from "react";
import { STATIONS } from "./data/stations";
import GenreSelector from "./components/GenreSelector";
import NowPlaying from "./components/NowPlaying";
import AudioPlayer from "./components/AudioPlayer";
import "./App.css";
import MyHeader from "./components/MyHeader";

function App() {
  const [currentStation, setCurrentStation] = useState(STATIONS[0]);
  const audioRef = useRef(null);

  const handlePlay = (station) => {
    setCurrentStation(station);
    if (audioRef.current) {
      audioRef.current.src = station.url;
      audioRef.current.play();
    }
  };

  return (
    <div className="app-container">
      <MyHeader />
      <AudioPlayer audioRef={audioRef} />
      <NowPlaying currentStation={currentStation} />
      <GenreSelector stations={STATIONS} handlePlay={handlePlay} />
    </div>
  );
}

export default App;