import PropTypes from 'prop-types';
//import styles from "./ActorList.module.css";

const ActorList = ({ cast }) => {
    const elements = cast.map(({ id, name, profile_path, character }) => {
        const profileURL = `https://image.tmdb.org/t/p/w500${profile_path}`
        return <li key={id}>
            {!profile_path || <img src={profileURL} alt="actor" width="100px" />}
            <h3>{name}</h3>
            <p>{character}</p>
        </li>
    });
    return <ul>
        {elements}
    </ul>;
}

ActorList.propTypes = {
    cast: PropTypes.array.isRequired,
}

export default ActorList;