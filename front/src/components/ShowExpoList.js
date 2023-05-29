import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ExpoCard from "./ExpoCard";

function ShowExpoList() {
  const [expos, setExpos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/expos")
      .then((res) => {
        setExpos(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowExpoList");
      });
  }, []);

  const expoList =
    expos.length === 0
      ? "there is no expo record!"
      : expos.map((expo, k) => <ExpoCard expo={expo} key={k} />);

  return (
    <div className="ShowExpoList">
      <div className="header">
        <h1 className="text-center">EXHIBITION'S LIST</h1>

        <Link to="/create-expo" className="adding">
          + Add New Exhibition
        </Link>
      </div>
      <div className="list">{expoList}</div>
    </div>
  );
}

export default ShowExpoList;
