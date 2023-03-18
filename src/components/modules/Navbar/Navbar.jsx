//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";
import items from './items';

const Navbar = () => {
    const elements = items.map(({ id, text, link }) => {
        return <li key={id}>
            <NavLink to={link} className={styles.link}>{text}</NavLink>
        </li>;
    })

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    );
}

export default Navbar;