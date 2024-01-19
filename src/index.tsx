import { createRoot } from 'react-dom/client';
import { App } from './App';
import { StrictMode } from 'react';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
