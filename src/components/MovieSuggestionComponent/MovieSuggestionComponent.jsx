import React, { useState } from 'react';
import MovieComponent from '../MovieComponent/MovieComponent';
import axios from 'axios';

const MovieSuggestionComponent = () => {
  const [movieCriteria, setMovieCriteria] = useState({
    movieGenre1: '',
    movieGenre2: ''
  });

  const [suggestedMovies, setSuggestedMovies] = useState([]);
  const [noMoviesFound, setNoMoviesFound] = useState(false);

  const movieGenre1Handler = (event) => {
    setMovieCriteria({
      ...movieCriteria,
      movieGenre1: event.target.value,
    });
  };

  const movieGenre2Handler = (event) => {
    if (event.target.value !== movieCriteria.movieGenre1) {
      setMovieCriteria({
        ...movieCriteria,
        movieGenre2: event.target.value,
      });
    } else {
      alert(`Two genres can't be the same`);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3500/api/v1/movie/suggest`, movieCriteria)
      .then((response) => {
        if (response.data.length > 0) {
          setSuggestedMovies(response.data);
          setNoMoviesFound(false); // Movies found
        } else {
          setSuggestedMovies([]);
          setNoMoviesFound(true); // No movies found
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(`(Status : ${error.response.status}) ${error.response.data.message}`);
        }
      });
  };

  const { movieGenre1, movieGenre2 } = movieCriteria;

  return (
    <>
      <form className='form-container' onSubmit={formSubmitHandler}>
        <h2>Get movie suggestions</h2>
        <div className='form-group'>
          <label>Movie Genre 1</label>
          <select
            value={movieGenre1}
            onChange={movieGenre1Handler}
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
            value={movieGenre2}
            onChange={movieGenre2Handler}
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

        <div>
          <button type='submit'>Get suggestions</button>
        </div>
      </form>

      <div className='suggested-movies'>
        {noMoviesFound ? (
          <p>No movies found with the selected genres.</p>
        ) : (
          suggestedMovies.map((movieItem) => (
            <MovieComponent key={movieItem._id} movieItem={movieItem} />
          ))
        )}
      </div>
    </>
  );
};

export default MovieSuggestionComponent;
