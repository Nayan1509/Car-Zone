import { blogPosts } from "../data/blogs";
import BlogCard from "../components/BlogCard";
import PageBanner from "../components/PageBanner";

const BlogList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <PageBanner title="Blogs" backgroundImage="/assets/drive.jpg" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} blog={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
