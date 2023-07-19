import { useHistory, useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const BlogDetailes = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handelClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, { method: "DELETE" }).then(
      () => {
        history.push("/");
      }
    );
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading ....</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handelClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetailes;
