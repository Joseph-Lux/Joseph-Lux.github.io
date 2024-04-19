import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function BlogPage() {
  const { postTitle } = useParams();
  console.log(postTitle);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch("/articles/" + postTitle + ".md")
      .then((response) => response.text())
      .then((text) => {
        setArticle(text);
      })
      .catch((error) => {
        console.error("Error loading article:", error);
      });
  }, [postTitle]);

  const renderers = {
    img: ({ src }) => (
      <div style={{ textAlign: "center" }}>
        <img src={src} alt="" />
      </div>
    ),
  };

  return (
    <div className="article-container">
      <text className="header">{postTitle}</text>
      <ReactMarkdown components={renderers} className="paragraph">
        {article}
      </ReactMarkdown>
    </div>
  );
}

export default BlogPage;
