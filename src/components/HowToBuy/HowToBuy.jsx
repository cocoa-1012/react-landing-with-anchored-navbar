import React from "react";
import howscreen1 from "../../images/how-to-screen1.png";
import howscreen2 from "../../images/how-to-screen2.png";
import howscreen3 from "../../images/how-to-screen3.png";
import howscreen4 from "../../images/how-to-screen4.png";
import buynow from "../../images/buy-now-button.png";
import videolink from "../../videos/movie.mp4";
import { HowToBuy } from "../../constants/HowToBuy";
import ReactPlayer from "react-player";
import "./index.css";

const HowToBuyComponent = ({ setIsbuyinput }) => {
    var url = "https://youtu.be/KT7F15T9VBI";
    return (
        <div className="howtobuy" id="howtobuy">
            <h1>{HowToBuy.title}</h1>
            <div className="displays">
                <div>
                    <h3>1</h3>
                    <img src={howscreen1} alt="" />
                    <p>{HowToBuy.text1}</p>
                    <p>{HowToBuy.text11}</p>
                </div>
                <div>
                    <h3>2</h3>
                    <img src={howscreen2} alt="" />
                    <p>{HowToBuy.text2}</p>
                    <p>{HowToBuy.text21}</p>
                </div>
                <div>
                    <h3>3</h3>
                    <img src={howscreen3} alt="" />
                    <p>{HowToBuy.text3}</p>
                    <p>{HowToBuy.text31}</p>
                </div>
            </div>
            <div className="singlescreen">
                <img src={howscreen4} alt="" />
                <div className="howtovideo">
                    <ReactPlayer
                        url={url}
                        playing="false"
                        width='100%'
                        height='100%'
                        config={{
                            youtube: {
                                playerVars: { showinfo: 1 }
                            }
                        }}
                    />
                </div>
            </div>
            <div className="buynowbutton" onClick={() => setIsbuyinput(true)}>
                <a href="" onClick={(e) => e.preventDefault()}>
                    <img src={buynow} alt="" />
                </a>
            </div>

        </div>
    );
};

export default HowToBuyComponent;