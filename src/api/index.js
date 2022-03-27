import axios from 'axios'

const URL = 'https://movie-database-alternative.p.rapidapi.com/'


export const getMovies = async (movieName) => {
    const options = {
        params: {s: movieName, r: 'json', page: '1'},
        headers: {
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        }
    };

    try {
        const { data } = await axios.get(URL, options);
        return data
    } catch (error) {
        console.log(error)
    }
}