const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

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


/****************************** 메인영역 슬라이드  ******************************/
function mainSlide(){
  const slide = qs(".slider");

  for(let i = 0; i < 3; i++){
    slide.innerHTML += `
    <li data-seq="${i}" class="snum-0${i+1}"></li>
    `;
  }
}


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


  // 2. 블릿 구현
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
  });
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





