import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [quotes, setQuotes] = useState([{ quote: "", author: "" }]);
  const [quote, setQuote] = useState({ quote: "", author: "" });

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((data) => data.json())
      .then(({ quotes }) => {
        setQuotes(quotes);
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function changeQuote() {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  return (
    <div
      className="AppWrapper"
      style={{
        backgroundColor: "dodgerblue",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
      }}
    >
      <div
        className="QuoteBox"
        style={{
          backgroundColor: "white",
          padding: "1rem",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <div className="quotes-wrapper">
          <span className="text">{quote.quote}</span>
          <span className="author">{quote.author}</span>
        </div>
        <div className="bottom-quotebox">
          <a target="_blank" href="https://twitter.com/" className="TweetQuote">
            Tweet this Quote
          </a>
          <button className="newquote" onClick={changeQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
