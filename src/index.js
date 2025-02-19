import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

// Use createRoot instead of ReactDOM.render
const container = document.getElementById('root');
const root = createRoot(container); // Create a root

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);