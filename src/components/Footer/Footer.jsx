import React from "react";
import logobottom from "../../images/logo-bottom.png";
import NavBar from "../NavBar/NavBar";
import "./index.css";

const Footer = () => {
    var url = "#";
    return (
        <div className="FooterBar">
            <NavBar />
            <div className="logobottom">
                <a href="#">
                    <img src={logobottom} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Footer;