import BlogPost from "../components/BlogPost";
import blogPostHeaders from "../blogPostHeaders";

const Blog = () => {
  return (
    <div className="page-column">
      {blogPostHeaders.map((blogHeader) => (
        <BlogPost post={blogHeader} />
      ))}
    </div>
  );
};

export default Blog;
