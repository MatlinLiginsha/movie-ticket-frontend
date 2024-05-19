import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import GetAllMoviesComponent from './components/GetAllMoviesComponent/GetAllMoviesComponent'
import AddNewMovieComponent from './components/AddNewMovieComponent/AddNewMovieComponent'
import MovieSuggestionComponent from './components/MovieSuggestionComponent/MovieSuggestionComponent'
import LoginComponent from './components/LoginComponent/LoginComponent';
import SignupComponent from './components/SignupComponent/SignupComponent';

const App = () => {
  return (
    <Router>
            <div className="container">
              <h1>Movie Ticket Booking</h1>
              
            <nav className="nav-menu">
                <Link to="/home" >Home</Link>
                <Link to="/admin/add" >Add Movies</Link>
                <Link to="/suggest" >Delete Movies</Link>
                <Link to="/login" >Login</Link>
                <Link to="/signup" >Signup</Link>
              
            </nav>
           <Routes>
           <Route exact path='/' element={<LoginComponent/>}></Route>
                 <Route exact path='/home' element={<GetAllMoviesComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewMovieComponent/>}></Route>
                 <Route path='/suggest' element={<MovieSuggestionComponent/>}></Route>
                 <Route path='/login' element={<LoginComponent/>}></Route>
                 <Route path='/signup' element={<SignupComponent/>}></Route>
               
                 
          </Routes>
          </div>
       </Router>
  )
}

export default App