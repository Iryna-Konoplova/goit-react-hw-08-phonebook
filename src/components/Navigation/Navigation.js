// Модули
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Компоненты
import { authSelectors } from '../../redux/auth';

// Стили
import styles from '../Navigation/Navigation.module.css';

const style = {
  // link: {
  //   display: 'inline-block',
  //   textDecoration: 'none',
  //   padding: 12,
  //   fontWeight: 700,
  //   color: '#2A363B',
  // },
  activeLink: {
    color: 'rgb(231, 40, 158)',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeStyle={style.activeLink}
      >
        Главная
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            exact
            className={styles.link}
            activeStyle={style.activeLink}
          >
            Контакты
          </NavLink>
          {/* <NavLink
            to="/upload"
            exact
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Загрузить
          </NavLink> */}
        </>
      )}
    </nav>
  );
};

export default Navigation;
