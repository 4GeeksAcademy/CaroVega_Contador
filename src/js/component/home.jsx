import React from "react";
import SecondsCounter from "./SecondsCounter.jsx"
//include images into your bundle


//create your first component
const Home = () => {
	let contador =0
	
	
	return (
		<div className="text-center">
			<SecondsCounter seg={"123"}/>
			
		</div>
	);
};

export default Home;
