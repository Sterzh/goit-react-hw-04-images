import { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  static = {
    BASE_URL: 'https://pixabay.com/api/',
    MY_API_PIXABAY_KEY: '?key=34337026-7de7d7fed724711432526467d',
    quantityObjects: 10,
  };

  state = {
    loadImages: [],
    page: 1,
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${this.static.BASE_URL}${this.static.MY_API_PIXABAY_KEY}&q=${this.props.valueInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.props.page}&per_page=${this.static.quantityObjects}`
      );
      this.setState({ loadImages: response.data.hits });
    } catch (error) {
      return error;
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.page !== this.props.page ||
      prevProps.valueInput !== this.props.valueInput
    ) {
      try {
        const response = await axios.get(
          `${this.static.BASE_URL}${this.static.MY_API_PIXABAY_KEY}&q=${this.props.valueInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.props.page}&per_page=${this.static.quantityObjects}`
        );
        this.setState({ loadImages: response.data.hits });
      } catch (error) {
        return error;
      }
    }
  }

  render() {
    return this.state.loadImages.map(e => (
      <li key={e.id} className={css.ImageGalleryItem}>
        <img
          src={e.previewURL}
          alt={e.tags}
          className={css.ImageGalleryItemImage}
        />
      </li>
    ));
  }
}

// ImageGalleryItem.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };
