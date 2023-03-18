//import styles from "./Movies.module.css";
import Form from 'components/modules/Form/Form';
import Loader from 'components/modules/Loader/Loader';
import MoviesList from 'components/modules/MoviesList/MoviesList';
import { searchMovies } from 'components/shared/services/films-api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const request = searchParams.get("query");

    useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
          const { results } = await searchMovies(request);
        setFilms([...results]);
      }
      catch (error) {
        alert(error.message);
      }
      finally {
        setLoading(false);
      }
    }
    if (request !== '') {
      fetchMovies();
    }
  }, [request]);

    const setSearchRequest = ({ query }) => {
        setSearchParams({ query });
        setFilms([]);
    }

    return <div>
        <Form onSubmit={setSearchRequest}/>
        {loading?<Loader/>:<MoviesList movies={films} />}
    </div>;
}

export default Movies;