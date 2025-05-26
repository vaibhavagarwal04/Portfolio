import "./Contact.css";
import Email from "../../img/Email.svg";
import Address from "../../img/Address.svg";
import Phone from "../../img/Phone.svg";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formref = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_h6oa2nv",
                "template_500hjfy",
                formref.current,
                "c1Nk-SL6Ec0ftOC39"
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                    setDone(true);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss the projects </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img className="c-icon" src={Phone} alt="" />
                            +91 8604756369
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            vaibhavagarwal3110@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Ayodhya,Uttar pradesh
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story </b>
                        Get in touch always freelancing if the right project
                        comes along
                    </p>
                    <form ref={formref} onSubmit={handleSubmit}>
                        <input style={{backgroundColor:darkMode && "#333"}}
                            type="text"
                            placeholder="Name"
                            name="user_name"
                        />
                        <input style={{backgroundColor:darkMode && "#333"}}
                            type="text"
                            placeholder="Subject"
                            name="user_subject"
                        />
                        <input style={{backgroundColor:darkMode && "#333"}}
                            type="text"
                            placeholder="Email"
                            name="user_email"
                        />
                        <textarea style={{backgroundColor:darkMode && "#333"}}
                            name="message"
                            id=""
                            rows="5"
                            placeholder="Write message"
                        ></textarea>
                        <button>Submit</button>
                        <div className="done">{done && "Thank You!"}</div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
