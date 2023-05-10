import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ upLoadImages, openModal }) {
  if (upLoadImages === '') {
    return;
  }

  return upLoadImages.map(e => (
    <li key={e.id} className={css.ImageGalleryItem}>
      <img
        src={e.previewURL}
        alt={e.tags}
        className={css.ImageGalleryItemImage}
        onClick={openModal}
      />
    </li>
  ));
}

ImageGalleryItem.propTypes = {
  upLoadImages: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
    .isRequired,
};
