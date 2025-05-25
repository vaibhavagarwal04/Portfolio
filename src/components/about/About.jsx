import React from "react";
import "./About.css";
import award from "../../img/me2.jpg";
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://images.unsplash.com/photo-1631369537800-af6a646b4ee2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <p className="a-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum ipsam animi quam velit dicta fugit! Illo ad deserunt
                    animi quo assumenda. Fugit quo inventore necessitatibus modi
                    porro sunt at natus, tempore delectus cupiditate, dolore,
                    totam minus recusandae consectetur officia dignissimos
                    sapiente perferendis voluptas pariatur deleniti! Aut quia
                    alias animi aperiam.
                </p>
                <div className="a-award">
                    <img src={award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h1 className="a-award-title">About Me</h1>
                        <p className="a-award-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Totam mollitia, sunt nesciunt iure facilis
                            ipsum? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Voluptatibus, quo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
