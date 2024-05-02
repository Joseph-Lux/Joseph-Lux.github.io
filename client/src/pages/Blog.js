import BlogPost from "../components/BlogPost";
import blogPostHeaders from "../blogPostHeaders";
import PageHeader from "../components/PageHeader";

const Blog = () => {
  return (
    <div className="page-column">
      <PageHeader>Blog</PageHeader>
      {blogPostHeaders.map((blogHeader) => (
        <BlogPost post={blogHeader} />
      ))}
    </div>
  );
};

export default Blog;
