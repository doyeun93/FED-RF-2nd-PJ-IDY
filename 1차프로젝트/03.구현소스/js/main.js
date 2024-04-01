const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

/// 바로실행하는 익명함수(지역화목적) 구역 2 ///////////
(()=>{

})(); ///////////// 익명지역함수실행구역 ////////////////

/// 바로실행하는 익명함수(지역화목적) 구역 1 ///////////
(()=>{

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window,"DOMContentLoaded", loadFn);


/**************************** 마우스 효과 ****************************/

function loadFn(){
  // 1. 대상선정 :
  // 1-1. 이벤트 대상 : 전체화면
  const wrap = document.querySelector(".wrap");
  const moving = document.querySelector(".pointer");
  
  wrap.onmousemove = (e) => {
    moving.style.top = e.pageY + "px";
    moving.style.left = e.pageX + "px";
  }; 
  
  // 이벤트 대상 구역에 들어올 때 보이기 , 나가면 숨기기 
  wrap.onmouseenter = () => {
    moving.style.opacity = 1;
  }

  wrap.onmouseleave = () => {
    moving.style.opacity = 0;
  }
}  ///////////// loadFn 함수 ////////////

/*********************** 프로모션 구역 슬라이드 함수 ***********************/
function goSlide(evt,sts=true){

  // 1. 오른쪽 버튼인 .ab2인가?
  let isRbtn = 
  sts? this.classList.contains("ab2"):true;

  if (isRbtn) {
    // (1)먼저 왼쪽으로 이동하기
    proslider.style.left = "-20%";
    proslider.style.transition = ".4s ease-in-out";

    setTimeout(() => {
      // (2-1)맨 앞 li 맨 뒤로 이동
      proslider.appendChild(proslider.querySelectorAll("li")[0]);
      // 슬라이드 left 값이 -100%이므로 left값을 0으로 변경

      // (2-2)left 값 0으로 변경
      proslider.style.left = "0";
      // (2-3)left 트랜지션 없애기
      proslider.style.transition = "none";
    }, 600);

  }/////// if문 //////
  else{
    let list = proslider.querySelectorAll(li);
    proslider.insertBefore(list[list.length - 1], list[0]);
    proslider.style.left = "-20%";
    proslider.style.transition = "none";

    setTimeout(() => {
      proslider.style.left = "0";
      proslider.style.transition = ".4s ease-in-out";
    }, 0);
  } /////// else문  //////


 /*  // 2. 블릿 구현
  let seq = slide.querySelectorAll('li')[isRbtn? 1 : 0]
    .getAttribute('data-seq');
    console.log('블릿이 읽어올 순번:',seq,'데이터형:',typeof seq);
   
  // 2-1. 블릿 변경하기
  indic.forEach((ele,idx)=>{
      if(idx == seq){
        ele.classList.add('on');
      }
      else{
        ele.classList.remove('on');
      }
  }); */

} //////////////////////// goSlide 함수 ////////////////////

let autoI;
let autoT;
autoSlide();

// 자동 넘김 호출 함수 //////
function autoSlide(){

 autoI = setInterval(() => {
   goSlide(false,false);
 }, 3000); 
} //////////////////////// autoSlide 함수 //////////////////


// 위치값 함수 (화면상단에서의 top위치값)
const getBCR = (x) => x.getBoundingClientRect().top;
// 화면기준값(높이의 2/3)
const winH = window.innerHeight/3;
console.log('화면1/3:', winH);

// 스크롤 등장 대상
// New Item
const newItem = qs('.new-cont-box');
const showTg = qs('.new-first-slider');
const showTg2 = qs('.new-second-slider');


// 윈도우 스크롤 이벤트 설정하기
window.addEventListener('scroll',()=>{

  // 대상위치값
  // console.log(getBCR(newItem));
  if(getBCR(newItem) < winH){
    showTg.classList.add('on');
  }
  else{
    showTg.classList.remove('on');
  }
  if(getBCR(newItem) < winH){
    showTg2.classList.add('on');
  }
  else{
    showTg2.classList.remove('on');
  }

  
}); /////// scroll /////////////////


})(); ///////////// 익명지역함수실행구역1 ////////////////




/// 바로실행하는 익명함수(지역화목적) 구역 2 ///////////
(()=>{

  
  const proslider = qs('.slider');
  goSlide();
  
/*********************** 메인 배너 슬라이드 함수 ***********************/
function goSlide(){

    // (1)먼저 왼쪽으로 이동하기
    proslider.style.left = "-100%";
    proslider.style.transition = ".6s ease-in-out";

    setTimeout(() => {
      // (2-1)맨 앞 li 맨 뒤로 이동
      proslider.appendChild(proslider.querySelectorAll("li")[0]);
      // 슬라이드 left 값이 -100%이므로 left값을 0으로 변경

      // (2-2)left 값 0으로 변경
      proslider.style.left = "0";
      // (2-3)left 트랜지션 없애기
      proslider.style.transition = "none";
    }, 600);


} //////////////////////// goSlide 함수 ////////////////////

let autoI;
let autoT;
autoSlide();

// 자동 넘김 호출 함수 //////
function autoSlide(){

 autoI = setInterval(() => {
   goSlide(false,false);
 }, 3000); 
} //////////////////////// autoSlide 함수 //////////////////

})(); ///////////// 익명지역함수실행구역 ////////////////




