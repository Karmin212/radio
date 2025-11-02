import React from "react";

function MyHeader({ genre, onClick }) {
    return (
        <div className="flex flex-col items-center">
           <h1 className="text-3xl font-bold mb-6">My Radio</h1> 
        </div>
    )
}

export default MyHeader;