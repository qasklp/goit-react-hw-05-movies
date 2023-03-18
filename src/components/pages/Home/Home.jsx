//import styles from "./Home.module.css";
import { trendingFilms } from 'components/shared/services/films-api';
import MoviesList from 'components/modules/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchTrendingFilms = async () => {
            try {
                const {results} = await trendingFilms();
                setTrendingMovies([...results]);
            }
            catch (error) {
                alert(error.message);
            }
        }

        fetchTrendingFilms();
    }, []);

    return <div>
        <h1>Trending movies</h1>
        <MoviesList movies={trendingMovies}/>
    </div>;
}

export default Home;