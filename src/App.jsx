import React, { useState, useRef } from "react";
import { STATIONS } from "./data/stations";
import GenreSelector from "./components/GenreSelector";
import "./App.css";
import MyHeader from "./components/MyHeader";
import PlayerPanel from "./components/PlayerPanel";

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

  return (
    <div className="app-container">
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