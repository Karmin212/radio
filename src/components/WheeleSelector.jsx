import React, { useState, useRef, useEffect } from "react";
import "./WheeleSelector.css";
import wheel from "./../assets/wheel.png";

function WheelSelector({ stations, currentGenre, setStation }) {
  const genreStations = stations.filter((s) => s.genre === currentGenre);
  const N = genreStations.length;
  const wheelRef = useRef(null);
  const dragging = useRef(false);
  const lastAngle = useRef(0);
  const [rotation, setRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxRotation = 720; // два оборота

  const getAngle = (x, y, cx, cy) => {
    return Math.atan2(y - cy, x - cx) * (180 / Math.PI);
  };

  const onMouseDown = (e) => {
    dragging.current = true;
    const rect = wheelRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    lastAngle.current = getAngle(e.clientX, e.clientY, cx, cy);
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;

    const rect = wheelRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = getAngle(e.clientX, e.clientY, cx, cy);
    let delta = angle - lastAngle.current;

    // корректировка перескоков через ±180
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    let newRot = rotation + delta;

    // ограничение вращения
    const clampedRot = Math.max(0, Math.min(newRot, maxRotation));

    setRotation(clampedRot);
    lastAngle.current = angle;

    // вычисляем сегменты
    const segmentAngle = maxRotation / N;
    const movedSegments = Math.round(clampedRot / segmentAngle);
    const newIndex = Math.min(Math.max(movedSegments, 0), N - 1);

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      setStation(genreStations[newIndex]);
    }
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  const onMouseLeave = () => {
    dragging.current = false;
  };

  // сброс при смене жанра
  useEffect(() => {
    setCurrentIndex(0);
    setRotation(0);
  }, [currentGenre]);

  return (
    <div className="wheel-selector">
      <div
        className="wheel"
        ref={wheelRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <img
          src={wheel}
          alt="wheel"
          className="wheel-image"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
    </div>
  );
}

export default WheelSelector;