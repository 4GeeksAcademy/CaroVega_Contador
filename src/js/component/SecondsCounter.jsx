import React from "react";

const SecondsCounter = (props) => {
 let stringsecond=props.seg.toString();
  let reversecon ="";
  for(let i=(stringsecond.length-1); i>=0; i--){
    reversecon = reversecon + stringsecond[i];
  }
    return (
        <div className="container text-center d-flex justify-content-between m-2  p-2">
           <div><i className="bi bi-stopwatch-fill"></i></div>
           <div><h1>{reversecon[5]==undefined ? 0:reversecon[5]}</h1></div>
           <div><h1>{reversecon[4]==undefined ? 0:reversecon[4]}</h1></div>
           <div><h1>{reversecon[3]==undefined ? 0:reversecon[3]}</h1></div>
           <div><h1>{reversecon[2]==undefined ? 0:reversecon[2]}</h1></div>
           <div><h1>{reversecon[1]==undefined ? 0:reversecon[1]}</h1></div>
           <div><h1>{reversecon[0]==undefined ? 0:reversecon[0]}</h1></div>
        </div>
    );
}
export default SecondsCounter;