import React, { useEffect } from "react";

import { cookData } from "../data/cookarea";
import mainCookFn from "../func/maincook";

console.log(cookData);

function Cookpic(props) {
  useEffect(() => {
    mainCookFn();
  }, []);

  return (
    <div className="cook-img">
      <ul style={{display:"flex"}}>
        {cookData.map((v, i) => (
          <li key={i} style={{flexBasis:"33.33%",flexShrink:"0"}}>
            <a href="#">
              <img src={`./image/${v.imgName}.jpg`} alt={v.title} style={{width:"100%"}} />
              <span style={{display:"block",fontWeight:"bold",fontSize:"2vw",textAlign:"center",padding:"15px"}}>{v.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cookpic;
