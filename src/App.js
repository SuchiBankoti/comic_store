import React from "react";
import Library from "./Library";
import FrontPage from "./FrontPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBook from "./SideBook";

export default function App() {
  return (
    <div className="body">
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
    </div>
  );
}
