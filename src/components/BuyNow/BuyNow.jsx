import React from "react";
import buynow from "../../images/buy-now-button.png";
import buynowman from "../../images/buy-now-man.png";
import { BuyNow } from "../../constants/BuyNow";
import "./index.css";

const BuyNowComponent = ({ setIsbuyinput }) => {
    var url = "#";
    return (
        <div className="buynowcomponent">
            <div className="buynow" id="buynow">
                <div className="description">
                    <p className="p-2">{BuyNow.text1}</p>
                    <p className="p-1">{BuyNow.text2}</p>
                    <p className="p-4">{BuyNow.text3}</p>
                    <p className="p-3">{BuyNow.text4}</p>
                    <p className="p-3">{BuyNow.text5}</p>
                    <a href="#" onClick={() => setIsbuyinput(true)}>
                        <img src={buynow} alt="" />
                    </a>
                </div>

                <div className="imgshow">
                    <img src={buynowman} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BuyNowComponent;