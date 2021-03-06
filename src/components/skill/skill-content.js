import FigmaLogo from "../../assets/images/figma-icon.svg";
import AdobeXDLogo from "../../assets/images/adobexd-icon.svg";
import InVisionLogo from "../../assets/images/invision-icon.svg";
import PhotoshopLogo from "../../assets/images/photoshop-icon.svg";

import HtmlLogo from "../../assets/images/html-logo.svg";
import CssLogo from "../../assets/images/css-logo.svg";
import JsLogo from "../../assets/images/js-logo.svg";
import ReactLogo from "../../assets/images/react-logo.svg";
import AngularLogo from "../../assets/images/angular-logo.svg";

import NodeLogo from "../../assets/images/node-logo.svg";
import ExpressLogo from "../../assets/images/express-logo.svg";
import MongodbLogo from "../../assets/images/mongodb-logo.svg";

import "./skill-content.scss"

export default function SkillContent() {

    const activeDivider = (event) => {
        const dividers = document.querySelectorAll(".skill-divider");
        dividers.forEach(divider => {
            if(divider === event.target) {
                divider.classList.toggle("opened");
            } else {
                divider.classList.toggle("closed");
            }
        });
    }

    return (
        <main className="skill-container">
                <section className="skill-divider" onClick={activeDivider}>
                    <h1 className="skill-title">Web Design</h1>
                    <section className="skill-content">
                        <p>The final aspect of a web page needs to be thought and plasmed. I wasn’t conscious about this and due to that I’m constantly learning the current theories and technologies used to get the best aspect possible and apply the best design practices to a web page.</p>
                        <div>
                            <h2>Skills</h2>
                            <ul className="skill-list">
                                <ul>
                                    <li>UI/UX</li>
                                    <li>Template Design</li>
                                    <li>Prototype</li>
                                </ul>
                                <ul>
                                    <li>Wireframe</li>
                                    <li>Low Fidelity Design</li>
                                    <li>High Fidelity Design</li>
                                </ul>
                            </ul>
                        </div>
                        <div>
                            <h2 className="h2-technologies">Technologies</h2>
                            <ul className="skill-technologies">
                                <li>
                                    <img src={FigmaLogo} alt="Figma Logo" />
                                    <p>Figma</p>
                                </li>
                                <li>
                                    <img src={AdobeXDLogo} alt="Adobe Logo" />
                                    <p>Adobe XD</p>
                                </li>
                                <li>
                                    <img src={InVisionLogo} alt="InVision Logo" />
                                    <p>InVision Studio</p>
                                </li>
                                <li>
                                    <img src={PhotoshopLogo} alt="Photoshop Logo" />
                                    <p>Photoshop</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </section>
                
                <section className="skill-divider" onClick={activeDivider}>
                    <h1 className="skill-title">Front-end</h1>
                    <section className="skill-content">
                        <p>I love web design, but my desire to use new technologies and reveal that aspect in the web is greater. I'm in a constant learning from the new 
                        technologies and I can assure you that there are a lot of options to develop the front of your app.</p>
                        <div>
                            <h2>Skills</h2>
                            <ul className="skill-list">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                                <ul>
                                    <li>SCSS</li>
                                    <li>Bootstrap</li>
                                    <li>jQuery</li>
                                </ul>
                                <ul>
                                    <li>Node</li>
                                    <li>React</li>
                                    <li>Angular</li>
                                </ul>
                            </ul>
                        </div>
                        <div>
                            <h2 className="h2-technologies">Technologies</h2>
                            <ul className="skill-technologies">
                                <li>
                                    <img src={HtmlLogo} alt="HTML Logo" />
                                    <p>HTML</p>
                                </li>
                                <li>
                                    <img src={CssLogo} alt="CSS Logo" />
                                    <p>CSS</p>
                                </li>
                                <li>
                                    <img src={JsLogo} alt="JS Logo" />
                                    <p>Javascript</p>
                                </li>
                                <li>
                                    <img src={ReactLogo} alt="React Logo" />
                                    <p>React</p>
                                </li>
                                <li>
                                    <img src={AngularLogo} alt="Angular Logo" />
                                    <p>Angular</p>
                                </li>
                            </ul>
                        </div>

                    </section>
                </section>

                <section className="skill-divider" onClick={activeDivider}>
                    <h1 className="skill-title">Back-end</h1>
                    <section className="skill-content">
                        <p>It's always important be connected to a database and keep all your information stored. I learned the importance of this in the university
                        and I have knowledge about the interaction between front-end and back-end. Not my strength, doing always my best though.</p>
                        <div>
                            <h2>Skills</h2>
                            <ul className="skill-list">
                                <ul>
                                    <li>Node</li>
                                    <li>Express</li>
                                </ul>
                                <ul>
                                    <li>MySQL</li>
                                    <li>PostgreSQL</li>
                                    <li>MongoDB</li>
                                </ul>
                            </ul>
                        </div>
                        <div>
                            <h2 className="h2-technologies">Technologies</h2>
                            <ul className="skill-technologies">
                                <li>
                                    <img src={NodeLogo} alt="Node Logo" />
                                    <p>Node</p>
                                </li>
                                <li>
                                    <img src={ExpressLogo} alt="Express Logo" />
                                    <p>Express</p>
                                </li>
                                <li>
                                    <img src={MongodbLogo} alt="MongoDB Logo" />
                                    <p>MongoDB</p>
                                </li>
                            </ul>
                        </div>

                    </section>
                </section>
            </main>
    );
}