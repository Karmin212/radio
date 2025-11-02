import React from "react";
import GenreButton from "./GenreButton";
import "./GenreSelector.css";

function GenreSelector({ stations, handlePlay }) {
    const genres = Array.from(new Set(stations.map(s => s.genre)));

    return(
        <div className="genre-selector">
            {genres.map((genre) => (
                <GenreButton
                key={genre}
                genre={genre}
                onClick={() => {
                    const station = stations.find(s => s.genre === genre);
                    handlePlay(station);
                }}
                />
            ))}
        </div>
    )
}

export default GenreSelector