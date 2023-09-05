//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter";

//render your react application

let contador = 0
setInterval(contadorSegundos, 1000)
	function contadorSegundos(){
		
		contador +=1;
		console.log (contador)
        
        ReactDOM.render(<SecondsCounter seg={contador}/>, document.querySelector("#app"));
	}