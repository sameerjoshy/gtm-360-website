import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

// Hydrate if the prerender replaced the placeholder with real markup, otherwise fresh render.
// (innerHTML is non-empty in dev because of the <!--app-html--> comment — element children are the truth.)
if (rootElement.children.length > 0) {
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
