import React from "react";
import ImageGenreButton from "../assets/ImageGenreButton.png";
import "./GenreButton.css";

function GenreButton({ genre, onClick }) {
    return (
        <div className="genre-button-wrapper">
            <button
                className="genre-button"
                style={{ backgroundImage: `url(${ImageGenreButton})`}}
                onClick={onClick}
            />
            <div className="genre-label">{genre}</div>
        </div>
    )
}

export default GenreButton;