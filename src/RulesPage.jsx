import React from "react";
import Header from "./components/Header";
import BottomButtons from "./components/BottomButtons";

export const RulesPage = ({ handleChangePage, handleDarkMode }) => {
  return (
    <div className="title">
        <div style={{display: "flex", justifyContent: "space-between"}} className="extra-title">
            <Header handleChangePage={handleChangePage} handleDarkMode={handleDarkMode}/>
            <span className="rules-box rules-box-laptop">
              <div style={{fontFamily: "Lucida Handwriting",
              textDecoration: "underline", fontWeight: "bold"}} className="rules-big">Rules</div>
              <div className="rules-small">You are given a grid of numbers, and have to draw the amount of bridges from one number 
              to another corresponding to the number in the center.</div>
              <div className="rules-page-space-big"></div>
              <div className="rules-small">You can only finish a level when all of your bridges 
              have been drawn properly.</div></span>
        </div>
        <div className="rules-box rules-box-laptop" style={{height: "40.7vh"}}>
            <div style={{paddingBottom: "1vh"}} className="rules-small">Here's an example:</div>
            <div className="rules-page-space-small"></div>
            <img className="rules-example-image" src="https://github.com/NandiniRam32/Summer2023Projects/blob/master/Game4/src/components/RulesExample.png?raw=true"
            alt="Sorry, Not Found"/>
            <div className="rules-small">Good luck!</div>
        </div>
        <div className="rules-box rules-box-phone">
        <div style={{fontFamily: "Lucida Handwriting",
              textDecoration: "underline", fontWeight: "bold"}}>Rules</div>
              <div className="rules-small" style={{paddingTop: "2vh"}}>You are given a grid of numbers, and have to draw the amount of bridges from one number 
              to another corresponding to the number in the center. You can only finish a level when all of your bridges 
              have been drawn properly.</div>
            <div className="rules-small" style={{textDecoration: "underline", paddingTop: "2vh"}}>Here's an example:</div>
            <img className="rules-example-image" src="https://github.com/NandiniRam32/Summer2023Projects/blob/master/Game4/src/components/RulesExample.png?raw=true"
            alt="Sorry, Not Found"/>
            <div className="rules-small">Good luck!</div>
        </div>
        <div style={{height: "4vh"}}></div>
        <BottomButtons handleChangePage={handleChangePage}/>
        <div style={{height: "12vh"}}></div>
    </div>
  );
};
