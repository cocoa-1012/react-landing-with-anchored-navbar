import React from "react";
import transactionman from "../../images/transaction-man.png";
import watchhowto from "../../images/watch-how-to-button.png";
import { BuyInput } from "../../constants/BuyInput";
import "./index.css";

const BuyInputComponent = ({ setIsbuybutton, setIsbuyinput }) => {
    var url = "#";
    return (
        <div className="popup-container">
            <div className="buyinput">
                <div className="toptitlegroup">
                    <p className="pui-1">{BuyInput.text1}</p>
                    <div class="modal-content" onClick={() => { setIsbuyinput(false); setIsbuybutton(false) }} >
                        <span class="close">&times;</span>
                    </div>
                </div>

                <div className="pui-contents">
                    <div className="pui-options">
                        <p className="pui-4">{BuyInput.text2}</p>
                        <p className="pui-3">{BuyInput.text3}</p>
                        <p className="pui-3">{BuyInput.text8}</p>
                        <div className="values">
                            {BuyInput.values.map((item) => (
                                <div className="smallgroup">
                                    <p className="pui-4">{item.id}</p>
                                    <p className="pui-label">{item.name}</p>
                                </div>
                            ))}
                        </div>
                        <p className="pui-3">{BuyInput.text4}</p>
                        <p className="pui-3"><b>{BuyInput.text5}</b></p>
                        <br />
                        <p className="pui-3">{BuyInput.text6}</p>
                        <p className="pui-3">{BuyInput.text7}</p>
                        <a href="#" onClick={() => { setIsbuyinput(false); setIsbuybutton(true) }}>
                            <img src={watchhowto} alt="" />
                        </a>
                    </div>
                    <div className="trans-man">
                        <img src={transactionman} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyInputComponent;