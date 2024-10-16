import React, { useState } from 'react';
import axios from 'axios';

const DeleteMovieComponent = () => {
    const [movieId, setMovieId] = useState('');
    const [movieName, setMovieName] = useState('');

    const handleIdChange = (event) => {
        setMovieId(event.target.value);
    };

    const handleDelete = () => {
        if (movieId) {
            axios
                .delete(`http://localhost:3500/api/v1/movie/${movieId}`)
                .then((response) => {
                    alert(`${movieName} has been deleted successfully.`);
                    window.location.href = '/';
                })
                .catch((error) => {
                    if (error.response) {
                        alert(`(Status: ${error.response.status}) ${error.response.data.message}`);
                    } else {
                        alert('An unexpected error occurred.');
                    }
                });
        } else {
            alert('Please enter a valid ID to delete.');
        }
    };

    const fetchMovieDetails = () => {
        if (movieId) {
            axios
                .get(`http://localhost:3500/api/v1/movie/${movieId}`)
                .then((response) => {
                    const movie = response.data;
                    setMovieName(movie.movieName);
                })
                .catch((error) => {
                    if (error.response) {
                        alert(`(Status: ${error.response.status}) ${error.response.data.message}`);
                    }
                });
        }
    };

    return (
        <div className="form-container">
            <h2>Delete Movie</h2>
            <div className="form-group">
                <label>ID</label>
                <input
                    type="text"
                    placeholder="Enter movie ID"
                    value={movieId}
                    onChange={handleIdChange}
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
                    placeholder="Movie name"
                    value={movieName}
                    readOnly
                />
            </div>
            <div>
                <button type="button" onClick={handleDelete}>Delete Movie</button>
            </div>
        </div>
    );
};

export default DeleteMovieComponent;
