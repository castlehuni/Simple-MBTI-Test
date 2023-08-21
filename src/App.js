import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from "./pages/MainPage/MBTImain"
import Admin from "./pages/AdminPage/MBTIadmin";
import Result from "./pages/ResultPage/MBTIresult"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/result/:mbti" element={<Result />} /> {/* link나 navigator를 통해 다른 페이지에 값을 보낼 때는 다음과 같이 /:변수를 통해 실행함 */}
      </Routes>
    </div>
  );
}

export default App;
