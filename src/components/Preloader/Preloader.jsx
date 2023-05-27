import React from "react";
import loader from "../../images/loader.svg";

const Preloader = (props) => {
    return (
        <img src={loader} style={ {height: 200+"px"} }/> 
    );
  };

export default Preloader;