/* Import BASICS */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import "animate.css";

/* Import STYLES */
import "./style.scss"

/* Import VIEWS */
import Main from "./views/main/main"
import Project from "./views/project/project";
import Skill from "./views/skill/skill";
import AboutMe from "./views/aboutme/aboutme";
import Contact from "./views/contact/contact";

/* Import COMPONENTS */
import Navbar from "../src/components/navbar/navbar"

export default function App() {
    return(
        <Router>
            <Navbar links={
                <>
                    <li><NavLink to="/personal-portfolio/" activeClassName="active" exact>Hello!</NavLink></li>
                    <li><NavLink to="/personal-portfolio/project" activeClassName="active">Projects</NavLink></li>
                    <li><NavLink to="/personal-portfolio/skill" activeClassName="active">Skill</NavLink></li>
                    <li><NavLink to="/personal-portfolio/aboutme" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/personal-portfolio/contact" activeClassName="active">Contact</NavLink></li>
                </>
            } />
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/project">
                    <Project />
                </Route>
                <Route path="/skill">
                    <Skill />
                </Route>
                <Route path="/aboutme">
                    <AboutMe />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    );
}