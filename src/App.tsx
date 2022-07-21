import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Search } from "./pages/Search/Search";
import { Login } from "./pages/Login/Login";
import "./styles/global.scss";
import { MyBookings } from "./pages/MyBookings/MyBookings";
import { Payment } from "./pages/Payment/Payment";
import { DashBoard } from "./pages/DashBoard/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/driver-search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/driver-search/payment" element={<Payment />} />
        <Route path="/dash-board" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
