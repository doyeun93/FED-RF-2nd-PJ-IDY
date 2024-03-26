const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window,"DOMContentLoaded", loadFn);




function loadFn(){
  // 1. 대상선정 :
  // 1-1. 이벤트 대상 : 전체화면
  const wrap = document.querySelector(".wrap");
  const moving = document.querySelector(".pointer");
  
  wrap.onmousemove = (e) => {
    moving.style.top = e.pageY + "px";
    moving.style.left = e.pageX + "px";
  }; 
  
}

