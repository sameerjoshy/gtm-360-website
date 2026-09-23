// ESM shim for react-helmet-async (CJS) — resolves the named-export interop
// issue in the SSR bundle. Alias 'react-helmet-async' → this file in
// vite.ssr.config.js. Use createRequire to load the CJS module safely.
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ReactHelmet = require('react-helmet-async');

export const Helmet = ReactHelmet.Helmet;
export const HelmetProvider = ReactHelmet.HelmetProvider;
export const HelmetData = ReactHelmet.HelmetData;
export default ReactHelmet;