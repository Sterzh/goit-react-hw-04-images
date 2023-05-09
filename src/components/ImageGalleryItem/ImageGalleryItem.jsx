/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';
import { React } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const BASE_URL = 'https://pixabay.com/api/';
const MY_API_PIXABAY_KEY = '?key=34337026-7de7d7fed724711432526467d';
const quantityObjects = 32;

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function ImageGalleryItem(props) {
  const [upLoadImages, setUpLoadImages] = useState([]);
  const prevProps = usePrevious(props);

  useEffect(() => {
    response();
    async function response() {
      props.loading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}${MY_API_PIXABAY_KEY}&q=${props.valueInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${props.currentPage}&per_page=${quantityObjects}`
        );

        const updateHits = response.data.hits.map(e => {
          return {
            id: e.id,
            tags: e.tags,
            previewURL: e.previewURL,
            largeImageURL: e.largeImageURL,
          };
        });

        setUpLoadImages(updateHits);
        props.handleUpLoadDataTotalhits(response.data.totalHits);
        props.handleUpLoadImages(updateHits);
      } catch (error) {
        return error;
      } finally {
        props.loading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (props.currentPage === 1 && props.valueInput === '') {
      return;
    }
    if (props.currentPage !== 1) {
      window.scrollBy({
        top: 400,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
    if (
      prevProps.currentPage !== props.currentPage ||
      prevProps.valueInput !== props.valueInput
    ) {
      props.loading(true);
      return async function response() {
        try {
          const response = await axios.get(
            `${BASE_URL}${MY_API_PIXABAY_KEY}&q=${props.valueInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${props.currentPage}&per_page=${quantityObjects}`
          );
          const updateHits = response.data.hits.map(e => {
            return {
              id: e.id,
              tags: e.tags,
              previewURL: e.previewURL,
              largeImageURL: e.largeImageURL,
            };
          });
          if (prevProps.valueInput === props.valueInput) {
            await setUpLoadImages(prevUpLoadImages => [
              ...prevUpLoadImages,
              ...updateHits,
            ]);
            props.handleUpLoadDataTotalhits(response.data.totalHits);
          } else {
            setUpLoadImages(updateHits);
            props.handleUpLoadDataTotalhits(response.data.totalHits);
          }
        } catch (error) {
          return error;
        } finally {
          props.loading(false);
        }
      };
    }
    props.handleUpLoadImages(upLoadImages);
  }, [props]);

  return upLoadImages.map(e => (
    <li key={e.id} className={css.ImageGalleryItem}>
      <img
        src={e.previewURL}
        alt={e.tags}
        className={css.ImageGalleryItemImage}
        onClick={props.openModal}
      />
    </li>
  ));
}

ImageGalleryItem.propTypes = {
  handleUpLoadImages: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
