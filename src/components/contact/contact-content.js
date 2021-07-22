import FacebookLogo from "../../assets/images/facebook-logo.svg";
import LinkedinLogo from "../../assets/images/linkedin-logo.svg";
import GitHubLogo from "../../assets/images/github-logo.svg";
import InstagramLogo from "../../assets/images/instagram-logo.svg";

import "./contact-content.scss";

export default function ContacContent() {


    return (
        <div className="container" style={{flexDirection: "column", alignContent:"center"}}>
            <h2 className="contact-text animate__animated animate__fadeInLeft">
                Do you want to know something more <span className="text-highlight">about me</span> or this page? Please, don’t hesitate and  
                just contact me through these links. Have a good day! ;)
            </h2>
            <div className="logos-container animate__animated animate__fadeInRight">
                <a href="https://www.facebook.com/IgorPRI1/" target="_blank" rel="noreferrer"><img src={FacebookLogo} alt="" /></a>
                <a href="https://www.linkedin.com/in/igorcf/" target="_blank" rel="noreferrer"><img src={LinkedinLogo} alt="" /></a>
                <a href="https://github.com/Kasuk1?tab=repositories" target="_blank" rel="noreferrer"><img src={GitHubLogo} alt="" /></a>
                <a href="https://www.instagram.com/yesimigori/" target="_blank" rel="noreferrer"><img src={InstagramLogo} alt="" /></a>
            </div>
        </div>
    );
}