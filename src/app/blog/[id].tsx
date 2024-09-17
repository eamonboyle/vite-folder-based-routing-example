import { useParams, Link } from "react-router-dom";

export default function DynamicPage() {
    const { id } = useParams();

    // Sample blog post data (you'd typically fetch this based on the id)
    const post = {
        title: "Sample Blog Post",
        date: "April 15, 2023",
        content: "This is a sample blog post content. It can be much longer and include multiple paragraphs.",
        author: "John Doe",
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <nav className="mb-4">
                <Link to="/blog" className="text-blue-600 hover:underline">
                    ← Back to Blog
                </Link>
            </nav>
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <div className="text-gray-600 mb-4">
                <span>{post.date}</span> • <span>{post.author}</span>
            </div>
            <div className="prose">{post.content}</div>
            <div className="mt-8 text-gray-600">Post ID: {id}</div>
        </div>
    );
}
