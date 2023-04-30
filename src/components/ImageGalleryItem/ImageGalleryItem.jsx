import { Component } from 'react';
import { React } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  static = {
    BASE_URL: 'https://pixabay.com/api/',
    MY_API_PIXABAY_KEY: '?key=34337026-7de7d7fed724711432526467d',
    quantityObjects: 32,
  };

  state = {
    upLoadImages: [],
    page: 1,
  };

  async componentDidMount() {
    this.props.loading(true);
    try {
      const response = await axios.get(
        `${this.static.BASE_URL}${this.static.MY_API_PIXABAY_KEY}&q=${this.props.valueInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.props.page}&per_page=${this.static.quantityObjects}`
      );
      this.setState({ upLoadImages: response.data.hits });
      this.props.handleUpLoadImages(response.data.hits);
    } catch (error) {
      return error;
    } finally {
      this.props.loading(false);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.page !== 1) {
      window.scrollBy({
        top: 400,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
    if (
      prevProps.page !== this.props.page ||
      prevProps.valueInput !== this.props.valueInput
    ) {
      this.props.loading(true);
      try {
        const response = await axios.get(
          `${this.static.BASE_URL}${this.static.MY_API_PIXABAY_KEY}&q=${this.props.valueInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.props.page}&per_page=${this.static.quantityObjects}`
        );
        this.setState(prevState => ({ page: prevState.page + 1 }));
        if (prevProps.valueInput === this.props.valueInput) {
          this.setState(prevState => ({
            upLoadImages: [...prevState.upLoadImages, ...response.data.hits],
          }));
          setTimeout(() => {
            this.props.handleUpLoadImages(this.state.upLoadImages);
          }, 1);
        } else {
          this.setState({ page: 1 });
          this.setState({
            upLoadImages: response.data.hits,
          });
          setTimeout(() => {
            this.props.handleUpLoadImages(response.data.hits);
          }, 1);
        }
      } catch (error) {
        return error;
      } finally {
        this.props.loading(false);
      }
    }
  }

  render() {
    return this.state.upLoadImages.map(e => (
      <li key={e.id} className={css.ImageGalleryItem}>
        <img
          src={e.previewURL}
          alt={e.tags}
          className={css.ImageGalleryItemImage}
          onClick={this.props.openModal}
        />
      </li>
    ));
  }
}

ImageGalleryItem.propTypes = {
  handleUpLoadImages: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
