import { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const MY_API_PIXABAY_KEY = '?key=34337026-7de7d7fed724711432526467d';
const quantityObjects = 32;

export default function App() {
  const [valueInput, setValueInput] = useState('');
  const [upLoadImages, setUpLoadImages] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [upLoadDataTotalhits, setUpLoadDataTotalhits] = useState('');

  useEffect(() => {
    if (valueInput === '') {
      return;
    }
    setLoading(true);
    if (page !== 1) {
      window.scrollBy({
        top: 400,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    response();
    async function response() {
      try {
        const response = await axios.get(
          `${BASE_URL}${MY_API_PIXABAY_KEY}&q=${valueInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${quantityObjects}`
        );
        const updateHits = response.data.hits.map(e => {
          return {
            id: e.id,
            tags: e.tags,
            previewURL: e.previewURL,
            largeImageURL: e.largeImageURL,
          };
        });
        if (page === 1) {
          setUpLoadImages(updateHits);
        } else {
          setUpLoadImages(prevUpLoadImages => [
            ...prevUpLoadImages,
            ...updateHits,
          ]);
        }
        setUpLoadDataTotalhits(response.data.totalHits);
      } catch (error) {
        return error;
      } finally {
        setLoading(false);
      }
    }
  }, [page, valueInput]);

  const formSubmit = e => {
    setPage(1);
    setValueInput(e);
  };

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
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
          upLoadImages={upLoadImages}
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
