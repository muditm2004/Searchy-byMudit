import React, { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

export default function WebResults() {
  const { resultsFetched, isLoading, webResults, ansResults } =
    useContext(SearchContext);


    function extractDomain(url) {
        if (!url) return "";
        // if (url.startsWith("/url?esrc=s&q=&rct=j&sa=U&url=")) {
        //   const actualUrl = url.split("/url?esrc=s&q=&rct=j&sa=U&url=")[1].split("&")[0];
        //   url = decodeURIComponent(actualUrl);
        // }
        // Use a regular expression to match the domain part
        const match = url.match(/^(https?:\/\/)?(www\.)?([^\/]+)(\/.*)?$/);
        console.log(match ? match[3] : null);
        
        return match ? match[3] : null;
      }

  return (
    <>
      {!isLoading && resultsFetched && webResults.results.length === 0 && (
        <p>No results found</p>
      )}
      {!isLoading &&
        webResults &&
        webResults.results &&
        webResults.results.length > 0 && (
          <>
            {ansResults.results.length === 0 ? (
              <></>
            ) : (
              <>
                <div className="Ansbox">
                  <p>
                    {ansResults &&
                      ansResults.results &&
                      ansResults.results[0]?.text}
                  </p>
                </div>
              </>
            )}

            <div className="resultsContainer">
              {webResults.results.map((result, index) => (
                <div className="result" key={index}>
                  <div className="resultHead">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${
                        new URL(result.href).hostname
                      }&sz=64`}
                      className="resultFavicon"
                      alt="favicon"
                    />
                    <a href={result.href}>
                      <p className="result-siteName">
                        {extractDomain(result.href)}
                      </p>
                    
                  
                  <h2 className="resultHeadTitle">{result.title}</h2>
                  </a>
                  </div>
                  <div className="resultBody">
                    <p>{result.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
    </>
  );
}
