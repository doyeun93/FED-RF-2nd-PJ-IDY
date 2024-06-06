import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   {/* <!-- gnb 메뉴 --> */}
    <top id="top-area">
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
    </top>

    {/* <!-- 요리초보가이드 --> */}
    <header id="header-area"> 
      <div className=''>

      </div>
    </header>

    {/* <!-- 요리 연구소 --> */}
    <main id="main-area"> 요리연구소</main>

    {/* <!-- 요리해요 --> */}
    <div id="cook-area">요리해요 </div>

    {/* <!-- 이벤트 구역 --> */}
    <div id="event-area">이벤트 </div>

    {/* <!-- 하단구역 --> */}
    <footer id="footer-area"> 
      <div className= "footer-info">
        <div className="info-area">
          <ul className='info-top'>
            <li>
              <a href="#">이용약관</a>
            </li>
            <li>
              <a href="#">개인정보처리방침</a>
            </li>
            <li>
              <a href="#">이용 가이드</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
          </ul>
          <ul className='info-mid'>
            <li>샘표식품(주)</li>
            <li>서울특별시 중구 충무로2(우편번호: 04557)</li>
          </ul>
          <span>Copyright © 샘표식품, All Rights Reserved.</span>
        </div>
      </div>
      <div className= "footer-sns">
        <ul>
          <li>
            <a href="#">
              <img src="" alt="로고어워즈" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="인스타그램" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="카카오톡" />
            </a>
          </li>
          <section></section>
        </ul>
      </div>
    </footer>
      <button className='btn-top'>
        <a href='#'>↑</a>
      </button>

  </>
);


