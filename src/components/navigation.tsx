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
