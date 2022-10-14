import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostDetails = () => {
  const [posts, setPosts] = useState({});
  const [err, setErr] = useState(null);
  const { id } = useParams();

  const fetchPostDetails = (id) => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setPosts(result);
          },
          (error) => {
            setErr(error);
          }
        );
    }
  };

  useEffect(() => {
    fetchPostDetails(id);
  }, [id]);

  return (
    <>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
    </>
  );
};

export default PostDetails;
