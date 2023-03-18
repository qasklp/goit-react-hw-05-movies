import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './Form.module.css'

const Form = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ query });
        setQuery('');
    }

    return <form onSubmit={handleSubmit}>
        <input
            className={styles.SearchFormInput}
            name="query"
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={handleChange}
            required
        />
        <button type="submit">Search</button>
    </form>;
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Form;