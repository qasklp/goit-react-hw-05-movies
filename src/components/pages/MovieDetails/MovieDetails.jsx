import styles from "./MovieDetails.module.css";
import { Link, useLocation, useParams, useNavigate, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'components/shared/services/films-api';
import { useEffect, useState } from 'react';


const MovieDetails = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = (location.state.from ? location.state : "/");

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState([]);
    const [score, setScore] = useState();
    const [date, setDate] = useState();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const {genres, overview, poster_path, title, vote_average, release_date} = await getMovieDetails(movieId);
                setGenres(genres);
                setOverview(overview);
                setPoster(`https://image.tmdb.org/t/p/w500${poster_path}`);
                setTitle(title);
                setScore(vote_average);
                setDate(release_date.slice(0,4))
            }
            catch (error) {
                alert(error.message);
            }
        }

        fetchMovieDetails();
    }, [movieId]);

    return <div>
        <button type='button' onClick={() => navigate(from)}>Go back</button>
        <section className={styles.mainSection}>
            <img src={poster} alt="poster" width="200px" />
            <div className={styles.box}>
                <h1>{title} ({date})</h1>
                <p>User score: {Math.round(score * 10)}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.map(genre=>genre.name).join(" ")} </p>
            </div>
        </section>
        <section>
            <h2>Additional information</h2>
            <ul>
                <li>
                    <Link to="cast" state={{ from }}>Cast</Link>
                </li>
                <li>
                    <Link to="reviews" state={{ from }}>Reviews</Link>
                </li>
            </ul>
        </section>
        <Outlet/>
    </div>
}

export default MovieDetails;