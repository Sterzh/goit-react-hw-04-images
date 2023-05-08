import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Searchbar.module.css';

export default function Searchbar(props) {
  const [valueInput, setValueInput] = useState('');

  const handleChange = event => {
    setValueInput(event.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (valueInput.trim() === '') {
      return;
    }
    props.onSubmit(valueInput);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={valueInput}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
