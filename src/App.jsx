import React from "react";
import SearchByName from "./component/SearchByName";
import GetDataByName from "./component/GetDataByName";
import Demo from "./component/Demo";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchByName />} />
      <Route path="detail-page" element={<GetDataByName />} />
      <Route path="demo" element={<Demo />} />
    </Routes>
  );
};

export default App;
