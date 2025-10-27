import React, { useState, useRef } from "react";
import { STATIONS } from "./data/stations";
import GenreSelector from "./components/GenreSelector";
import NowPlaying from "./components/NowPlaying";
import AudioPlayer from "./components/AudioPlayer";
import "./App.css";

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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎵 My Radio</h1>

      <GenreSelector stations={STATIONS} handlePlay={handlePlay} />
      <NowPlaying currentStation={currentStation} />
      <AudioPlayer audioRef={audioRef} />
    </div>
  );
}

export default App;