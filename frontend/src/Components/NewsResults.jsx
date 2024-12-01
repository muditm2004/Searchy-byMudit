import React, { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

export default function NewsResults() {
  const { resultsFetched, isLoading, newsResults } = useContext(SearchContext);

  function extractDomain(url) {
    if (!url) return "";
    // if (url.startsWith("/url?esrc=s&q=&rct=j&sa=U&url=")) {
    //   const actualUrl = url.split("/url?esrc=s&q=&rct=j&sa=U&url=")[1].split("&")[0];
    //   url = decodeURIComponent(actualUrl);
    // }
    // Use a regular expression to match the domain part
    const match = url.match(/^(https?:\/\/)?(www\.)?([^\/]+)(\/.*)?$/);
    return match ? match[3] : null;
  }

  function formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "long", // Display the full month name
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Use 12-hour clock
    };

    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", options);
  }

  return (
    <>
      {!isLoading && resultsFetched && newsResults.results.length === 0 && (
        <p>No results found</p>
      )}
      {!isLoading &&
        newsResults &&
        newsResults.results &&
        newsResults.results.length > 0 && (
          <>
            <div className="newsResultsContainer">
              {newsResults.results.map((result, index) => (
                <div className="newsResult" key={index}>
                  <div className="newsContentSide">
                  <a href={result.url}>
                    <div className="resultHead">
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${
                          new URL(result.url).hostname
                        }&sz=64`}
                        className="resultFavicon"
                        alt="favicon"
                      />
                      
                        <p className="result-siteName">
                          {extractDomain(result.url)}
                        </p>
                      
                    <h2 className="resultHeadTitle">{result.title}</h2>
                    
                    </div></a>
                    <p className="resultBody">{result.body}</p>
                    <p className="newsDate">{formatDate(result.date)}</p>
                  </div>
                  <div className="newsImgSide">
                    <img src={result.image} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
    </>
  );
}
