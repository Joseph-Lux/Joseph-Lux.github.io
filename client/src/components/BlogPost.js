import { Link } from "react-router-dom";

function BlogPost({ post }) {
  return (
    <div className="blog-post-container">
      <img src={post.thumbnail} className="thumbnail" alt="post_thumbnail" />
      <div
        className="paragraph"
        style={{
          marginLeft: "30px",
          flex: "1",
          wordWrap: "break-word",
          overflow: "hidden",
        }}
      >
        <div style={{ marginBottom: "10px" }}>{post.date}</div>
        <Link to={"/Blog/" + post.title} className="header simple-link">
          {post.title}
        </Link>
        <div className="paragraph" style={{ marginTop: "10px" }}>
          {post.description}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
