import React from 'react';
import ReactDOM from "react-dom";

import AboutContent from "../../components/about/about-content";
import AboutImage from "../../components/about/about-image";


export default function AboutMe() {
    return(
        <div className="container"> 
            <AboutImage />
            <AboutContent />
        </div>
    );
}

ReactDOM.render(<AboutMe/>, document.getElementById("root"));