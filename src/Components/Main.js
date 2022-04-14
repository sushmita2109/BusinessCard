import React from "react";
import details from '../Components/details.json';
import "../App.css";
function Main(){
    return(
        <div>
            <h4>About</h4>
            <p className="Main-about" >{details.about}</p>
            <h4>Interest</h4>
            <p className="Main-Interest">{details.interests}</p>
        </div>
    )
}
export default Main;