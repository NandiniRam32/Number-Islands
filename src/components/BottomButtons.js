import React from "react";
import "tailwindcss/tailwind.css";

const BottomButtons = ({ handleChangePage }) => {
    return (
        <div className="bottom-buttons" style={{display: "flex", justifyContent: "space-between"}}>
            <div className="bButton" onClick={() => handleChangePage('levels')}>
                <br/>Levels
            </div>
            <div className="bButton" onClick={() => handleChangePage('rules')}>
                <br/>Rules
            </div>
            <div className="bButton" onClick={() => handleChangePage('main')}>
                <br/>Main
            </div>
        </div>
    );
};

export default BottomButtons;