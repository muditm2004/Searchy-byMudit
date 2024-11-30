import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import more from "../assets/Images/moreToggle.png";
import closeMore from "../assets/Images/closeMore.png";
import mobileBrandMark from "../assets/Images/OneLine-BrandMark.png";
import btnLogo from "../assets/Images/btnLogo.png";
import { SearchContext } from "../Context/SearchContext";

export default function Home() {
  const {
    searchQuery,
    setSearchQuery,
    navToggle,
    setNavToggle,
    searchTerm,
    setSearchTerm,
    searchType,
    setSearchType
  } = useContext(SearchContext);

  function homeQueryChange(e) {
    const query = e.target.value;
    setSearchTerm(query);
  }

  function handleKeyDown(e) {
    if (searchTerm !== "") {
      if (e.key === "Enter") {
        setSearchQuery(searchTerm);
        navigate(`/search?query=${searchTerm}`);
      }
    }
  }

  useEffect(()=>{
    document.querySelector('body').style.backgroundColor='var(--bg-color)';
    setSearchTerm('');
    setSearchQuery('');
    setSearchType('web');
    navigate('/');
  },[]);

  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <div className={`togglebtn`}>
          <img
            src={navToggle === "opened" ? closeMore : more}
            alt="toggle"
            onClick={() =>
              setNavToggle(navToggle === "opened" ? "closed" : "opened")
            }
          />
        </div>
        <div className="navlink"onClick={()=>navigate('/about')}>About</div>
        <div className="navlink" onClick={()=>navigate('/privacypolicy')}>Privacy Policy</div>
        <div className={`sidepanel panel${navToggle}`}>
          <div className="sidepanelNav">
            <div className="navlink" onClick={()=>navigate('/about')} >About</div>
            <div className="navlink" onClick={()=>navigate('/privacypolicy')}>Privacy Policy</div>
          </div>
        </div>
      </div>

      <div className="HomeContent">
        <img src={mobileBrandMark} alt="brandMark" />
        <div className="HomeInputs">
          <input
            value={searchTerm}
            type="text"
            placeholder="Search"
            onChange={homeQueryChange}
            onKeyDown={handleKeyDown}
          />
          <button>
            <img src={btnLogo} alt="searchLogo" />
          </button>
        </div>
      </div>
    </>
  );
}
