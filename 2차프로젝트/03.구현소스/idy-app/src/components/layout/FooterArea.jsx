import React from 'react';

function FooterArea(props) {
    return (
        <footer id="footer-area">
          <div className="footer-info">
            <div className="info-area">
              <ul className="info-top">
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
              <ul className="info-mid">
                <li>샘표식품(주)</li>
                <li>서울특별시 중구 충무로2(우편번호: 04557)</li>
              </ul>
              <span>Copyright © 샘표식품, All Rights Reserved.</span>
            </div>
          </div>
          <div className="footer-social">
            <div className="footer-sns">
              <ul>
                <li>
                  <a href="#">
                    <img src="./image/logo_award.png" alt="로고어워즈" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./image/ic_insta.png" alt="인스타그램" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./image/ic_kakao.png" alt="카카오톡" />
                  </a>
                </li>
                <select name="brand" id="brand">
                  <option value="init">관련사이트</option>
                  <option value="brand1">샘표 기업</option>
                  <option value="brand2">새미네부엌 플랫폼</option>
                  <option value="brand3">티·아시아</option>
                  <option value="brand4">새미네부엌</option>
                  <option value="brand5">폰타나</option>
                  <option value="brand6">샘표 채용</option>
                  <option value="brand7">샘표 통합회원 웹사이트</option>
                </select>
              </ul>
            </div>
            <button className="btn-top">
              <a href="#">
                <img src="./image/samie5.png" alt="탑버튼" />
              </a>
            </button>
          </div>
        </footer>
    );
}

export default FooterArea;