import { Link } from "react-router-dom";
import Navigation from "./navigation";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-black text-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/">
                        <h1 className="text-2xl font-bold">My Website</h1>
                    </Link>
                    <Navigation />
                </div>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="bg-gray-800 text-white">
                <div className="container mx-auto px-4 py-6">
                    <p className="text-center">&copy; 2023 My Website. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
