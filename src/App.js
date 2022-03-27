import './index.css'
import React, { useState } from 'react';
import Movies from './components/Movies';
import { getMovies } from './api'
import { BsSearch } from 'react-icons/bs'

function App() {

  const [movies, setMovies] = useState(null)
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    getMovies(search).then((data) => {
      const searchMovies = data.Search
      setMovies(searchMovies)
    })
  }

  return (
    <div className="flex flex-col h-full w-full bg-sky-400 items-center p-3">
      <div className="flex my-3 justify-center items-center w-1/3 px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <input 
          type='text'
          className='p-3 m-3 w-full outline-none rounded-md ' 
          placeholder='Search Movies' 
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <BsSearch onClick={handleSearch} className='mr-6 cursor-pointer transform transition duration-500 hover:scale-125' fontSize={30} />
      </div>
      <Movies movies={movies} />
    </div>
  );
}

export default App;
