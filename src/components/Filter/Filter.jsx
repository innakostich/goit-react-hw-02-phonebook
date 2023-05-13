import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search contacts"
    value={value}
    onChange={onChange}
    className={css.input}
  />
);

export default Filter;
