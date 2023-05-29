import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function UpdateExpoInfo(props) {
  const [expo, setExpo] = useState({
    title: "",
    tag: "",
    place: "",
    img: "",
    artist: "",
    description: "",
    starting_date: "",
    ending_date: "",
    price: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/expos/${id}`)
      .then((res) => {
        setExpo({
          title: res.data.title,
          tag: res.data.tag,
          place: res.data.place,
          img: res.data.img,
          artist: res.data.artist,
          description: res.data.description,
          starting_date: res.data.starting_date,
          ending_date: res.data.ending_date,
          price: res.data.price,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateExpoInfo", err);
      });
  }, [id]);

  const onChange = (e) => {
    setExpo({ ...expo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: expo.title,
      tag: expo.tag,
      place: expo.place,
      img: expo.img,
      artist: expo.artist,
      description: expo.description,
      starting_date: expo.starting_date,
      ending_date: expo.ending_date,
      price: expo.price,
    };

    axios
      .put(`http://localhost:8082/api/expos/${id}`, data)
      .then((res) => {
        navigate(`/show-expo/${id}`);
      })
      .catch((err) => {
        console.log("Error in UpdateExpoInfo!");
      });
  };

  return (
    <div className="UpdateExpoInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Exhibition List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Exhibition</h1>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Name of the Exhibition"
                name="title"
                className="form-control"
                value={expo.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="museum"
                name="tag"
                value="museum"
                checked={expo.tag === "museum"}
                onChange={onChange}
              />
              <label htmlFor="museum">Museum</label>
              <br />
              <input
                type="checkbox"
                id="gallery"
                name="tag"
                value="gallery"
                checked={expo.tag === "gallery"}
                onChange={onChange}
              />
              <label htmlFor="gallery">Gallery</label>
            </div>

            <div className="form-group">
              <label htmlFor="place">Place</label>
              <input
                type="text"
                placeholder="Place"
                name="place"
                className="form-control"
                value={expo.place}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="img">Cover</label>
              <input
                type="text"
                placeholder="Cover"
                name="img"
                className="form-control"
                value={expo.img}
                onChange={onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Artist</label>
              <input
                type="text"
                placeholder="Artist"
                name="artist"
                className="form-control"
                value={expo.artist}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                placeholder="Description of the Exhibition"
                name="description"
                className="form-control"
                value={expo.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="starting_date">Starting Date</label>
              <input
                type="date"
                placeholder="Starting Date"
                name="starting_date"
                className="form-control"
                value={expo.starting_date}
                onChange={onChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="ending_date">Ending Date</label>
              <input
                type="date"
                placeholder="Ending Date"
                name="ending_date"
                className="form-control"
                value={expo.ending_date}
                onChange={onChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="form-control"
                value={expo.price}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Exhibition
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateExpoInfo;
