// DC PJ 캐릭터 검색결과 리스트 컴포넌트
import React from "react";

// CSS불러오기
import "../../css/searching.scss";

// 라우터돔 Link
import { Link } from "react-router-dom";

function SearchingData({ dt }) {
  // dt - 검색된 배열데이터

  // total - 검색된 배열데이터 개수
  const total = dt.length;
  console.log("데이터수:",total);

  return (
    <>
 
      {
        // 선택데이터가 0개이면 아래 출력
        total == 0 && (
          <h2 style={{ textAlign: "center" }}>
            입력하신 데이터가 없습니다.
          </h2>
        )
      }
    </>
  );
}

export default SearchingData;
