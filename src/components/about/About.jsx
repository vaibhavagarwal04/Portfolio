import React from "react";
import "./About.css";
import photo from "../../img/me1.jpg";
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={photo}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam mollitia, sunt nesciunt iure facilis ipsum? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quo.
                </p>
            </div>
        </div>
    );
};

export default About;
