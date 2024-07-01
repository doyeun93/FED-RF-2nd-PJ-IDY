import React from 'react';

import {comboData} from '../data/combodata';

import "../../css/footer_area.scss";

// 제이쿼리
import $ from "jquery";


function FooterArea() {


  const goSite = (e) => {
    let i = e.currentTarget.value;
    console.log("값:",i);

    let res = comboData.find(v=>{
      if(v.idx==i) return true;
    }); /////// find : 선택요소 하위 자손요소를 모두 찾음 /////

    console.log(res);

    window.open(res.link);
  };


  ///// 코드 리턴구역 ///////////////
    return (
        <footer id="footer-area">
          <div className="footer-info">
            <div className="info-area">
              <ul className="info-top">
                <li>
                  <a href="https://member.sempio.com/legal/terms-and-condition">이용약관</a>
                </li>
                <li>
                  <a href="https://member.sempio.com/legal/privacy-policy">개인정보처리방침</a>
                </li>
                <li>
                  <a href="https://semie.cooking/userguide">이용 가이드</a>
                </li>
                <li>
                  <a href="https://semie.cooking/aboutus">ABOUT US</a>
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
                    <img src={process.env.PUBLIC_URL+"/image/logo_award.png"} alt="로고어워즈" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={process.env.PUBLIC_URL+"/image/ic_insta.png"} alt="인스타그램" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={process.env.PUBLIC_URL+"/image/ic_kakao.png"} alt="카카오톡" />
                  </a>
                </li>

                <select name="brand" id="brand" onChange={goSite}>
                  {comboData.map((v,i) => <option key={i} value={v.idx}>{v.tit} </option>)}      
                </select>
              </ul>
            </div>
            <button className="btn-top">
              <a href="#" onClick={(e)=>{
                e.preventDefault();
                $("html,body").animate({scrollTop:"0px"},0,()=>{
                  setTimeout(()=>{
                    $(".header-slide li").css("translate","0 0");
                  },100);
                });
              }}>
                <img src={process.env.PUBLIC_URL+"/image/samie5.png"} alt="탑버튼" />
              </a>
            </button>
          </div>
        </footer>
    );
}

export default FooterArea;