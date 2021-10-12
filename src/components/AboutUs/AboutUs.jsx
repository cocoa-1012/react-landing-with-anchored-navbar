import React from "react";
import aboutusman from "../../images/about-us-man.png";
import linkimg from "../../images/clipart3581246.png";
import { AboutUs } from "../../constants/AboutUs";
import "./index.css";

const AboutUsComponent = () => {
    var url = "#";
    return (
        <div className="aboutusdiv" id="aboutus">
            <div className="aboutdescription">
                <p className="abouttitle">{AboutUs.title1}</p>
                <p className="aboutdetail">{AboutUs.detail}</p>
                <div className="aboutusman">
                    <img src={aboutusman} alt="" />
                </div>
                <div className="members">
                    {AboutUs.members.map((item) => (
                        <div className="links">
                            <p className="membername">{item.name}</p>
                            <a href={item.link}>
                                <img src={linkimg} alt="sdf" />
                            </a>
                        </div>
                    ))}
                </div>
                <p className="abouttitle">{AboutUs.title2}</p>
                <p className="aboutdetail">{AboutUs.detail2}</p>
                <p className="aboutdetail">{AboutUs.polId}</p>
            </div>


        </div>
    );
};

export default AboutUsComponent;