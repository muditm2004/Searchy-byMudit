import React from "react";
import Home from "./Components/Home";
import Search from "./Components/Search";
import SearchContext from "./Context/SearchContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./OtherPages/About";
import Policy from "./OtherPages/Policy";
// import PrivacyPolicy from "./OtherPages/PrivacyPolicy";

export default function App() {
  return (
    <>
      <SearchContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/privacypolicy' element={<Policy/>}/>
            {/* <Route path='/privacypolicy' element={<PrivacyPolicy/>}/> */}
          </Routes>
        </BrowserRouter>
      </SearchContext>
    </>
  );
}
