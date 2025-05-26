import "./intro.css";
import me from "../../img/me.JPG";

function Intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Vaibhav Agarwal</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Designer</div>
                            <div className="i-title-item">Web developer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I'm a web developer focused on creating accessible, and
                        user-friendly websites. I enjoy turning ideas into
                        real-world digital experiences and pay close attention
                        to detail, performance, and clean code
                    </div>
                    
                </div>
                <svg
                        className="i-scroll"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 9-7 7-7-7"
                        />
                    </svg>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-image" />
            </div>
        </div>
    );
}

export default Intro;
