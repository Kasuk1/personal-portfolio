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

export const App = () => {
  return (
    <Router>
      <Navbar
        links={
          <>
            <li>
              <NavLink to='/' activeClassName='active' exact>
                Hello!
              </NavLink>
            </li>
            <li>
              <NavLink to='/project' activeClassName='active'>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to='/skill' activeClassName='active'>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to='/aboutme' activeClassName='active'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' activeClassName='active'>
                Contact
              </NavLink>
            </li>
          </>
        }
      />
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/project'>
          <Project />
        </Route>
        <Route path='/skill'>
          <Skill />
        </Route>
        <Route path='/aboutme'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};
