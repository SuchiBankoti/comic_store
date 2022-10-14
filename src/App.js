import React from "react";
import Library from "./Library";
import FrontPage from "./FrontPage";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import SideBook from "./SideBook";
import Navbar from "./Navbar";


export default function App() {
  return (
    <div className="main">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/buybook/:id" element={<SideBook />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
