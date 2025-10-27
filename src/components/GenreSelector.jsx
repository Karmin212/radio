import React from "react";
import GenreButton from "./GenreButton";

function GenreSelector({ stations, handlePlay }) {
    const genres = Array.from(new Set(stations.map(s => s.genre)));

    return(
        <div className="flex flex-wrap gap-4 mb-6">
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