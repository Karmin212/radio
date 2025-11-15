import React, { useState, useRef, useEffect } from "react";
import "./VolumeSlider.css";

function VolumeSlider({ value, onChange }) {
  const sliderRef = useRef(null);
  const dragging = useRef(false);
  const [volume, setVolume] = useState(value);

  const onMouseDown = (e) => {
    dragging.current = true;
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let newVolume = 1 - (e.clientY - rect.top) / rect.height;
    newVolume = Math.min(Math.max(newVolume, 0), 1);
    setVolume(newVolume);
    onChange(newVolume);
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div className="volume-slider" ref={sliderRef} onMouseDown={onMouseDown}>
      <div className="volume-scale"></div>
      <div
        className="volume-handle"
        style={{ bottom: `${volume * 100}%` }}
      ></div>
    </div>
  );
}

export default VolumeSlider;