import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./newscard.module.css";
import image from "./Assests/asset.jpeg";

export default function NewsCard({ nav, SetNav}) {
  const [data, setData] = useState([]);

  const [page,SetPage]=useState(0)

  function Increment() {
     SetPage(page+1)
  }

  function Decrement() {
    if(page!==0){
        SetPage(page-1)
    }
  } 


  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${nav}&pageSize=4&page=${page}&apiKey=b5f8dd7bf9a04d038f1c805b7a71c563`
      );
      setData(response.data.articles);
    }
    fetchData();
  }, [nav,page]);

  return (
    <div>
      {data.map((value, index) => (
        <div className={styles.crd} key={index}>
          <img
            src={value.urlToImage ? value.urlToImage : image}
            width="100%"
            alt=""
          />
          <ul>
            <li>
              <h5>{value.title}</h5>
            </li>
            <li>{value.description}</li>
            <li>
              {" "}
              <a href={value.url} className="btn btn-primary" target="blank">
                Read More
              </a>{" "}
            </li>
          </ul>
        </div>
      ))}
    <div class="d-grid gap-5 d-md-flex justify-content-md-center m-4 ">
  <button class="btn btn-primary me-md-3 " onClick={Decrement} type="button">Prev</button>
  <button class="btn btn-primary" onClick={Increment} type="button">Next</button>
</div>
    </div>
  );
}
