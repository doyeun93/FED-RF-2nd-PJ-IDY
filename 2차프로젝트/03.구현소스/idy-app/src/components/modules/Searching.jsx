import React from "react";

import "../../css/searching.scss";

import { guideData } from "../data/sub1";

function Searching({ kword }) {

  const [kw, setKw] = useState(kword);
  const [sort, setSort] = useState("asc");

  const newList = guideData.filter((v) => {
    // let newVal = v.cname.toLocaleLowerCase();

    let key = kw.toLocaleLowerCase();

    if(

      (newVal.indexOf(key)!== -1) 
    //   &&

    //   (
    //     (chk[0] ? v.alignment == "hero" : false) ||
    //     (chk[1] ? v.alignment == "comp" : false) ||
    //     (chk[2] ? v.alignment == "villain" : false)
    //   )
      // true && (true || false || false)
      // -> &&문은 모두 true여야 true고 ||문은 하나만 true여도 true다

    ) return true;
  }); ////// filter /////////////////

  // [ 결과 내 재검색 : 데이터 항목 중 alignment값으로 검색함 ]

  // (1) 오름 차순일 경우
  if (sort == "asc") {
    newList.sort((a, b) => (a.cname > b.cname ? 1 : a.cname < b.cname ? -1 : 0));
  } //// if /////

  // (2) 내림 차순일 경우
  else if (sort == "desc") {
    newList.sort((a, b) => (a.cname > b.cname ? -1 : a.cname < b.cname ? 1 : 0));
  } ///// else if ///////

  /// 코드 리턴 구역
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 1-1.검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기 아이콘 */}
            <FontAwesomeIcon icon={faSearch} className="schbtn" title="Open search" />
            {/* 입력창 */}
            <input
              id="schin"
              type="text"
              placeholder="Filter by Keyword"
              defaultValue={kword}
              onKeyUp={(e) => {
                if (e.key == "Enter") {
                  // 1. 검색어 상태값 변경
                  setKw(e.target.value);

                  // 2. 처음 검색시 정렬은 기본 정렬 오름차순(asc)
                  setSort("asc");

                  // 정렬 선택 박스 선택 값 변경(DOM에서 보이기 변경)
                  document.querySelector("#sel").value = "asc";
                } //// if //////////
              }}
            />
          </div>
        </div>
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
          {/* 2-1. 결과 타이틀 */}
          <h2 className="restit">BROWSE CHARACTERS</h2>
          {/* 2-2. 정렬선택박스 */}
          <aside className="sortbx">
            <select
              name="sel"
              id="sel"
              className="sel"
              // 값을 변경할 때 이벤트 발생
              onChange={(e) => {
                console.log(e.target.value);
                // 정렬기준 상태변수 업데이트
                setSort(e.target.value);
              }}
            >
              <button value="asc">오름차순</button>
              <button value="desc">내림차순</button>
            </select>
          </aside>
          {/* 2-3. 캐릭터 리스트 컴포넌트 : 
            데이터 상태변수 중 첫번째값만 보냄 */}
          <SearchingCat dt={newList} />
        </div>
      </section>
    </>
  );
}

export default Searching;
