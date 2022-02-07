import React, { useState, useEffect } from 'react'

const Movie = ({ movie }) => {


    return (
        <div className='w-340 h-510 m-4 bg-secondaryColor p-4 flex flex-col items-center rounded-lg transform transition duration-500 hover:scale-105' >            
            <h2 className="h-1.5/4 py-5 px-5 text-lg font-bold">{movie.Title}</h2>
            <img className='w-2.5/3 h-2.5/3 overflow-hidden ' src={movie.Poster} alt={movie.Title} />
            <div className='flex w-full pt-2 justify-between font-bold' >
                <p >Type: {movie.Type}</p>
                <p >Year: {movie.Year}</p>
            </div>
        </div>
    )
}

export default Movie
