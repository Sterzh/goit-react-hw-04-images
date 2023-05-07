import PropTypes from 'prop-types';
import css from './Button.module.css';

export default function Button({ onclick }) {
  // console.log(this.props);

  return (
    <button className={css.Button} type="button" onClick={onclick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onclick: PropTypes.func.isRequired,
};
