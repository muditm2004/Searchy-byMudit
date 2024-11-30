import React, { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

export default function ImageResults() {
  const { resultsFetched,isLoading,imgResults } = useContext(SearchContext);
  return (
    <>
    
    {!isLoading && resultsFetched && imgResults.results.length === 0 && (
      <p>No results found</p>
    )}
    {!isLoading &&
      imgResults &&
      imgResults.results &&
      imgResults.results.length > 0 && (
        <>
          <div className="resultsGridContainer">
            {imgResults.results.map((result, index) => (
              <a href={result.url} key={index}>
              <div key={index} className="img-item">
                <div className="imgContainer">
                  <img src={result.thumbnail} alt={result.title} />
                </div>
                <div className="image-title">{result.title}</div>
              </div>
            </a>
            ))}
          </div>
        </>
      )}
  </>
);
}