import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);
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
