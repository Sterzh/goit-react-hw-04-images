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
