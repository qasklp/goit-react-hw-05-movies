import PropTypes from 'prop-types';
//import styles from "./MoviesList.module.css";
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    const location = useLocation();

    const elements = movies.map(({ id, title }) => {
        return <li key={id}>
            <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
        </li>
    });
    return <ul>
        {elements}
    </ul>;
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
}

export default MoviesList;