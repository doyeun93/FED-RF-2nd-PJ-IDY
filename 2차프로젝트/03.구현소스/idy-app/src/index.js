import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/index.scss";
// import './components/func/headerarea';
import Main from "./components/pages/main";
import Layout from "./components/layout/Layout";
import Guide from "./components/pages/guide";
import Lab from "./components/pages/Lab";
import Cook from "./components/pages/cook";


function MainComponent(props) {
  return(
    // 라우터 루트로 라우터 구성시작
    <BrowserRouter>
      <Routes>
        {/* 중요!!! 레이아웃 컴포넌트를 루트로 설정!
        루트 Route 는 홀로닫지말고 반드시 다른
        하위 라우트를 감싸도록한다!!! */}
        <Route path="/" element={<Layout />}>
          {/* 하위 라우트 셋팅 
        -> path설정대신 index키워드를 쓰면 
        첫페이지로 구성됨 -> MainArea 컴포넌트 <Outlet/>에
        출력된다!*/}
          <Route index element={<Main />} />
          <Route path="guide" element={<Guide />} />
          <Route path="lab" element={<Lab />} />
          <Route path="cook" element={<Cook />} />
          <Route path="event" element={<Event />} />
        </Route>
        {/* Layout 루트 Route로 하위 Route를 감싼다! */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent/>);
