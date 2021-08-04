import React from "react";
import "./Main.css";
import mainImg from "./students.png";


function Main(){
    return (
    <div className="mainText">
        <h2>동작혁신교육지구의 청년들 다시 모이다,</h2>
        <h1>청년보좌관</h1>
        <img src={mainImg} alt="배경사진"/>
    </div>
    );
}

export default Main;