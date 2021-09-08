import { useState, useEffect } from "react";
import axios from "axios";

function UseEffectFetchDataId() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <center>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="button" onClick={handleClick}>
          Fetch Post
        </button>
        <div>{post.title}</div>
      </center>
    </div>
  );
}

export default UseEffectFetchDataId;
