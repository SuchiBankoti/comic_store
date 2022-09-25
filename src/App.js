import React, { useContext } from "react"
import Library from "./Library"
import FrontPage from "./FrontPage"
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBook from "./SideBook";
import { LibraryContext } from "./Contexts/LibraryContext";

export default function App() {
  const { books } = useContext(LibraryContext)
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
            <Route path="/buybook" element={<SideBook book={books[0]} />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

