import React, { useState, useRef, useEffect } from "react";
import "./WheeleSelector.css";

function WheelSelector({ stations, currentGenre, handlePlay }) {
  const genreStations = stations.filter((s) => s.genre === currentGenre);
  const N = genreStations.length;
  const wheelRef = useRef(null);
  const dragging = useRef(false);
  const lastAngle = useRef(0);
  const [rotation, setRotation] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    const newRot = rotation + delta;
    setRotation(newRot);
    lastAngle.current = angle; // ← обновляем, чтобы вращение не сбивалось

    // вычисляем, сколько сегментов пройдено
    const segmentAngle = 720 / N; // два оборота = полный цикл
    const movedSegments = Math.round(newRot / segmentAngle);
    let newIndex = ((movedSegments % N) + N) % N;

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      handlePlay(genreStations[newIndex]);
    }
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  const onMouseLeave = () => {
    dragging.current = false;
  };

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
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="wheel-center"></div>
      </div>
    </div>
  );
}

export default WheelSelector;