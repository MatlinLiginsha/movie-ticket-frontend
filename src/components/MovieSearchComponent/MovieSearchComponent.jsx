import React, { useState } from 'react';
import './MovieSearchComponent.css';

const MovieSearchComponent = ({ movieItems, setFilteredMovies }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        filterMovies(event.target.value);
    };

    const filterMovies = (query) => {
        const filteredMovies = movieItems.filter((movie) => {
            return (
                movie.movieName.toLowerCase().includes(query.toLowerCase()) ||
                movie.movieYear.toString().includes(query) ||
                movie.imdbRating.toString().includes(query) ||
                movie.movieGenre1.toLowerCase().includes(query.toLowerCase()) ||
                movie.movieGenre2.toLowerCase().includes(query.toLowerCase())
            );
        });
        setFilteredMovies(filteredMovies);
    };

    return (
        <div className="search-container">

            <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
            />

        </div>
    );
};

export default MovieSearchComponent;
