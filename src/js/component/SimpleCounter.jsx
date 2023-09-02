import React from "react";
import PropTypes from "prop-types";

const SimpleCounter = (props) => {
    return ( 
    <div className="largeCounter">
        <div className= "clockIcon" > <i class="far fa-clock"></i></div>  
        <div className= "sixth">{Math.floor(props.counter / 100000) % 10}</div>
        <div className= "fifth">{Math.floor(props.counter / 10000) % 10}</div>
        <div className= "fourth">{Math.floor(props.counter / 1000) % 10}</div>    
        <div className= "third">{Math.floor(props.counter / 100) % 10}</div>    
        <div className= "second">{Math.floor(props.counter / 10) % 10}</div>    
        <div className= "first">{props.counter % 10}</div>        
    </div>
    );
}

SimpleCounter.propsTypes = {
    counter: PropTypes.number 
}


export default SimpleCounter;