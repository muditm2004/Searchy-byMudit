import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainBrandMark from "../assets/Images/MainBrandMark.png";
import { SearchContext } from "../Context/SearchContext";
import Results from "./Results";

export default function Search() {
  const {
    searchTerm,
    setSearchTerm,
    searchQuery,
    setSearchQuery,
    searchType,
    setSearchType,
  } = useContext(SearchContext);
  const navigation = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  

  const tp = searchParams.get("type");

  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "var(--resultsBG)";
    setSearchQuery(query);
  setSearchTerm(query);
  }, []);
  function changeSearchType(e) {
    let id = e.target.id;
    let btmNav = document.querySelectorAll(".bottomNav");
    btmNav.forEach((nav) => {
      nav.style.border = "none";
    });
    document.querySelector(`#${id}`).style.borderBottom = "2px solid white";
    setSearchType(id);
  }

  function handleKeyDown(e) {
    if (searchTerm !== "") {
      if (e.key === "Enter") {
        setSearchQuery(searchTerm);
        navigation(`/search?query=${searchTerm}`)
        
      }
    }
  }

  function changeTerm(e) {
    let newQ=e.target.value;
    setSearchTerm(newQ);
    console.log('changed');
    
  }

  return (
    <>
      <div className="SearchHeaderFlex">
        <div className="SearchElements">
          <img src={MainBrandMark} alt="" className="MainBrandMark" onClick={()=>navigation('/')} />
          <input
            value={searchTerm}
            type="text"
            placeholder="Search"
            className="SearchInput"
            onChange={changeTerm}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="SearchTypenavbar">
          <div
            className="navlink bottomNav"
            id="web"
            onClick={changeSearchType}
          >
            Web
          </div>
          <div
            className="navlink bottomNav"
            id="images"
            onClick={changeSearchType}
          >
            Images
          </div>
          <div
            className="navlink bottomNav"
            id="videos"
            onClick={changeSearchType}
          >
            Videos
          </div>
          <div
            className="navlink bottomNav"
            id="news"
            onClick={changeSearchType}
          >
            News
          </div>
        </div>
      </div>

      <Results />
    </>
  );
}
