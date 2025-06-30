import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "https://i.pinimg.com/474x/1e/eb/72/1eeb7224067b43395c9f4e9b3521d2f5.jpg",
      rating: 9
    },
    {
      title: "Interstellar",
      description: "A team travels through a wormhole to ensure humanity's survival.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      rating: 8.5
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker, a criminal mastermind who wants to create chaos in Gotham.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX190_CR0,0,190,281_.jpg",
      rating: 9,
    },
    {
      title: "The Matrix",
      description: "A hacker discovers the world is a simulation and joins a rebellion to fight its controllers.",
      posterURL: "https://i.pinimg.com/736x/4c/4e/cf/4c4ecff4fd4b0fd6889e2b8e5a86e07c.jpg",
      rating: 8.7,
    },
    {
      title: "Avengers: Endgame",
      description: "The Avengers assemble once more to undo Thanos' actions and restore order to the universe.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
      rating: 8.4,
    },
    {
      title: "Fight Club",
      description: "An insomniac office worker forms an underground fight club with a soap salesman.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
      rating: 8.8,
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and redemption.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      rating: 9.3,
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, and others intertwine in a series of incidents.",
      posterURL: "https://i.etsystatic.com/15412320/r/il/da957e/2353219043/il_fullxfull.2353219043_6e6w.jpg",
      rating: 8.9,
    },
    {
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      rating: 9.2,
    },
    {
      title: "Forrest Gump",
      description: "Forrest Gump, a man with a low IQ, recounts the early years of his life and impact on events.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
      rating: 8.8,
    },
    {
      title: "Gladiator",
      description: "A former Roman general seeks revenge after being betrayed and forced into slavery.",
      posterURL: "https://in.bmscdn.com/events/moviecard/ET00413293.jpg",
      rating: 8.5,
    },
    {
      title: "The Social Network",
      description: "The story of Facebook's founding and the legal battles that followed.",
      posterURL: "https://i.pinimg.com/474x/41/4d/d4/414dd4a1debf096d4438b7c49577da01.jpg",
      rating: 7.7,
    }
    
    
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= rateFilter
  );

  return (
    <div className="m-4">
      <h1>🎬 My Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <AddMovie onAdd={addMovie} />
      <MovieList movies={filteredMovies} />
      
    </div>
  );
};

export default App;
