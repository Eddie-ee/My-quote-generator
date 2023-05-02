import React, { useState } from "react";
import QuoteBox from "./QuoteBox";
import quotesData from "./quotesData";


export default function Main() {
  // Set state
  const [currentQuote, setCurrentQuote] = useState(null);

  // Function to generate a random quote
  function generateQuote() {
    const numRange = quotesData.length;
    const randomNumber = Math.floor(Math.random() * numRange);
    const randomQuote = quotesData[randomNumber];
    setCurrentQuote(randomQuote);

    return (
      <div className="main--div">
        <QuoteBox/>
      </div>
    );
  }
}


{/* <button onClick={generateQuote}>Generate Quote</button> */}
        //{currentQuote && <QuoteBox quote={currentQuote} />}