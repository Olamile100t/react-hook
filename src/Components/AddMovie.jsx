import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (newMovie.title && newMovie.rating) {
      onAdd({ ...newMovie, rating: Number(newMovie.rating) });
      setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    }
  };

  return (
    <div className="h-100 my-5 p-5 border-2 grid grid-cols-1 ">
      <input name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} className='border-1 px-3' />
      <input name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} className='border-1 px-3' />
      <input name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} className='border-1 px-3' />
      <input name="rating" type="number" placeholder="Rating" value={newMovie.rating} onChange={handleChange} className='border-1 px-3' />
      <button onClick={handleAdd} className='border-1 px-3' >Add Movie</button>
    </div>
  );
};

export default AddMovie;
