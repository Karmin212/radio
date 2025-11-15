import React, { useState } from "react";
import WheelSelector from "./WheeleSelector.jsx";
import NowPlaying from "./NowPlaying.jsx";
import VolumeSlider from "./VolumeSlider.jsx";
import "./PlayerPanel.css";
import play from "./../assets/play.png";
import stop from "./../assets/stop.png";

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

  const handleVolumeChange = (vol) => {
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
        <button
          onClick={handlePlay}
          style={{ backgroundImage: `url(${play})`, backgroundSize: "cover" }}
        ></button>
        <button
          onClick={handleStop}
          style={{ backgroundImage: `url(${stop})`, backgroundSize: "cover" }}
        ></button>

        {/* Кастомный вертикальный фейдер */}
        <VolumeSlider value={volume} onChange={handleVolumeChange} />
      </div>
    </div>
  );
}

export default PlayerPanel;