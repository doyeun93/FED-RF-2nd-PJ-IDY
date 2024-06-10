import React from 'react';

function TopArea(props) {
    return (
        <section id="top-area">
          <header className="topbox">
            <a className="logo" href="#">
              <img src="./image/logo.jpg" alt="로고이미지" />
            </a>
            <nav id="gnb">
              <ul className="top-gnb">
                <li>
                  <a href="#">요리초보가이드</a>
                </li>
                <li>
                  <a href="#">요리연구소</a>
                  <ul className="bt-gnb">
                    <li>
                      <a href="#">레시피</a>
                    </li>
                    <li>
                      <a href="#">솔루션</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">요리해요</a>
                  <ul className="bt-gnb">
                    <li>
                      <a href="#">요리해요</a>
                    </li>
                    <li>
                      <a href="#">고민있어요</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">WOW이벤트</a>
                </li>
              </ul>
            </nav>
            <div className="log">
              <ul>
                <li>
                  <a href="#">로그인</a>
                </li>
                <li>
                  <a href="#">
                    <img src="./image/ic_search.png" alt="검색" />
                  </a>
                </li>
              </ul>
            </div>
          </header>
        </section>
    );
}

export default TopArea;