import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Dedicated SSR build config — no manualChunks (react/react-dom are external
// for the server bundle, so manualChunks conflicts).
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            'react-helmet-async': path.resolve(__dirname, 'src/shims/react-helmet-async.jsx'),
        },
    },
    build: {
        outDir: 'dist/server',
        rollupOptions: {
            input: 'src/entry-server.jsx',
            output: {
                entryFileNames: 'entry-server.js',
                format: 'es',
            },
        },
        // Bundle everything (no externalization): rollup compiles CJS→ESM
        // interop internally, so Node never loads lucide-react's broken CJS
        // build or react-helmet-async's named-export quirks at runtime.
        ssr: {
            noExternal: true,
        },
    },
});