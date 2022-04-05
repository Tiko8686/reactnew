import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Word } from "./words.js";
import { useNavigate } from "react-router-dom";
// let navigate = useNavigate();
 
// navigate("/menu");

export const Timer = () => {
 
 


  return (
    <div className="timer">
    
     <Link className="btn" to="/">
        Submit
      </Link>
    </div>
  );
};
