import React from "react";
import Header from "./components/Header";
import BottomButtons from "./components/BottomButtons";

export const MainPage = ({ handleChangePage, handleDarkMode }) => {
  return (
    <div className="title">
        <Header handleChangePage={handleChangePage} handleDarkMode={handleDarkMode}/>
        <div style={{height: "16vh"}}></div>
        <div style={{fontFamily: "papyrus"}} className="play-button" onClick={() => handleChangePage('levels')}>
          <br className="mobile-only"/>Play</div>
        <div style={{height: "4.9vh"}}></div>
        <BottomButtons handleChangePage={handleChangePage}/>
        <div style={{height: "12vh"}}></div>
    </div>
  );
};