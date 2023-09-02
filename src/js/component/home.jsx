import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "../../js/component/SimpleCounter.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SimpleCounter />			
		</div>
	);
};

export default Home;
