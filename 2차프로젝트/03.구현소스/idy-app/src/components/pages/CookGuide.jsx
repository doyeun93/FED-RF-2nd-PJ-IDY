// 요리초보가이드 페이지 컴포넌트 ///
import "../../css/cookguide.scss";
import { guideData } from "../data/sub1";
import SearchPage from "./SearchPage";

export default function CookGuide() {

  //// 코드 리턴 구역
  return (
    <>
      <section className="guide-top">
        <div className="guide-title">
            <span>요리초보가이드</span>
        </div>
        <div className="guide-seach">
          <ul className="guide-wrap">
            <li>
              {/* <a href="#">
                <img src="./image/ic_search.png" alt="검색" onClick=""/>
                <input type="text" name="schGuide" id="schGuide" placeholder="검색어를 입력해주세요" />
              </a>
            </li>
            <li>
                <button type="button">오름차순</button>
            </li>
            <li>
                <button type="button">내림차순</button> */}
                {/* <SearchPage /> */}
            </li>
          </ul>
        </div>
        <div className="guide-mid">
            <ul>
                {guideData.map((v,i) =>(
                    <li key={i} >
                        <a href="#">
                            <img src={`./image/sub1/${v.imgName}.jpg`} alt={v.title} />
                            <span>{v.title}</span>
                            {/* <span>{v.text}</span> */}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
      </section>
    </>
  );
} ////////////  Guide함수 ////////
