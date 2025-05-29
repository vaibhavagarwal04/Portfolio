import React from "react";
import "./About.css";
import photo from "../../img/me1.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
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
                     a BTech Computer Science student passionate about building on the web. My journey into web technologies started with curiosity and quickly turned into a purposeful path of creation and innovation.

                     <br />
                     <br />
                     What drives me is the ability to turn ideas into real, interactive experiences that people can enjoy and benefit from. Every project I take on is a new opportunity to learn, grow, and push the limits of what I can build on the web.
                </p>
                <a className="giticon" href="https://github.com/vaibhavagarwal04"><GitHubIcon/></a>
            </div>
        </div>
    );
};

export default About;
