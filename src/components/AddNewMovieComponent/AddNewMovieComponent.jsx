import React, { useState } from 'react';
import axios from 'axios';

const AddNewMovieComponent = () => {
  const [movieInfo, setMovieInfo] = useState({
    id: '',
    movieName: '',
    movieYear: '',
    movieGenre1: '',
    movieGenre2: '',
    imdbRating: '',
    movieTicketCost: '',
    seatsAvailable: '',
    movieImage: null,
  });

  const movieIdHandler = (event) => {
    setMovieInfo({ ...movieInfo, id: event.target.value });
  };

  const movieNameHandler = (event) => {
    setMovieInfo({ ...movieInfo, movieName: event.target.value });
  };

  const movieYearHandler = (event) => {
    setMovieInfo({ ...movieInfo, movieYear: event.target.value });
  };

  const movieGenre1Handler = (event) => {
    setMovieInfo({ ...movieInfo, movieGenre1: event.target.value });
  };

  const movieGenre2Handler = (event) => {
    if (event.target.value !== movieInfo.movieGenre1) {
      setMovieInfo({ ...movieInfo, movieGenre2: event.target.value });
    } else {
      alert(`Two genres can't be the same`);
    }
  };

  const imdbRatingHandler = (event) => {
    setMovieInfo({ ...movieInfo, imdbRating: event.target.value });
  };

  const movieTicketCostHandler = (event) => {
    setMovieInfo({ ...movieInfo, movieTicketCost: event.target.value });
  };

  const seatsAvailableHandler = (event) => {
    setMovieInfo({ ...movieInfo, seatsAvailable: event.target.value });
  };

  const movieImageHandler = (event) => {
    setMovieInfo({ ...movieInfo, movieImage: event.target.files[0] });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('id', movieInfo.id);
    formData.append('movieName', movieInfo.movieName);
    formData.append('movieYear', movieInfo.movieYear);
    formData.append('movieGenre1', movieInfo.movieGenre1);
    formData.append('movieGenre2', movieInfo.movieGenre2);
    formData.append('imdbRating', movieInfo.imdbRating);
    formData.append('movieTicketCost', movieInfo.movieTicketCost);
    formData.append('seatsAvailable', movieInfo.seatsAvailable);
    formData.append('movieImage', movieInfo.movieImage);

    axios
      .post('http://localhost:3500/api/v1/movie/addMovie', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data);
        alert(`${response.data.movieName} is added successfully.`);
        window.location.href = '/';
      })
      .catch((error) => {
        if (error.response) {
          alert(`(Status : ${error.response.status}) ${error.response.data.message}`);
        }
      });
  };

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <h2>Adding a new Movie data</h2>

      <div className="form-group">
        <label>Movie ID</label>
        <input
          type="text"
          placeholder="Enter the movie id"
          value={movieInfo.id}
          onChange={movieIdHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Movie Name</label>
        <input
          type="text"
          placeholder="Enter the movie name"
          value={movieInfo.movieName}
          onChange={movieNameHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Movie Year</label>
        <input
          type="text"
          placeholder="Enter the year of release"
          value={movieInfo.movieYear}
          onChange={movieYearHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Movie Genre 1</label>
        <select value={movieInfo.movieGenre1} onChange={movieGenre1Handler} required>
          <option value="">-- Please select --</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="SciFi">SciFi</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Animation">Animation</option>
          <option value="Adventure">Adventure</option>
          <option value="Crime">Crime</option>
          <option value="Biography">Biography</option>
        </select>
      </div>

      <div className="form-group">
        <label>Movie Genre 2</label>
        <select value={movieInfo.movieGenre2} onChange={movieGenre2Handler} required>
          <option value="">-- Please select --</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="SciFi">SciFi</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Animation">Animation</option>
          <option value="Adventure">Adventure</option>
          <option value="Crime">Crime</option>
          <option value="Biography">Biography</option>
        </select>
      </div>

      <div className="form-group">
        <label>IMDb Rating</label>
        <input
          type="text"
          placeholder="Enter the IMDb Rating"
          value={movieInfo.imdbRating}
          onChange={imdbRatingHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Movie Ticket Cost</label>
        <input
          type="number"
          placeholder="Enter the ticket cost"
          value={movieInfo.movieTicketCost}
          onChange={movieTicketCostHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Seats Available</label>
        <input
          type="number"
          placeholder="Enter the number of available seats"
          value={movieInfo.seatsAvailable}
          onChange={seatsAvailableHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Movie Poster Image</label>
        <input
          type="file"
          onChange={movieImageHandler}
          required
        />
      </div>

      <div>
        <button type="submit">Add Movie</button>
      </div>
    </form>
  );
};

export default AddNewMovieComponent;
