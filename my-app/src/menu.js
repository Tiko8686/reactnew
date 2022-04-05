import { Word } from "./words.js";
import { useNavigate } from "react-router-dom";

export const Menu=({score})=>{
    let navigate = useNavigate();
    
    const toStart=()=>{
        navigate('/')
    }
    return<>
        🙃<br></br>
        Time is over<br></br>
       
       
        <button className="menuBtn" onClick={toStart}>next team</button>
    </>
}