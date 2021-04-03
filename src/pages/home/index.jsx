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

  function DemoContent({ children }) {
    return (
      <div className="outside">
        <div className="inside">{children}</div>
      </div>
    );
  }

  return (
    <>
      <h2 className="home-title">Articles</h2>
      <div className="card__wrap--inner">
        {data.map((item) => (
          <a href={item._id} key={item._id} className="card">
            {item.image != null ? (
              <img src={item.image} alt={item.title} />
            ) : (
              <></>
            )}
            <div className="card-text-container">
              <p className="card-title">{item.title}</p>
              {item.author != null ? (
                <p className="card-author">{item.author}</p>
              ) : (
                <></>
              )}
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Home;
