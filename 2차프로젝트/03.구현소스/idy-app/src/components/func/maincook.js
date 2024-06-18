import mFn from "../func/function";



export default function mainCookFn() {


  const gbox = mFn.qs(".cook-img");

  let target = mFn.qs(gbox, "ul");



  const updateCriteria = () => mFn.qsa(target, "li")[0].offsetWidth;


  
  let criteria = updateCriteria();

  
  mFn.addEvt( window, "resize",

    () => {criteria = updateCriteria();
  });

 
  let currVal = 0;

  function moveGallery() {
    // 현재값 1씩 감소

    target.style.translate = --currVal + "px";

   
    if (currVal <= Math.floor(-criteria)) {
      
      target.appendChild(mFn.qsaEl(target, "li")[0]);

      
      target.style.translate = "0px";

    
      currVal = 0;
    } ///////////////// if 문 /////////

    
    if (!stopSts) setTimeout(moveGallery, 10);
  } //////// moveGallery ///////////////

  
  let stopSts = false;

  mFn.addEvt(gbox, "mouseenter", () => {
   
    stopSts = true;
  });

  mFn.addEvt(gbox, "mouseleave", () => {
    
    stopSts = false;
    
    moveGallery();
  });
} ////// mainCookFn함수 //////////
