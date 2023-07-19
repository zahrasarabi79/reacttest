import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const history = useHistory();
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/blogs",
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 5000,
  });

  async function getUsers(data) {
    try {
      const response = await axiosInstance.post("/", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    getUsers(blog);
    history.push("/");
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handelSubmit}>
        <label>blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>blog body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="youshi">youshi</option>
        </select>
        <button>Add Blog</button>
        <p>{body}</p>
      </form>
    </div>
  );
};

export default Create;
