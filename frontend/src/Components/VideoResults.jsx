import React, { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

export default function VideoResults() {
  const { resultsFetched, isLoading, videoResults } = useContext(SearchContext);
  return (
    <>
      {!isLoading && resultsFetched && videoResults.results.length === 0 && (
        <p>No results found</p>
      )}
      {!isLoading &&
        videoResults &&
        videoResults.results &&
        videoResults.results.length > 0 && (
          <>
            <div className="resultsGridContainer">
              {videoResults.results.map((result, index) => (
                <div key={index} className="img-item">
                  <div className="imgContainer">
                    <iframe src={result.embed_url} />
                  </div>
                  <div className="-title">{result.title}</div>
                </div>
              ))}

              {/* {videoResults.results.map((result, index) => (
                  <a href={result.url} key={index}>
                  <div key={index} className="img-item">
                    <div className="imgContainer">
                      <img src={result.thumbnail} alt={result.title} />
                    </div>
                    <div className="image-title">{result.title}</div>
                  </div>
                </a>
                ))} */}
            </div>
          </>
        )}
    </>
  );
}
