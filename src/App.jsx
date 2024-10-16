import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import GetAllMoviesComponent from './components/GetAllMoviesComponent/GetAllMoviesComponent'
import AddNewMovieComponent from './components/AddNewMovieComponent/AddNewMovieComponent'
import MovieSuggestionComponent from './components/MovieSuggestionComponent/MovieSuggestionComponent'
import LoginComponent from './components/LoginComponent/LoginComponent';
import SignupComponent from './components/SignupComponent/SignupComponent';
import DeleteMovieComponent from './components/DeleteMovieComponent/DeleteMovieComponent';
import UpdateMovieComponent from './components/UpdateMovieComponent/UpdateMovieComponent';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="header-nav-container">
          <h1>ShowBuzz</h1>
          <nav className="nav-menu">
            <Link to="/">Home</Link>
            <Link to="/admin/add">Add Movies</Link>
            <Link to="/suggest">Suggest Movies</Link>
            <Link to="/admin/delete">Delete Movies</Link>
            <Link to="/admin/update">Update Movies</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </nav>
        </div>
        <Routes>
          <Route exact path='/' element={<GetAllMoviesComponent />} />
          <Route path='/admin/add' element={<AddNewMovieComponent />} />
          <Route path='/suggest' element={<MovieSuggestionComponent />} />
          <Route path='/admin/delete' element={<DeleteMovieComponent />} />
          <Route path='/admin/update' element={<UpdateMovieComponent />} />
          <Route path='/login' element={<LoginComponent />} />
          <Route path='/signup' element={<SignupComponent />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
