import React from "react"
import Library from "./Library"
import FrontPage from "./FrontPage"
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";

export default function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Library" element={<Library />} />
      </Routes>
    </>
  )
}

