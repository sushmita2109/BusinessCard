import React from "react";
import details from "./details.json";
import "../App.css";
function Footer(){
    return(
        <footer className="footer">
            <a href="https://twitter.com/Sushmit10759660"><img src={details.tweet} alt="Twitter" style={{width:"50px",height:"50px"}} /></a>
            <a href="https://github.com/sushmita2109"><img src={details.github} alt="github" style={{width:"50px",height:"50px"}}/></a>
            <a href="https://www.instagram.com/sushmitakumari94/"><img src={details.insta} alt="instagram" style={{width:"50px",height:"50px"}}/></a>
            <a href="https://www.linkedin.com/in/sushmita-kumari-4393b2ab/"><img src={details.link} alt="linkened" style={{width:"50px",height:"50px"}}/></a>
        </footer>
    )
}
export default Footer;