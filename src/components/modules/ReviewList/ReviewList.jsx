import PropTypes from 'prop-types';
//import styles from "./ReviewList.module.css";

const ReviewList = ({ reviews }) => {
    const elements = reviews.map(({ id, author, content }) => {
        return <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
        </li>
    });
    return <ul>
        {elements}
    </ul>;
}

ReviewList.propTypes = {
    reviews: PropTypes.array.isRequired,
}

export default ReviewList;