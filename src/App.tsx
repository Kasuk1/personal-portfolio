/* Import BASICS */
import { Switch, Route, NavLink, HashRouter } from 'react-router-dom';
import 'animate.css';

/* Import STYLES */
import './style.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

/* Import Loadables VIEWS */
import { LoadableMain } from './views/main/LoadableMain';
import { LoadableProject } from './views/project';
import { LoadableSkill } from './views/skill/LoadableSkill';
import { LoadableAbout } from './views/about';
import { LoadableContact } from './views/contact';

/* Import COMPONENTS */
import { Navbar } from './components/navbar';
import { MAIN_ROUTE_NAME } from './conts';

export const App = () => {
  return (
    <HashRouter>
      <Navbar
        links={
          <>
            <li>
              <NavLink
                to={`${MAIN_ROUTE_NAME}/`}
                activeClassName='active'
                exact
              >
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
        <Route path={`${MAIN_ROUTE_NAME}/`} exact>
          <LoadableMain />
        </Route>
        <Route path={`${MAIN_ROUTE_NAME}/project`}>
          <LoadableProject />
        </Route>
        <Route path={`${MAIN_ROUTE_NAME}/skill`}>
          <LoadableSkill />
        </Route>
        <Route path={`${MAIN_ROUTE_NAME}/aboutme`}>
          <LoadableAbout />
        </Route>
        <Route path={`${MAIN_ROUTE_NAME}/contact`}>
          <LoadableContact />
        </Route>
      </Switch>
    </HashRouter>
  );
};
