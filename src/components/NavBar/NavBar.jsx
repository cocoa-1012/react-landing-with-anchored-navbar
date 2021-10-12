import React from "react";
import link1 from "../../images/link1.png";
import link2 from "../../images/link2.png";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => {


    var url = "#";
    return (
        <div className="navbar">
            <AnchorLink href='#buynow' offset='100' ><p>Video</p></AnchorLink>
            <AnchorLink href='#watch' offset='100' ><p>Win&nbsp;a&nbsp;Bean</p></AnchorLink>
            <AnchorLink href='#howtobuy' offset='100' ><p>How&nbsp;to&nbsp;buy</p></AnchorLink>
            <AnchorLink href='#faq' offset='100' ><p>FAQ</p></AnchorLink>
            <AnchorLink href='#aboutus' offset='100' ><p>About</p></AnchorLink>
            <a href={url} >
                <img src={link1} alt="" />
            </a>
            <a href={url} >
                <img src={link2} alt="" />
            </a>
        </div>
    );
};

export default NavBar;