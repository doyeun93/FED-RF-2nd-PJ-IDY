import React, { useEffect } from 'react';

import { cookData } from '../data/cookarea';
import mainCookFn from '../func/maincook';

function Cookpic(props) {
    useEffect(()=>{},[
        mainCookFn()
    ]);

    return (
        <div className="cook-img">
            <ul>
                {cookData.map((v,i)=>{
                   <li key={i}>
                        <a href="#">
                            <img src={`./image/${v.imgName}.jpg`} alt={v.title} />
                            <span>{v.title}</span>
                        </a>
                     </li>
                })}
            </ul>
        </div>
    );
}

export default Cookpic;