import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

function ShowExpoDetails(props) {
  const [expo, setExpo] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/expos/${id}`)
      .then((res) => {
        setExpo(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowExpoDetails");
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/expos/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Error form ShowExpoDetails_deleteClick");
      });
  };

  const ExpoItem = (
    <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{expo.title}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Place</td>
            <td>{expo.place}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Image</td>
            <td>{expo.img}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Artist</td>
            <td>{expo.artist}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Description</td>
            <td>{expo.description}</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Starting Date</td>
            <td>{expo.starting_date}</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Ending Date</td>
            <td>{expo.ending_date}</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Price</td>
            <td>{expo.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="ShowExpoDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <br /> <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Exhibitions List
            </Link>
          </div>
          <br />
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Exhibition's Record</h1>
            <hr /> <br />
          </div>
          <div className="col-md-12 m-auto">{ExpoItem}</div>
          <div className="col-md-6 m-auto">
            <button
              type="button"
              className="btn btn-outline-danger btn-lg btn-block"
              onClick={() => {
                onDeleteClick(expo._id);
              }}
            >
              Delete Exhibition
            </button>
          </div>
          <div className="col-md-6 m-auto">
            <Link
              to={`/edit-expo/${expo._id}`}
              className="btn btn-outline-info btn-lg btn-block"
            >
              Edit Exhibition
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowExpoDetails;
