import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

export default function ImageGallery({ upLoadImages, openModal }) {
  if (upLoadImages !== '') {
    return (
      <ul className={css.ImageGallery}>
        {upLoadImages.map(e => (
          <ImageGalleryItem
            key={e.id}
            event={e}
            openModal={openModal}
          ></ImageGalleryItem>
        ))}
      </ul>
    );
  }
}
