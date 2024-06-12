// import comboData from "../data/combo"

import mFn from "./function"
import {comboData} from "../data/combodata";

export default function comboFn() {



//////// 콤보박스 바인딩 함수 
function bindCombo(){
    // // 1. 대상선정 : #brand
    const brandBox = mFn.qs("#brand");
    

    // // 2. 데이터 바인딩하기
    // // 데이터 대상 : comboData.brand
  
    // // 대상 요소 내부 데이터 넣기
    // // 배열데이터 .map().join('') -> JS에서만 join사용가능하고 리액트에서는 join을 생략할 수 있다
    brandBox.innerHTML = <option value="init">관련사이트</option>
    //   comboData.brand.map((v,i)=>`
    //     <option value="brand${i}">${v}</option>
    //     `);
  


   // 3. 브랜드 바로가기 링크 이동하기
   
   brandBox.addEvt("change", openwindow); 
  
  
  } /////////// bindCombo 함수 ///////////
  
  
  // 링크 이동함수
  function openwindow(){
    // 1. 이동할 주소 : comboData.brandLink 객체 선택
     let url = comboData[this.id+"Link"][this.value];
  
  
    // 2. 선택 option 값의 주소로 이동하기
    
    if(url) window.open(url);
    else alert("선택을 변경해 주세요~");
  } ////////////////// open window ////////////////
  


}; ///////// comboFn 함수 //////////
  