import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            {/* Information section */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-semibold mb-6">Directory Routing with react-router-dom</h2>
                <p className="mb-4">
                    React Router's directory-based routing simplifies the process of creating routes in your React
                    application. Here are some key points:
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li>Routes are automatically created based on your file structure</li>
                    <li>Files named `index.tsx` become index routes for their parent directory</li>
                    <li>Dynamic routes can be created using brackets, e.g., `[id].tsx`</li>
                    <li>Nested layouts are supported using the `layout.tsx` file</li>
                </ul>
                <Link
                    to="/about"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    Learn More
                </Link>
            </div>
        </>
    );
}
