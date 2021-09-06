// Модули
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import contactsAction from '../../redux/contacts/contacts-action';
import * as contactsAction from '../../redux/contacts/contacts-action';
import { getFilter } from '../../redux/contacts/contacts-selectors';

// Стили
import styles from '../Filter/filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsAction.changeFilter(e.target.value));

  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
