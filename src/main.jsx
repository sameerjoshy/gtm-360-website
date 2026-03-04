import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

// Hydrate if SSR content exists, otherwise fresh render
if (rootElement.innerHTML.trim() !== '') {
    ReactDOM.hydrateRoot(
        rootElement,
        <React.StrictMode>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </React.StrictMode>
    );
} else {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </React.StrictMode>
    );
}
