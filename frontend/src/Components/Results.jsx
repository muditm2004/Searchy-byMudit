import React, { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
import Loading from "./Loading";
import WebResults from "./WebResults";
import ImageResults from "./ImageResults";
import VideoResults from "./VideoResults";
import NewsResults from "./NewsResults";

export default function Results() {
  const {
    isLoading,
    searchType,
    resultsFetched
  } = useContext(SearchContext);

  
  function resultsRender(type){
    switch (type) {
      case "web":
        return <WebResults/>
      case 'images':
        return <ImageResults/>
     
      case 'videos':
        return <VideoResults/>

      case 'news':
        return <NewsResults/>

    }
  }

  

  return (
    <>
    <div id="ResultsSection">
      { (isLoading)&&(!resultsFetched)?(<Loading/>):(<>{ resultsRender(searchType)}</>) }
      </div>
    </>
  );
}
