import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./newscard.module.css";
import image from "./Assests/asset.jpeg";
const pageData = [];
export default function NewsCard({ nav, SetNav }) {
  const [data, setData] = useState([]);

  const [nextpagedata, SetNextPageData] = useState("");
  const [page, SetPage] = useState("1718830440298084141");
  
console.log(pageData);
  function Increment() {
    pageData.push(page);
    SetPage(nextpagedata);
  }

  function Decrement() {
    
    SetPage(pageData.pop());
  }

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(
        `https://newsdata.io/api/1/latest?apikey=pub_46875f7dca60e88d0484459fdfe98b0461272&country=in&category=${nav}&page=${page}`
      );
      setData(response.data.results);
      SetNextPageData(response.data.nextPage);
    }
    fetchData();
  }, [nav, page]);

  return (
    <div>
        <div class="d-grid gap-5 d-md-flex justify-content-md-center m-4 ">
        <button
          class="btn btn-primary me-md-3 "
          onClick={Decrement}
          type="button"
        >
          Prev
        </button>
        <button class="btn btn-primary" onClick={Increment} type="button">
          Next
        </button>
      </div>
    <div style={{display:"flex", flexWrap:"wrap"}}>
      {data.map((value, index) => (
        <div className={styles.crd} key={index}>
          <img
            src={value.image_url ? value.image_url : image}
            width="100%"
            alt=""
          />
          <ul>
            <li>
              <h5>{value.title}</h5>
            </li>
            <li>{value.description}</li>
            <li>
              <a href={value.link} className="btn btn-primary" target="blank">
                Read More
              </a>{" "}
            </li>
          </ul>
        </div>
      ))}
      
    </div>
    </div>
  );
}

// https://newsapi.org/v2/top-headlines?country=in&category=${nav}&pageSize=4&page=${page}&apiKey=b5f8dd7bf9a04d038f1c805b7a71c563

// https://newsdata.io/api/1/latest?apikey=pub_46875869ae63dda871341c68597fd8ca1959d&category=${nav}&country=in
