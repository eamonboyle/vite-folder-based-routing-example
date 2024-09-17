# Directory-Based Routing with React Router and Vite

This project demonstrates how to implement directory-based routing in a React application using react-router-dom and vite-plugin-pages.

## Tech stack
- React: A JavaScript library for building user interfaces
- [react-router-dom](https://reactrouter.com/en/main): Declarative routing for React applications
- Vite: Next-generation frontend tooling
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages): File system based routing for Vite
- Tailwind CSS: A utility-first CSS framework for rapid UI development
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript


## Features

- Automatic route generation based on file structure
- Integration with React Router for seamless navigation
- Vite for fast development and building

## Setup

1. Install Vite & dependencies:
   ```bash
   bun create vite@latest
   bun install react-router-dom vite-plugin-pages
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

4. Add navigation component, with active states in src/components/navigation.tsx:
   ```jsx
   import { NavLink } from "react-router-dom";

   export default function Navigation() {
       return (
           <nav>
               <ul className="flex space-x-4">
                   <li>
                       <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "hover:text-gray-300")}>
                           Home
                       </NavLink>
                   </li>
                   <li>
                       <NavLink
                           to="/about"
                           className={({ isActive }) => (isActive ? "text-blue-500" : "hover:text-gray-300")}
                       >
                           About
                       </NavLink>
                   </li>
                   <li>
                       <NavLink
                           to="/contact"
                           className={({ isActive }) => (isActive ? "text-blue-500" : "hover:text-gray-300")}
                       >
                           Contact
                       </NavLink>
                   </li>
                   <li>
                       <NavLink
                           to="/blog"
                           className={({ isActive }) => (isActive ? "text-blue-500" : "hover:text-gray-300")}
                       >
                           Blog
                       </NavLink>
                   </li>
               </ul>
           </nav>
       );
   }
   ```

5. Features to add
   - [ ] Nested layout.tsx - Like NextJS
   - [ ] Loading data (react-router-dom Loader)


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
│   └── index.tsx (Home Page)
├── components/
│   └── layout.tsx
│   └── navigation.tsx
└── main.tsx
```