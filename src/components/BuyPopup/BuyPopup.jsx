import React from "react";
import buymore from "../../images/buy-more-button.png";
import congratulations from "../../images/congratulations-man.png";
import { BuyPopup } from "../../constants/BuyPopup";
import "./index.css";

const BuyPopupComponent = ({ setIsbuybutton }) => {
    var url = "#";
    return (
        <div className="popup-container">
            <div className="buypopup">
                <div className="toptitlegroup">
                    <p className="pu-1">{BuyPopup.text1}</p>
                    <div class="modal-content" onClick={() => setIsbuybutton(false)} >
                        <span class="close">&times;</span>
                    </div>
                </div>

                <div className="pu-contents">
                    <div className="pu-options">
                        <p className="pu-2">{BuyPopup.text2}</p>
                        <p className="pu-3">{BuyPopup.text3}</p>
                        <p className="pu-4">{BuyPopup.attributes}</p>
                        <div className="attributes">
                            {BuyPopup.att.map((item) => (
                                <p className="pu-label">{item.name}</p>
                            ))}
                        </div>
                        <p className="pu-4">{BuyPopup.accessories}</p>
                        <div className="attributes">
                            <p className="pu-label">{BuyPopup.acc[0].name}</p>
                            <p className="pu-label">{BuyPopup.acc[1].name}</p>
                        </div>
                        <p className="pu-label">{BuyPopup.acc[2].name}</p>
                        <div className="attributes">
                            <p className="pu-label">{BuyPopup.acc[3].name}</p>
                            <p className="pu-label">{BuyPopup.acc[4].name}</p>
                        </div>
                        <p className="pu-label">{BuyPopup.acc[5].name}</p>
                        <a href="#" onClick={() => setIsbuybutton(false)}>
                            <img src={buymore} alt="" />
                        </a>
                    </div>
                    <div className="con-man">
                        <img src={congratulations} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyPopupComponent;