import React from "react";
import watchscreen1 from "../../images/watch-screen1.png";
// import watchscreen2 from "../../images/watch-screen2.png";
import watchscreen from "../../images/watch-screen.png";
import watcharrow from "../../images/watch-arrow.png";
import winabean from "../../images/win-a-bean.png";
import watchman from "../../images/watch-man.png";
import enternow from "../../images/enter-now-button.png";
import videolink from "../../videos/movie.mp4";
import { Watch } from "../../constants/Watch";
import ReactPlayer from "react-player";
import "./index.css";

const WatchComponent = () => {
    var url = "https://youtu.be/KT7F15T9VBI";
    return (
        <div className="watch" id='watch'>
            <div className="diagram" >
                <div className="watchscreen">
                    <img src={watchscreen1} alt="" />
                    <div className="videodiv">
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
                <div className="titlescreen">
                    <div className="watchtitle">
                        <p className="firsttitle">{Watch.title1}</p>
                        <p className="secondtitle">{Watch.title2}</p>
                        <img src={watcharrow} alt="" />
                    </div>
                    <div className="winabean">
                        <img src={winabean} alt="" />
                    </div>
                </div>
            </div>
            <div className="active">
                <div className="watchman">
                    <img src={watchman} alt="" />
                </div>
                <div className="activecontents">
                    <div className="activedescription">
                        <p>{Watch.text2}</p>
                        <p>{Watch.text3}</p>
                        <p>{Watch.text4}</p>
                        <p>{Watch.text5}</p>
                    </div>
                    <div className="enternow">
                        <a href="">
                            <img src={enternow} alt="" />
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default WatchComponent;