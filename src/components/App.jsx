import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { Fetch, resetPage } from './Fetch';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    valueInput: ' ',
    images: '',
    loading: false,
  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   setTimeout(() => {
  //     try {
  //       const fetchPictures = Fetch(this.state.valueInput);
  //     } catch (error) {
  //       Notiflix.Notify.failure(error);
  //     }
  //   }, 500);
  // }

  formSubmit = e => {
    this.setState({ valueInput: e });

    setTimeout(() => {
      <Fetch valueInput={this.state.valueInput}></Fetch>;
      // try {
      //   Fetch(this.state.valueInput);
      // } catch (error) {
      //   Notiflix.Notify.failure(error);
      // }
    }, 1);

    // resetPage();
  };

  render() {
    // console.log(this.state.valueInput);
    return (
      <div className="app">
        {/* <Fetch valueInput={this.state.valueInput}></Fetch>; */}
        <Searchbar onSubmit={this.formSubmit}></Searchbar>
        <ImageGallery></ImageGallery>
      </div>
    );
  }
}
