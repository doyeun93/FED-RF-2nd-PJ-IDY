//  가로 스크롤 구현

import mFn from "./function";


const slidePg = mFn.qs('.header-slide');


// 2.코드 변수에 태그 만들어 넣기
let hcode = "<ul>";

for(let i = 1; i <= 8; i++){
  hcode += `
    <li>
      <img src="../image/main${i}.jpg" alt="header image" />
    </li>
  `;
} ///////////////// for ////////////////////

hcode += "</ul>";


// 3. 코드 출력하기
slidePg.innerHTML = hcode;



const tpg =  mFn.qs('.header-img');

// 움직일 대상 : .slidePg>ul
const target = mFn.qs('.header-slide>ul');

// 추가 대상 : .slidePg>ul>li
const eachList = mFn.qsaEl(target,'li');

// 2. 이벤트 설정하기
mFn.addEvt(window,'scroll', moveSlide);

// 3. 함수 만들기

////// ((1)) 슬라이드 이동함수 //////
function moveSlide(){
  // 1. 스티키 부모박스 바운딩 top값
  let bTop = mFn.getBCR(tpg);
  // console.log('바운딩top:', bTop);

  // 2. ★★★ 이동할 타겟박스 left값으로 부모 바운딩 top값 넣기
  // (1) 바운딩 top값이 0초과일때 처음 위치 재설정하기
  if(bTop > 0){
    target.style.left = '0px';
  }
  // (2) 바운딩 top값이 0이하 -3000이하일때 부모 바운딩 top값 위치이동하기
  else if(bTop <= 0 && bTop >= -3000){
    target.style.left = bTop + 'px';
  }
  // (3) 마지막 한계 이후엔 한계값으로 세팅
  else{
    target.style.left ='-3000px';
  }


   // 3. 개별리스트 상하 이동함수 호출하기
   eachList.forEach((ele,idx)=>upDownFn(ele,idx)); 
   // ele = 해당 리스트 li자신, idx는 li 자신의 순번

} ///////// moveSlide 함수 ////////////////////



////// ((2)) 리스트 상하 이동함수 ///////
function upDownFn(ele,idx){ // ele = 각 li요소, idx =  각 li 순번

  // 스티키 박스 하위 li가 보이는 화면 left 기준선에 대한 위치값
  // 바운딩 left값을 이용하여 자기 위치에서 위/아래로 이동하는 수치변경하기
  
  // 1. 바운딩 left값 구하기
  let mVal = mFn.getBCR2(ele);

  // 2. 위치값을 양수로 만들고 윈도우 크기로 나눈 후 백분율. 수치가 크므로 2로 나움
  mVal = Math.abs(mVal/window.innerWidth)*100/3;
  // console.log('바운딩left:',mVal);

  // 3. 들어온 li순번이 짝수일 경우 마이너스 처리하기
  // 짝수일 경우 마이너스를 곱하여 방향을 반대로 해준다
  // 짝수는 %연산자 사용 : 숫자%2==0 이면 짝수임
  if(idx%2==0) mVal = -mVal;
  // console.log("순번을 2로 나눈 나머지:", idx%2);
  
  // 실제 위치이동  css적용하기
  ele.style.translate = `0 ${mVal}%`;
  

} ///////// upDownFn 함수 //////////


