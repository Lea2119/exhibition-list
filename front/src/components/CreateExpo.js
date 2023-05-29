import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CreateExpo = (props) => {
  // This defines a functional component called CreateExpo that takes in props as its parameter.
  const navigate = useNavigate(); // This line initializes the navigate variable using the useNavigate hook from React Router. It allows us to navigate to different routes programmatically.
  const [expo, setExpo] = useState({
    // This uses the useState hook to define the expo state variable and the setExpo function to update its value. The initial state is an object with empty values for the expo's title, place, image, artist, description, starting date, ending date, and price.
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

  const onChange = (e) => {
    // This is an event handler function that updates the expo state object whenever an input field's value changes. It uses the spread operator (...expo) to copy the existing values of the expo object and then updates the specific field ([e.target.name]) with the new value (e.target.value).
    setExpo({ ...expo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    // This function is triggered when the form is submitted. It prevents the default form submission behavior.
    e.preventDefault();

    axios // Then it sends a POST request to the specified URL (http://localhost:8082/api/expos) with the expo object as the request payload. If the request is successful, it resets the expo state object to its initial empty values, and then it navigates the user to the root ("/") route. If there's an error, it logs an error message to the console.
      .post("http://localhost:8082/api/expos", expo)
      .then((res) => {
        setExpo({
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

        // Push to /
        navigate("/");
      })

      // The navigate("/") function is called. This function is provided by the useNavigate() hook from React Router. It allows you to programmatically navigate to a different route. In this case, "/" refers to the root route, which typically represents the homepage or landing page of the application.
      // By calling navigate("/"), the user is redirected to the root route after successfully creating the Expo expo.
      // In summary, after successfully creating the Expo expo and updating the state, the user is automatically redirected to the root route of the application.

      .catch((err) => {
        console.log("Error in CreateExpo!");
      });
  };

  return (
    <div className="CreateExpo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Expo List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Event</h1>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Exhibition"
                  name="title"
                  className="form-control"
                  value={expo.title}
                  onChange={onChange}
                />
              </div>
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
                <input
                  type="text"
                  placeholder="Artist/Artists"
                  name="artist"
                  className="form-control"
                  value={expo.artist}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe the exhibition"
                  name="description"
                  className="form-control"
                  value={expo.description}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="date"
                  placeholder="published_date"
                  name="starting_date"
                  className="form-control"
                  value={expo.starting_date}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  placeholder="published_date"
                  name="ending_date"
                  className="form-control"
                  value={expo.ending_date}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="form-control"
                  value={expo.price}
                  onChange={onChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateExpo;
