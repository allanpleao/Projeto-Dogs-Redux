import { useEffect, useRef, useState } from "react";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from './PhotoComments.module.css'
import { useSelector } from "react-redux";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const { data } = useSelector((state) => state.user)
  const commentsSection = useRef(null);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  },[comments])

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {data && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;


