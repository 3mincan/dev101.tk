import React, { useEffect, useState } from "react";
import axios from "axios";
import * as moment from "moment";
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
      <h2 className="home-title">Articles</h2>
      <div className="card__wrap--inner">
        {data.map((item) =>
          item.image != null ? (
            <a
              href={item._id}
              key={item._id}
              className="card"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="card-text-container">
                <div className="first-line">
                  <p className="card-author">
                    {item.author != null ? `Posted By ${item.author}` : <></>}
                  </p>
                  <p className="card-time">
                    Posted {moment(`${item.createdAt}`).fromNow()}
                  </p>
                </div>
                <p className="card-title">{item.title}</p>
              </div>
            </a>
          ) : (
            <a
              href={item._id}
              key={item._id}
              className="card"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="card-text-container">
                <div className="first-line">
                  <p className="card-author">
                    {item.author != null ? `Posted By ${item.author}` : <></>}
                  </p>
                  <p className="card-time">
                    Posted {moment(`${item.createdAt}`).fromNow()}
                  </p>
                </div>
                <p className="card-title">{item.title}</p>
              </div>
            </a>
          )
        )}
      </div>
    </>
  );
};

export default Home;
