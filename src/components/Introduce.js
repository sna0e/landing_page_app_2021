import React from "react";
import "./Introduce.css";
import a_img from "./a_img.png";
import c_img from "./c_img.png";
import Count from "./Count";




function Doing () {
    return (
        <div className="explain">
            <div className="def">
                <h2>청년보좌관이란?</h2>
                <p>동작혁신교육지구에서 자란 청년들이 <br></br>
                후배 청소년들의 자치 활동을 지원하기 위해 만들어진<br>
                </br> 동작혁신교육지구의 중간지원조직입니다.</p>
            </div>
            <div className="history">
                <h2>청년보좌관 발자취</h2>
                <div className="bulletLine"/>
                <ul>
                    <li><div className="bullet"/><br/>2019 청년보좌관 - 6명</li>
                    <li><div className="bullet"/><br/>2020 청년보좌관 - 9명</li>
                    <li><div className="bullet"/><br/>2021 청년보좌관 - 13명</li>
                </ul>
            </div>
            <div className="doing">
                <h2>청년보좌관이 하는 일</h2>
                <p>동작구 청소년분과, 동작구 청소년의회 등 <br></br> 동작혁신교육지구의 청소년 사업을 지원하고 있습니다.</p>
            </div>
            <div className="logo">
                <h2>동작구 청소년분과와 청소년의회 소식</h2>
                <p>로고를 클릭하면 공식 인스타그램 계정을 살펴볼 수 있습니다.</p>
                <ul>
                    <li><a href="https://www.instagram.com/dongjak_y.all/" rel="noreferrer" target="_blank">
                        <img src={a_img} alt="청소년분과 로고"/>
                        </a></li>
                    <li><a href="https://www.instagram.com/dongjak_y.council/" rel="noreferrer" target="_blank">
                        <img src={c_img} alt="청소년의회 로고"/>
                        </a></li>
                </ul>
            </div>
            <div className="countButton">
                <h2>청년보좌관 응원하기</h2>
                <p>청년보좌관을 응원해주세요!</p>
                <Count />
            </div>
        </div>
    );
}




export default Doing;