import React from 'react'
import Movie from './Movie'

const Movies = ({ movies }) => {
    return (
        <div className='flex flex-wrap justify-around items-center'>
            {
                movies ? movies.map((movie) => (
                <Movie key={movie.imdbID} movie={movie} />
                )) : <h1 className='text-3xl font-bold h-screen bg-sky-400' >Type in a name and click the lens icon</h1>
            }
        </div>
    )
}

export default Movies
