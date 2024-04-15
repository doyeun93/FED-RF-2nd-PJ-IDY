import {icMenuData} from '../data/ic_data.js';

const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);


// export default function iceList (){
//     const mainItem = qs(".main-item");

//     mainItem.innerHTML = icData.mainItem;
// };

const iceList = qs('.main-item-list');
console.log(iceList);

iceList.innerHTML = 
icMenuData.map(v=>`
    <li>
        <a href="#">
            <img src="./images/sub/${v.imgName}.png" alt="${v.title}">
            <aside class="main-item-info">${v.title}</aside>
        </a>
    </li>
`).join('');
