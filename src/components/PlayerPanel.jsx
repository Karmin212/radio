import React, { useState } from "react";
import WheelSelector from "./WheeleSelector.jsx";
import NowPlaying from "./NowPlaying.jsx";
import "./PlayerPanel.css";

function PlayerPanel({ stations, currentStation, setStation, audioRef }) {
  const [volume, setVolume] = useState(0.5);

  const handlePlay = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  return (
    <div className="player-panel">
      <audio ref={audioRef} />
      <div className="now-playing">
        <NowPlaying currentStation={currentStation} />
      </div>
      <div className="switches">
      <WheelSelector
        stations={stations}
        currentGenre={currentStation.genre}
        setStation={setStation}
      />
        <button onClick={handlePlay}>▶️</button>
        <button onClick={handleStop}>⏹️</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}

export default PlayerPanel;