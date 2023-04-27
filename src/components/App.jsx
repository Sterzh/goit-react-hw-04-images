import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { Fetch, resetPage } from './Fetch';

export class App extends Component {
  state = {
    valueInput: ' ',
    images: '',
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(() => {
      Fetch(this.state.valueInput);
    }, 500);
  }

  formSubmit = e => {
    this.setState({ valueInput: e });

    // <Fetch valueInput={this.state.valueInput}></Fetch>;

    setTimeout(() => {
      Fetch(this.state.valueInput);
    }, 1);

    resetPage();
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
