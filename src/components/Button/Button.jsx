import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onclick }) => {
  // console.log(this.props);

  return (
    <button className={css.Button} type="button" onClick={onclick}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onclick: PropTypes.func.isRequired,
};
