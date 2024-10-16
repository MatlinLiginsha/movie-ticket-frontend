import React, { useState } from 'react';
import axios from 'axios';

const UpdateMovieComponent = () => {
    const [movieInfo, setMovieInfo] = useState({
        id: '',
        movieName: '',
        movieYear: '',
        movieGenre1: '',
        movieGenre2: '',
        imdbRating: '',
        movieTicketCost: '',
        seatsAvailable: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMovieInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const fetchMovieDetails = () => {
        const { id } = movieInfo;
        if (id) {
            axios
                .get(`http://localhost:3500/api/v1/movie/${id}`)
                .then((response) => {
                    const movie = response.data;
                    setMovieInfo({
                        id: movie.id,
                        movieName: movie.movieName,
                        movieYear: movie.movieYear,
                        movieGenre1: movie.movieGenre1,
                        movieGenre2: movie.movieGenre2,
                        imdbRating: movie.imdbRating,
                        movieTicketCost: movie.movieTicketCost,
                        seatsAvailable: movie.seatsAvailable,
                    });
                })
                .catch((error) => {
                    if (error.response) {
                        alert(`(Status: ${error.response.status}) ${error.response.data.message}`);
                    }
                });
        }
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const { id, movieName, movieYear, movieGenre1, movieGenre2, imdbRating, movieTicketCost, seatsAvailable } = movieInfo;

        axios
            .put(`http://localhost:3500/api/v1/movie/${id}`, {
                movieName,
                movieYear,
                movieGenre1,
                movieGenre2,
                imdbRating: Number(imdbRating),
                movieTicketCost: Number(movieTicketCost),
                seatsAvailable: Number(seatsAvailable),
            })
            .then((response) => {
                alert('Movie updated successfully.');
                window.location.href = '/';
            })
            .catch((error) => {
                if (error.response) {
                    alert(`(Status: ${error.response.status}) ${error.response.data.message}`);
                }
            });
    };

    return (
        <form className="form-container" onSubmit={formSubmitHandler}>
            <h2>Update Movie</h2>

            <div className="form-group">
                <label>ID</label>
                <input
                    type="text"
                    name="id"
                    placeholder="Enter movie ID"
                    value={movieInfo.id}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <button type="button" onClick={fetchMovieDetails}>
                    Fetch Movie Details
                </button>
            </div>

            <div className="form-group">
                <label>Movie Name</label>
                <input
                    type="text"
                    name="movieName"
                    placeholder="Enter movie name"
                    value={movieInfo.movieName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Year</label>
                <input
                    type="text"
                    name="movieYear"
                    placeholder="Enter movie year"
                    value={movieInfo.movieYear}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='form-group'>
                <label>Movie Genre 1</label>
                <select
                    name="movieGenre1"
                    value={movieInfo.movieGenre1}
                    onChange={handleChange}
                    required
                >
                    <option value=''>-- Please select --</option>
                    <option value='Action'>Action</option>
                    <option value='Comedy'>Comedy</option>
                    <option value='Drama'>Drama</option>
                    <option value='SciFi'>SciFi</option>
                    <option value='Horror'>Horror</option>
                    <option value='Thriller'>Thriller</option>
                    <option value='Romance'>Romance</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Animation'>Animation</option>
                    <option value='Adventure'>Adventure</option>
                    <option value='Crime'>Crime</option>
                    <option value='Biography'>Biography</option>
                </select>
            </div>

            <div className='form-group'>
                <label>Movie Genre 2</label>
                <select
                    name="movieGenre2"
                    value={movieInfo.movieGenre2}
                    onChange={handleChange}
                    required
                >
                    <option value=''>-- Please select --</option>
                    <option value='Action'>Action</option>
                    <option value='Comedy'>Comedy</option>
                    <option value='Drama'>Drama</option>
                    <option value='SciFi'>SciFi</option>
                    <option value='Horror'>Horror</option>
                    <option value='Thriller'>Thriller</option>
                    <option value='Romance'>Romance</option>
                    <option value='Fantasy'>Fantasy</option>
                    <option value='Animation'>Animation</option>
                    <option value='Adventure'>Adventure</option>
                    <option value='Crime'>Crime</option>
                    <option value='Biography'>Biography</option>
                </select>
            </div>

            <div className="form-group">
                <label>IMDB Rating</label>
                <input
                    type="number"
                    name="imdbRating"
                    placeholder="Enter IMDB rating"
                    value={movieInfo.imdbRating}
                    onChange={handleChange}
                    required
                    min="0"
                    max="10"
                    step="0.1"
                />
            </div>

            <div className="form-group">
                <label>Ticket Cost</label>
                <input
                    type="number"
                    name="movieTicketCost"
                    placeholder="Enter ticket cost"
                    value={movieInfo.movieTicketCost}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label>Seats Available</label>
                <input
                    type="number"
                    name="seatsAvailable"
                    placeholder="Enter seats available"
                    value={movieInfo.seatsAvailable}
                    onChange={handleChange}
                    required
                    min="0"
                    max="60"
                />
            </div>

            <div>
                <button type="submit">Update Movie</button>
            </div>
        </form>
    );
};

export default UpdateMovieComponent;
