import React, { useState, useEffect } from 'react';
import './GetAllMoviesComponent.css';
import MovieComponent from '../MovieComponent/MovieComponent';
import axios from 'axios';
import MovieSearchComponent from '../MovieSearchComponent/MovieSearchComponent';

const GetAllMoviesComponent = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3500/api/v1/movie/')
            .then(response => {
                setMovies(response.data);
                setFilteredMovies(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    alert(`(Status: ${error.response.status}) ${error.response.data.message}`);
                }
            });
    }, []);

    return (
        <div>
            <div className="search-container-wrapper">
                <MovieSearchComponent movieItems={movies} setFilteredMovies={setFilteredMovies} />
            </div>
            <div className='movies'>
                {filteredMovies.map(movieItem => (
                    <MovieComponent key={movieItem.id} movieItem={movieItem} />
                ))}
            </div>
        </div>
    );
};

export default GetAllMoviesComponent;
