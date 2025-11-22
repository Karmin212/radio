import React from "react";
import "./MyHeader.css";

function MyHeader({ genre, onClick }) {
    return (
        <div className="MyHeader">
           <h1 className="text">VibeWave</h1> 
        </div>
    )
}

export default MyHeader;