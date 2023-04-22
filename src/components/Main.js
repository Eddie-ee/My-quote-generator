import React, { useState } from "react";
import QuoteBox from "./QuoteBox";
import quotesData from "./quotesData";

export default function Main() {
  // Set state
  const [currentQuote, setCurrentQuote] = useState(null);

  // Function to generate a random quote
  function generateQuote() {
    const numRange = quotesData.length;
    const randomNumber = Math.floor(Math.random * numRange);
    const randomQuote = quotesData[randomNumber];
    setCurrentQuote(randomQuote);

    return (
      <div className="main--div">
        <button onClick={generateQuote}>Generate Quote</button>
        <QuoteBox quote={randomQuote} />
      </div>
    );
  }
}

// Work in step 3 (afer
// props were passed down to QuoteBox) and then
// create a seperate state update function as suggested
// called handleGenerateQuote() to update state seperately from
// the rest of the functionality of the code..

//STEP 3: UPDATE THIS SECTION
// function generateQuote() {
//   const numRange = quotesData.length;
//   const randomNumber = Math.floor(Math.random() * numRange);
//   const randomQuote = quotesData[randomNumber];
//   return randomQuote;
// }

//STEP 4: UPDATE THIS SECTION
// return (
//   <div className="main--div">
//     <button onClick={() => setCurrentQuote(generateQuote)}>
//       Generate Quote
//     </button>
//     {currentQuote && <QuoteBox quote={currentQuote} />}
//   </div>
// );
