import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './App.jsx';

export function render(url) {
    const helmetContext = {};
    const html = ReactDOMServer.renderToString(
        <React.StrictMode>
            <HelmetProvider context={helmetContext}>
                <StaticRouter location={url}>
                    <AppRoutes />
                </StaticRouter>
            </HelmetProvider>
        </React.StrictMode>
    );
    const { helmet } = helmetContext;
    return { html, helmet };
}
