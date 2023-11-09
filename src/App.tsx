/* Import BASICS */

/* Import Loadables VIEWS */
import { Main } from 'views';

/* Import COMPONENTS */
import { Navbar } from './components';

/* Import STYLES */
import './style.scss';

export const App = () => {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
};
