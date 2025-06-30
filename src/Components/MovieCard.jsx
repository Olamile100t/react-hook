import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="rounded-md p-3  ">
      <img src={movie.posterURL} alt={movie.title} className='w-full h-100' />
      <div className='space-y-2 mt-1'>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p>⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
