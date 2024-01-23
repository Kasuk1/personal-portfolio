import { Route, Fallback, Router } from 'routes';
import { About, Contact, Main } from 'views';
import { FooterSection, Navbar, ViewOverlay } from 'components';
import { UIProvider } from 'context';
import { MAIN_ROUTE } from 'const';
import { HelmetProvider } from 'react-helmet-async';

import './style.scss';

export const App = () => {
  return (
    <HelmetProvider>
      <UIProvider>
        <Router>
          <ViewOverlay>
            <Navbar />

            <main>
              <Route path={`${MAIN_ROUTE}/`}>
                <Main />
              </Route>
              <Route path={`${MAIN_ROUTE}/about`}>
                <About />
              </Route>
              <Route path={`${MAIN_ROUTE}/contact`}>
                <Contact />
              </Route>
              <Fallback>
                <div>Bad route!!!</div>
              </Fallback>
            </main>

            <FooterSection />
          </ViewOverlay>
        </Router>
      </UIProvider>
    </HelmetProvider>
  );
};
