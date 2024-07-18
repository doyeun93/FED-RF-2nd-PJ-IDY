// 요리연구소 페이지 컴포넌트 ///

import { useState } from "react";
import "../../css/cooklab.scss";
import { rDetailData } from "../data/sub2_1_detail";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function CookLab() {
  // 정렬
  const [sort, setSort] = useState("asc");

  if (sort == "asc") {
    rDetailData.sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0));
  } else if (sort == "desc") {
    rDetailData.sort((a, b) => (a.title > b.title ? -1 : a.title < b.title ? 1 : 0));
  }

  
  const [lbar, setLbar] = useState(false);
 
  const labBar = () => {
    setLbar(!lbar);
  }

  //// 코드 리턴 구역
  return (
    <>
      <section className="cooklab-top">
        <div className="cooklab-title">
          <span>요리연구소</span>
        </div>
        <div className="cooklab-text">
          <ul>
            <li className="on">  
              {labBar && <Link to="/cooklab" >레시피</Link>}
            </li>
            <li>
              {labBar && <Link to="/cooksol">솔루션</Link> }
            </li>
          </ul>
        </div>
        <div className="lab-sort">
          <aside className="lsortbx">
            <select
              name="lsel"
              id="lsel"
              className="lsel"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value="asc">오름차순</option>
              <option value="desc">내림차순</option>
            </select>
          </aside>
        </div>
        <div className="lab-mid">
          <ul>
            {rDetailData.map((v, i) => (
              <li key={i}>
                <div className="lab-imgbox">
                  <img src={`./image/sub2/${v.imgName}.jpg`} alt={v.title} />
                  <div className="lab-info">
                    <p>{v.type2}</p>
                    <p>{v.type3}</p>
                  </div>
                </div>
                <Link to="/detail"
                  state={{
                  imgName: v.imgName, 
                  title: v.title, 
                  text: v.text, 
                  type: v.type1, 
                  type: v.type2, 
                }}
                >
                  <span>{v.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
} ////////////  Lab함수 ////////
