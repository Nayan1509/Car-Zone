import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) return <p className="text-center p-8">Blog not found</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
