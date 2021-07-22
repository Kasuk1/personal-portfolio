import React from "react";

import "./navbar-style.scss"

export default function NavBar(props) {
    return (
        <nav className="navbar">
            <span className="logo"><span className="letter-i">i</span><span className="letter-c">c</span><span className="letter-f">f</span></span>
            <ul className="nav-list">
                {props.links}
            </ul>
        </nav>
    );
}