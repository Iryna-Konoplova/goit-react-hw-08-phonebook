// Модули
import React from 'react';
import { NavLink } from 'react-router-dom';

// Стили
import styles from '../AuthNav/AuthNav.module.css';

const style = {
  activeLink: {
    color: '#E84A5F',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeStyle={style.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeStyle={style.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
}
