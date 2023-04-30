// import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    this.props.closeModal(e);
  };

  render() {
    console.log(this.props.alt);
    return (
      <div className={css.Overlay} onClick={this.props.closeModal}>
        <div className={css.Modal}>
          <img src={this.props.src} alt={this.props.alt} />
          <p className={css.Alt}>{this.props.alt}</p>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
