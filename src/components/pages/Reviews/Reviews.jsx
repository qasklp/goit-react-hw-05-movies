//import styles from "./Reviews.module.css";

import { useParams } from 'react-router-dom';
import { getReviews } from 'components/shared/services/films-api';
import ReviewList from 'components/modules/ReviewList/ReviewList';
import { useEffect, useState } from 'react';


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { results } = await getReviews(movieId);
                setReviews(results);
            }
            catch (error) {
                alert(error.message);
            }
        }

        fetchReviews();
    }, [movieId]);

    return (reviews.length>0 ? <ReviewList reviews={reviews}  /> : <p>We don't have any reviews for this movie</p>);
}

export default Reviews;