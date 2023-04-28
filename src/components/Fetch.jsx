import { Component } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';

export class Fetch extends Component {
  state = {
    BASE_URL: 'https://pixabay.com/api/',
    MY_API_PIXABAY_KEY: '?key=34337026-7de7d7fed724711432526467d',
    quantityObjects: 10,
    page: 1,
    images: '',
    loading: false,
  };

  // async componentDidMount() {
  //   const requestValue = await this.props.valueInput.trim();
  //   const resetPage = await this.resetPage();

  //   if (requestValue === '') {
  //     // refs.loadMore.classList.remove('opacity');
  //     // refs.input.value = '';
  //     console.log(requestValue);
  //   } else {
  //     try {
  //       const fetchPictures = await this.fetchPictures(requestValue);
  //       if (fetchPictures.hits.length === 0) {
  //         Notiflix.Notify.info(
  //           'Sorry, there are no images matching your search query. Please try again.'
  //         );
  //       } else {
  //         Notiflix.Notify.info(
  //           `Hooray! We found ${fetchPictures.totalHits} images.`
  //         );
  //         // render(fetchPictures);
  //       }
  //     } catch (error) {
  //       Notiflix.Notify.failure(error);
  //     }
  //   }
  // }

  fetchPictures = async requestValue => {
    try {
      const response = await axios.get(
        `${this.state.BASE_URL}${this.state.MY_API_PIXABAY_KEY}&q=${requestValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=${this.state.quantityObjects}`
      );
      this.incrementPage();
      return response.data;
    } catch (error) {
      return error;
    }
  };

  incrementPage() {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  resetPage() {
    this.setState({ page: 1 });
  }

  render() {
    // console.log(this.state.valueInput);
    return;
  }
}
