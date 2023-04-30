import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    valueInput: '',
  };

  handleChange = event => {
    this.setState({
      valueInput: event.currentTarget.value.toLowerCase().trim(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.valueInput.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.valueInput);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.valueInput}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
