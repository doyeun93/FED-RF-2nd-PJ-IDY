

import mFn from "./function"
import {comboData} from "../data/combodata";

export default function comboFn() {



//////// 콤보박스 바인딩 함수 
function bindCombo(){
    // 대상선정 : #brand
    const brandBox = mFn.qs("#brand");
    // console.log("콤보바인딩", brandBox);
 
    // 브랜드 바로가기 링크 이동하기
   
   brandBox.addEvt("change", openwindow); 
  
  
  } /////////// bindCombo 함수 ///////////
  
  
  // 링크 이동함수
  function openwindow(){
    // 1. 이동할 주소 : comboData.brandLink 객체 선택
     let url = comboData[this.id+"link"][this.value];
     console.log("브랜드 어디?", url);
  
    // 2. 선택 option 값의 주소로 이동하기
    
    if(url) window.open(url);
    else alert("선택을 변경해 주세요~");
  } ////////////////// open window ////////////////
  


}; ///////// comboFn 함수 //////////
  