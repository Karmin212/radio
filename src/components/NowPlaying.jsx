import React from "react";
import "./NowPlaying.css";

function NowPlaying({ currentStation }){
    return (
        <div className="now-playing">
            {currentStation.name}
        </div>
    )
}

export default NowPlaying;