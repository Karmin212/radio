import React from "react";

function AudioPlayer({ audioRef }) {
    return <audio ref={audioRef} controls className="w-full" /> 
}

export default AudioPlayer;