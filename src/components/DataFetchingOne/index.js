import { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Something went wrong!");
      });
  }, []);

  return (
    <div>
      <center>
        {loading ? "Loading..." : post.title}
        {error ? error : null}
      </center>
    </div>
  );
}

export default DataFetchingOne;
