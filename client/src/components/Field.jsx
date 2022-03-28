import React from 'react';
import styles from './Field.module.css';

const Field = ({ label, onChange, value }) => {
  return (
    <form>
      <label>{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </form>
  );
};

export default Field;
