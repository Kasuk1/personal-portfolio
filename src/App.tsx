import { useEffect, useState } from 'react';
import { Route, Fallback, Router } from 'routes';
import { About, Contact, Main } from 'views';
import { FooterSection, Navbar, ViewOverlay } from 'components';
import './style.scss';
import { UIProvider } from 'context';

export const App = () => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleLoad = () => setDomLoaded(true);
    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (!domLoaded)
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Loading...</h1>
      </div>
    );

  return (
    <Router>
      <UIProvider>
        <ViewOverlay>
          <Navbar />

          <main>
            <Route path='/'>
              <Main />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Fallback>
              <div>Bad route!!!</div>
            </Fallback>
          </main>

          <FooterSection />
        </ViewOverlay>
      </UIProvider>
    </Router>
  );
};
