import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateChall from "./createChall";
import Mychall from "./Mychall"; // Mychall 컴포넌트를 작성하거나 임포트하세요

// 페이지 이동
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Main" element={<Main />}/> 
                <Route path="/createChall" element={<CreateChall />} />
                <Route path="/Recommend" element={<Recommend />}/>
                <Route path="/Mychall" element={<Mychall />} />
                <Route path="/Clist" element={<Clist />} />
                <Route path="/SNS" element={<SNS />}/>
            </Routes>
        </Router>
    );
}

export default App;
