import { useState } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export default function App() {
  const [valueInput, setValueInput] = useState('');
  const [upLoadImages, setUpLoadImages] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [upLoadDataTotalhits, setUpLoadDataTotalhits] = useState('');

  const formSubmit = e => {
    setValueInput(e);
    setPage(1);
  };

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const loadingStatus = e => {
    setLoading(e);
  };

  const handleUpLoadImages = e => {
    setUpLoadImages(e);
  };

  const handleUpLoadDataTotalhits = e => {
    setUpLoadDataTotalhits(e);
  };

  const openModal = event => {
    const imageId = event.target.src;
    const filterModalImage = upLoadImages.filter(e => e.previewURL === imageId);
    setModalImage(filterModalImage[0]);
    setModal(true);
  };

  const closeModal = e => {
    if (e.type === 'keydown' && e.code === 'Escape') {
      setModal(false);
    } else {
      if (e.currentTarget === e.target) {
        setModal(false);
      }
    }
  };

  const { largeImageURL, tags } = modalImage;
  return (
    <div className="app">
      <Searchbar onSubmit={formSubmit}></Searchbar>
      <ImageGallery>
        <ImageGalleryItem
          valueInput={valueInput}
          currentPage={page}
          loading={loadingStatus}
          handleUpLoadImages={handleUpLoadImages}
          handleUpLoadDataTotalhits={handleUpLoadDataTotalhits}
          openModal={openModal}
        ></ImageGalleryItem>
      </ImageGallery>
      {loading && <Loader></Loader>}
      {upLoadImages !== '' && upLoadImages.length !== upLoadDataTotalhits && (
        <Button onclick={incrementPage}></Button>
      )}
      {modal && (
        <Modal src={largeImageURL} alt={tags} closeModal={closeModal}></Modal>
      )}
    </div>
  );
}
