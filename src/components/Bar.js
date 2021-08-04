import React from "react";
import "./Bar.css";
import bi from "./BI.png";

function Bar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="https://www.dongjak.go.kr/reservation/main/contents.do?menuNo=400065" rel="noreferrer" target="_blank">
              <img src={bi} alt="동작혁신교육지구 설명"></img>
              동작혁신교육지구
          </a> 
        </li>
        <li>
          <h4>청년보좌관 대표 성나영</h4>
        </li>
      </ul>
    </div>
  );
}

export default Bar;
