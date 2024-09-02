import styles from "./FeedModal.module.css";
import { useEffect } from "react";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto } from "../../redux/store/Slices/PhotoSlice";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error } = useSelector((state) => state.photo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhoto(photo.id))
    
  }, [dispatch, photo.id]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null)

  }

  return <div className={styles.modal} onClick={handleOutsideClick}>
    {error && <Error error={error} />}
    {loading && <Loading />}
    {data && <PhotoContent />}
  </div>;
};

export default FeedModal;
