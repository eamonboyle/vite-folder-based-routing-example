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
