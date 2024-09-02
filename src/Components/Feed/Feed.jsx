import { useState } from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types'

const Feed = ({ user = 0 }) => {
  const [modalPhoto, setModalPhoto] = useState(null);


  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      <FeedPhotos user={user} page="1" setModalPhoto={setModalPhoto}/>
      <FeedPhotos user={user} page="2" setModalPhoto={setModalPhoto}/>
    </div>
  )
}


Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed