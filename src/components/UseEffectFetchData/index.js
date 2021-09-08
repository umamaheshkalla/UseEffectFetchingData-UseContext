import { useState, useEffect } from "react";
import axios from "axios";

function UseEffectFetchData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  return (
    <div>
      <center>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </center>
    </div>
  );
}

export default UseEffectFetchData;
