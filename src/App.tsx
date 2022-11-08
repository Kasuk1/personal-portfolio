/* Import BASICS */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import 'animate.css';

/* Import STYLES */
import './style.scss';

/* Import VIEWS */
import { Main } from './views/main';
import { Project } from './views/project';
import { Skill } from './views/skill';
import { About } from './views/about';
import Contact from './views/contact/contact';

/* Import COMPONENTS */
import Navbar from './components/navbar/navbar';
import { MAIN_ROUTE_NAME } from './conts';

export const App = () => {
  return (
    <Router>
      <Navbar
        links={
          <>
            <li>
              <NavLink to={`${MAIN_ROUTE_NAME}`} activeClassName='active' exact>
                Hello!
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${MAIN_ROUTE_NAME}/project`}
                activeClassName='active'
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to={`${MAIN_ROUTE_NAME}/skill`} activeClassName='active'>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${MAIN_ROUTE_NAME}/aboutme`}
                activeClassName='active'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${MAIN_ROUTE_NAME}/contact`}
                activeClassName='active'
              >
                Contact
              </NavLink>
            </li>
          </>
        }
      />
      <Switch>
        <Route path={`${MAIN_ROUTE_NAME}`} exact>
          <Main />
        </Route>
        <Route path={`${MAIN_ROUTE_NAME}/project`}>
          <Project />
        </Route>
        <Route path={`${MAIN_ROUTE_NAME}/skill`}>
          <Skill />
        </Route>
        <Route path={`${MAIN_ROUTE_NAME}/aboutme`}>
          <About />
        </Route>
        <Route path={`${MAIN_ROUTE_NAME}/contact`}>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};
