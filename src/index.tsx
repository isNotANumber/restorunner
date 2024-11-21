import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.tsx';
import { OFFERS } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={OFFERS}></App>
    </Provider>
  </React.StrictMode>
);
