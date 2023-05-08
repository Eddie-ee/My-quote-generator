import React from "react";
import quotesData from "./quotesData";


//rendered quote box component
export default function QuoteBox(props) {
  return (
    <div>
      <div className="quoteBox--quote">
        <p>{props.quote.quote}</p>
      </div>
      <div>
        <p className="quoteBox--author">- {props.quote.author}</p>
      </div>
    </div>
  );
}

