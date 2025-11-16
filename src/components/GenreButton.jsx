import React from "react";
import ImageGenreButton from "../assets/ImageGenreButton.png";
import "./GenreButton.css";

const GENRE_HOVER_COLORS = {
  rock: "#ff4500",
  classical: "#ffd700",
  pop: "#ff69b4",
  electronic: "#00ffcc",
  rap: "#ff00ff",
  country: "#8a2be2",
  lounge: "#1e90ff",
  experimental: "#ffffff",
  folk: "#32cd32",
};

function GenreButton({ genre, onClick }) {
  return (
    <div className="genre-button-wrapper">
      <button
        className="genre-button"
        style={{ backgroundImage: `url(${ImageGenreButton})` }}
        onClick={onClick}
        data-hover-color={GENRE_HOVER_COLORS[genre] || "#ffffff"}
      />
      <div className="genre-label">{genre}</div>
    </div>
  );
}

export default GenreButton;