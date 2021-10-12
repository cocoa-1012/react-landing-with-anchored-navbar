import React from "react";
import logo from "../../images/logo.png";
import NavBar from "../NavBar/NavBar";
import "./index.css";

const HeaderMenu = () => {
    var url = "#";
    return (
        <div className="HeaderBar">
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <NavBar />
        </div>
    );
};

export default HeaderMenu;