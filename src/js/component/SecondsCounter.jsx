import React from "react";
import { FaClock } from "react-icons/fa6";

const SecondsCounter = (props) => {
 let stringsecond=props.seg.toString();
  let reversecon ="";
  for(let i=(stringsecond.length-1); i>=0; i--){
    reversecon = reversecon + stringsecond[i];
  }
    return (
        <div className="container d-flex justify-content-center  my-3 mx-5 conten">
           <div className="my-2 mx-3 d-flex align-items-center"><FaClock style={{fontSize:'100px', color:'white',}}/></div>
           <div className="my-2 mx-3"><h1>{reversecon[5]==undefined ? 0:reversecon[5]}</h1></div>
           <div className="my-2 mx-3"><h1>{reversecon[4]==undefined ? 0:reversecon[4]}</h1></div>
           <div className="my-2 mx-3"><h1>{reversecon[3]==undefined ? 0:reversecon[3]}</h1></div>
           <div className="my-2 mx-3"><h1>{reversecon[2]==undefined ? 0:reversecon[2]}</h1></div>
           <div className="my-2 mx-3"><h1>{reversecon[1]==undefined ? 0:reversecon[1]}</h1></div>
           <div className="my-2 mx-3"><h1>{reversecon[0]==undefined ? 0:reversecon[0]}</h1></div>
        </div>
    );
}
export default SecondsCounter;