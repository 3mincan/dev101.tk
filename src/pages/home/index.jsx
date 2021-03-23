import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";

const apiEndpoint = "https://blogbackend.vercel.app/";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${apiEndpoint}posts`);
      console.log(result.data);
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Articles</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <a href={item.title}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
