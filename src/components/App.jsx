import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';

export class App extends Component {
  state = {
    valueInput: ' ',
    images: '',
    loading: false,
    page: 1,
  };

  formSubmit = e => {
    this.setState({ valueInput: e });
    this.setState({ page: 1 });
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    console.log(this.state.page);
    return (
      <div className="app">
        <Searchbar onSubmit={this.formSubmit}></Searchbar>
        <ImageGallery>
          <ImageGalleryItem
            key=""
            valueInput={this.state.valueInput}
            page={this.state.page}
            loading={this.state.loading}
          ></ImageGalleryItem>
        </ImageGallery>
        <Loader></Loader>
        <Button onclick={this.incrementPage}></Button>
        {/* <Modal></Modal> */}
      </div>
    );
  }
}
