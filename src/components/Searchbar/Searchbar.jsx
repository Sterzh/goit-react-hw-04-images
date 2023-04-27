// import PropTypes from 'prop-types';
// import css from './ContactForm.module.css';

const Searchbar = () => {
  return (
    <header class="searchbar">
      <form class="form">
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

// Searchbar.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };
