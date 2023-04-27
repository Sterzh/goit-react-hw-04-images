// import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src="" alt="" className={css.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;

// ImageGalleryItem.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };
