import React, { createContext, useContext, useState, useEffect } from "react";

export const SearchContext = createContext();

export default function SContext({ children }) {
  const [resultsFetched, setResultsFetched] = useState(false);
  const [navToggle, setNavToggle] = useState("closed");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("web");
  const [webResults, setWebResults] = useState({ query: "", results: [] });
  const [ansResults, setAnsResults] = useState({ query: "", results: [] });
  const [imgResults, setImgResults] = useState({ query: "", results: [] });
  const [newsResults, setNewsResults] = useState({ query: "", results: [] });
  const [videoResults, setVideoResults] = useState({ query: "", results: [] });

  const fetchResults = (type, query, setResults) => {
    setResultsFetched(false);
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/${type}/${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setResults({ query, results: data });
      })
      .catch((error) => {
        console.error(`Error fetching ${type} results:`, error);
      })
      .finally(() => { setResultsFetched(true)
        setIsLoading(false)});
  };

  useEffect(() => {
    if (!searchQuery) return;

    switch (searchType) {
      case "web":
        if (webResults.query !== searchQuery) fetchResults("web", searchQuery, setWebResults);
        if (ansResults.query !== searchQuery) fetchResults("ans", searchQuery, setAnsResults);
        break;
      case "images":
        if (imgResults.query !== searchQuery) fetchResults("images", searchQuery, setImgResults);
        break;
      case "videos":
        if (videoResults.query !== searchQuery) fetchResults("videos", searchQuery, setVideoResults);
        break;
      case "news":
        if (newsResults.query !== searchQuery) fetchResults("news", searchQuery, setNewsResults);
        break;
      default:
        break;
    }
  }, [searchQuery, searchType]);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        navToggle,
        setNavToggle,
        isLoading,
        setIsLoading,
        searchTerm,
        setSearchTerm,
        searchType,
        setSearchType,
        webResults,
        setWebResults,
        ansResults,
        setAnsResults,
        imgResults,
        setImgResults,
        newsResults,
        setNewsResults,
        videoResults,
        setVideoResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
