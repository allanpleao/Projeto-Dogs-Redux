import styles from './FeedPhotosItem.module.css'
import Image from '../Helper/Image';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {

  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li onClick={handleClick} className={styles.photo}>
    <Image src={photo.src} alt={photo.title} />
    <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem