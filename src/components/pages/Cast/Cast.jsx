//import styles from "./Cast.module.css";

import { useParams } from 'react-router-dom';
import { getCast } from 'components/shared/services/films-api';
import ActorList from 'components/modules/ActorList/ActorList';
import { useEffect, useState } from 'react';


const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const {cast} = await getCast(movieId);
                setCast(cast);
            }
            catch (error) {
                alert(error.message);
            }
        }

        fetchCast();
    }, [movieId]);


    return <ActorList cast={cast}/>;
}

export default Cast;