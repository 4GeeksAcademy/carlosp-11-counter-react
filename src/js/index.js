//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SimpleCounter from "./component/SimpleCounter";

let counter = 0;

setInterval(function(){    
    ReactDOM.render(
        <SimpleCounter counter = {counter} />,
        document.querySelector('#app'),
    );
    counter++;
}, 1000
);

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
