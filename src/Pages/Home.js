import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setErr(error);
        }
      );
  }, []);

  //   const fetchPosts = (e) => {
  //     e.preventDefault();
  //     navigate(`/user/${item.id}`);
  //   };

  return (
    <table className="dataTable">
      <tr className>
        <th>Name</th>
        <th>Company</th>
        <th>Posts</th>
      </tr>

      {data &&
        data.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.company.name}</td>
              <td>
                <a
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/user/${item.id}`);
                  }}
                >
                  Posts
                </a>
              </td>
            </tr>
          );
        })}
    </table>
  );
};

export default Home;
