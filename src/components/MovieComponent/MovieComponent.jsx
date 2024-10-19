import React, { useState } from 'react';

const MovieComponent = ({ movieItem }) => {
  const [selectedSeats, setSelectedSeats] = useState(0);
  const [seatsAvailable, setSeatsAvailable] = useState(movieItem.seatsAvailable);

  const incrementSeats = () => {
    if (seatsAvailable > 0) {
      setSelectedSeats(selectedSeats + 1);
      setSeatsAvailable(seatsAvailable - 1);
    }
  };

  const decrementSeats = () => {
    if (selectedSeats > 0) {
      setSelectedSeats(selectedSeats - 1);
      setSeatsAvailable(seatsAvailable + 1);
    }
  };

  const handleBookTicket = async () => {
    if (selectedSeats > 0) {
      console.log(`Booking ${selectedSeats} tickets for ${movieItem.movieName}`);
      setSelectedSeats(0);
      alert(`Booking ${selectedSeats} tickets for ${movieItem.movieName} is successful !!`)
    }
  };

  console.log(movieItem.movieImage);


  return (
    <div className="card">
      <div className="text-container">
        <img className='card-image' src={`https://movie-ticket-backend-lyart.vercel.app/uploads/${movieItem.movieImage}`} alt={movieItem.movieName} />
        <h3>{movieItem.movieName}</h3>
        <p className="year">({movieItem.movieYear})</p>
        <p className="rating-label">IMDb Rating: <span className="rating">{movieItem.imdbRating}/10</span></p>
        <p className="genre">
          Genre: {movieItem.movieGenre1}, {movieItem.movieGenre2}
        </p>
        <p className="ticket-cost">Ticket Cost: Rs. {movieItem.movieTicketCost}</p>
        <p className="seats-available">Seats Available: {seatsAvailable}</p>
        <div className="seat-selection">
          <button className="counter-button" onClick={decrementSeats}>-</button>
          <span className="counter-number">{selectedSeats}</span>
          <button className="counter-button" onClick={incrementSeats}>+</button>
        </div>
        <button className="submit-button" onClick={handleBookTicket}>Book Ticket</button>
      </div>
    </div>
  );
};

export default MovieComponent;
