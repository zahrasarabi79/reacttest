import { useParams } from "react-router-dom";

const BlogDetailes = () => {
  const { id } = useParams();
  return (
    <div className="blog-detailes">
      <h2>blogs number: {id}</h2>
    </div>
  );
};

export default BlogDetailes;
