# Directory-Based Routing with React Router and Vite

This project demonstrates how to implement directory-based routing in a React application using react-router-dom and vite-plugin-pages.

## Features

- Automatic route generation based on file structure
- Integration with React Router for seamless navigation
- Vite for fast development and building

## Setup

1. Install dependencies:
   ```bash
   npm install react-router-dom vite-plugin-pages
   ```

2. Configure vite.config.js:
   ```js
    import Pages from 'vite-plugin-pages'

    export default defineConfig({
        plugins: [
            react(),
            Pages({
                dirs: "src/app",
                extensions: ["tsx", "jsx"],
            }),
        ],
    });
   ```

3. Set up your router in main.jsx or App.jsx:
   ```jsx
   import { Suspense } from "react";
   import { useRoutes } from "react-router-dom";

   // @ts-expect-error Auto-generated routes
   import routes from "~react-pages";

   import Layout from "./components/layout";

   function App() {
       return (
           <Layout>
               <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
           </Layout>
       );
   }

    export default App;
   ```

## Directory Structure

```
src/
├── app/
│   ├── about/
│   │   └── index.tsx
│   ├── blog/
│   │   ├── [id].tsx
│   │   └── index.tsx
│   ├── contact/
│   │   └── index.tsx
│   └── index.tsx
├── components/
│   └── Layout.tsx
└── main.tsx
```