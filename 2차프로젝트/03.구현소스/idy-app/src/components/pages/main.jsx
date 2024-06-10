// 메인 페이지 컴포넌트 ///

import React, { useLayoutEffect } from 'react';

import "../../css/main.scss";

import {headerdata} from "../data/headerarea";
import headerFn from '../func/header';

function Main(props) {
    
  useLayoutEffect(() => {
    headerFn();
  }, []);

  // 코드 리턴구역 ////////////
    return (
        <>
        {/* <!-- 요리초보가이드 --> */}
        <header id="header-area">
          <div className="header-top">
            <ul className="header-text">
              <img src="./image/samie1.png" alt="새미이미지" />
              <li>추천드려요!</li>
              <li>
                <a href="#">가이드 더보기 ➕</a>
              </li>
            </ul>
            <ul className="header-title">
              <li>요리초보가이드</li>
            </ul>
          </div>
          <div className="header-img">
            <div className="header-slide">
              <ul>
                {headerdata.map((v,i) => (
                  <li key={i}>
                    <img src={`./image/${v.imgName}.jpg`} alt="header image" />
                    <span>{v.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        {/* <!-- 요리해요 --> */}
        <div id="cook-area">요리해요 </div>
  
        {/* <!-- 이벤트 구역 --> */}
        <div id="event-area">
          <div className="event-box">
            <ul>
              <li>
                <img src="./image/samie_txt.png" alt="wow" />
              </li>
              <li>이벤트</li>
            </ul>
            <button className="event-btn">
              <a href="#">더보기 〉</a>
            </button>
          </div>
          <div className="event-ban">
            <img src="./image/event.png" alt="이벤트배너" />
          </div>
        </div>
  
        </>
    );
}

export default Main;