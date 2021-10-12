import React from "react";
import faqman from "../../images/faq-man.png";
import { Faq } from "../../constants/Faq";
import "./index.css";

const FaqComponent = () => {
    var url = "#";
    return (
        <div className="faq" id="faq">
            <div className="faqtitle">
                <p>F.A.Q</p>
            </div>
            <img src={faqman} alt="" />

            <div className="faqdescription">
                {Faq.map((item) => (
                    <div className="items">
                        <p className="question">{item.question}</p>
                        <p className="answer">{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqComponent;