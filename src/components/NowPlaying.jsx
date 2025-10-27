import React from "react";

function NowPlaying({ currentStation }){
    return (
        <div className="mb-4">
            <h3 className="text-lg font-semibold">
                Сейчас играет: {currentStation.name}
            </h3>
        </div>
    )
}

export default NowPlaying;