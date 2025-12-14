import React, { useState, useRef } from "react";
import { STATIONS } from "./data/stations";
import { GENRE_COLORS } from "./data/genreColors";

import GenreSelector from "./components/GenreSelector";
import MyHeader from "./components/MyHeader";
import PlayerPanel from "./components/PlayerPanel";


import "./App.css";

function App() {
  const START_STATION = { id: "start", name: "Wellcome!", genre: "start", url: null };

  const [currentStation, setCurrentStation] = useState(START_STATION);
  const audioRef = useRef(null);

  const setStation = (station) => {
    setCurrentStation(station);
    if (audioRef.current && station.url) {
      audioRef.current.src = station.url;
      audioRef.current.play().catch(() => {});
    }
  };

  const currentGenre = currentStation?.genre || "start";

  const colors =
    currentGenre === "start"
      ? ["red", "oreange", "yellow", "green", "blue", "indigo", "violet"] 
      : GENRE_COLORS[currentGenre] || ["#1a1a2e", "#0f3460"];

  return (
    <div
      className={`app-container ${
        currentGenre === "start" ? "rainbow-start" : ""
      }`}
      style={
        currentGenre !== "start"
        ? {
        "--color1": colors[0],
        "--color2": colors[1],
          }
        : {}
      }
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

