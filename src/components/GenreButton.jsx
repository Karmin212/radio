import React from "react";

function GenreButton({ genre, onClick }) {
    return (
        <div className="flex flex-col items-center">
            <button
                className="px-5 py-2 bg-gray-800 rounded hover:bg-gray-700"
                onClick={onClick}
            >
                {genre.toUpperCase()}
            </button>
            <span className="text-sm mt-1">{genre}</span>
        </div>
    )
}

export default GenreButton;