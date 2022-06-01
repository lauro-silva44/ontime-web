import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Search } from "./pages/Search/Search";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/driver-search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
