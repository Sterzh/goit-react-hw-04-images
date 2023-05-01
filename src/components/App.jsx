import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    valueInput: '',
    upLoadImages: '',
    loading: false,
    page: 1,
    modal: false,
    modalImage: '',
    upLoadDataTotalhits: '',
  };

  formSubmit = e => {
    this.setState({ valueInput: e });
    this.setState({ page: 1 });
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  loadingStatus = e => {
    this.setState({ loading: e });
  };

  handleUpLoadImages = e => {
    this.setState({ upLoadImages: e });
  };

  handleUpLoadDataTotalhits = e => {
    this.setState({ upLoadDataTotalhits: e });
  };

  openModal = event => {
    const imageId = event.target.src;
    const filterModalImage = this.state.upLoadImages.filter(
      e => e.previewURL === imageId
    );
    this.setState({ modalImage: filterModalImage[0] });
    this.setState({ modal: true });
  };

  closeModal = e => {
    if (e.type === 'keydown') {
      this.setState({ modal: false });
    } else {
      if (e.currentTarget === e.target) {
        this.setState({ modal: false });
      }
    }
  };

  render() {
    console.log(this.state.upLoadDataTotalhits);
    console.log(this.state.upLoadImages.length);
    const { largeImageURL, tags } = this.state.modalImage;
    return (
      <div className="app">
        <Searchbar onSubmit={this.formSubmit}></Searchbar>
        <ImageGallery>
          <ImageGalleryItem
            valueInput={this.state.valueInput}
            page={this.state.page}
            loading={this.loadingStatus}
            handleUpLoadImages={this.handleUpLoadImages}
            handleUpLoadDataTotalhits={this.handleUpLoadDataTotalhits}
            openModal={this.openModal}
          ></ImageGalleryItem>
        </ImageGallery>
        {this.state.loading && <Loader></Loader>}
        {this.state.upLoadImages !== '' &&
          this.state.upLoadImages.length !== this.state.upLoadDataTotalhits && (
            <Button onclick={this.incrementPage}></Button>
          )}
        {this.state.modal && (
          <Modal
            src={largeImageURL}
            alt={tags}
            closeModal={this.closeModal}
          ></Modal>
        )}
      </div>
    );
  }
}
