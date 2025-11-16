import React, { useState, useRef } from "react";
import { STATIONS } from "./data/stations";
import { GENRE_COLORS } from "./data/genreColors";

import GenreSelector from "./components/GenreSelector";
import MyHeader from "./components/MyHeader";
import PlayerPanel from "./components/PlayerPanel";

import "./App.css";

function App() {
  const [currentStation, setCurrentStation] = useState(STATIONS[0]);
  const audioRef = useRef(null);

  const setStation = (station) => {
    setCurrentStation(station);
    if (audioRef.current) {
      audioRef.current.src = station.url;
      audioRef.current.play();
    }
  };

  const currentGenre = currentStation.genre;
  const colors = GENRE_COLORS[currentGenre] || ["#1a1a2e", "#0f3460"];

  return (
    <div
      className="app-container"
      style={{
        "--color1": colors[0],
        "--color2": colors[1],
      }}
    >

      <div className="app-layer gradient-radial1" />
      <div className="app-layer gradient-radial2" />

      <MyHeader />
      <PlayerPanel
        stations={STATIONS}
        currentStation={currentStation}
        setStation={setStation}
        audioRef={audioRef}
      />
      <GenreSelector stations={STATIONS} setStation={setStation} />
    </div>
  );
}

export default App;