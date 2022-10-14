import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const fetchPosts = (id) => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
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
    fetchPosts(id);
  }, [id]);

  return (
    <ul>
      {posts &&
        posts.map((item) => {
          return (
            <li>
              <a onClick={() => navigate(`/post/${item.id}`)}>{item.title}</a>
            </li>
          );
        })}
    </ul>
  );
};

export default Posts;
