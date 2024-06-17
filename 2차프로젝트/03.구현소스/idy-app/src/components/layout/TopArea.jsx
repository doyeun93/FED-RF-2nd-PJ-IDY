import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { gnbData } from '../data/gnb';
import "../../css/top_area.scss";


function TopArea(props) {

  const goNav = useNavigate();

    return (
        <section id="top-area">
          <header className="topbox">
              <a className="logo" href="#" >
              <img src="./image/logo.jpg" alt="로고이미지" 
                onClick={(e) => {e.preventDefault(); 
                goNav("/")}}/>
              </a>
            <nav id="gnb">
              <ul className="top-gnb">
                {gnbData.map((v,i)=>
                <li key={i}>
                  {
                    v.sub ? <a href="#">{v.txt}</a> : <Link to={v.link}>{v.txt}</Link>
                  }
                  {
                    v.sub && <ul className="bt-gnb">
                      {
                        v.sub.map((v,i)=>
                        <li key={i}>
                          <Link to={v.link}>{v.txt}</Link>
                        </li>)
                      }
                    </ul>
                  }
                </li>)}
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
                    <input type="text" name="schinGnb" id="schinGnb" placeholder="Filter by Keyword" />
                  </a>
                </li>
              </ul>
            </div>
          </header>
        </section>
    );
}

export default TopArea;