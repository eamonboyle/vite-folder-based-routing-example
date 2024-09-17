import { Link } from "react-router-dom";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
}

const blogPosts: BlogPost[] = [
    { id: "1", title: "First Blog Post", excerpt: "This is a summary of the first blog post.", date: "2023-04-15" },
    { id: "2", title: "Second Blog Post", excerpt: "This is a summary of the second blog post.", date: "2023-04-20" },
    // Add more blog posts as needed
];

export default function Blog() {
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <Link to={`/blog/${post.id}`} key={post.id} className="block">
                        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
