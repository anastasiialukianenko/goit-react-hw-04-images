import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'; 
import { GalleryItem, GalleryItemImage } from '../Emotion.styled'
import { Modal } from '../Modal/Modal'
import 'aos/dist/aos.css'; 
import AOS from "aos";

export function ImageGalleryItem({ webformatURL, largeImageURL, tags }) {
  
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

return (
<>
        <GalleryItem data-aos="fade-up" onClick={toggleModal}>
          <GalleryItemImage src={webformatURL} alt={tags} />
        </GalleryItem>
        {showModal && (
          <Modal onClose={toggleModal} src={largeImageURL} alt={tags}/>
        )}
      </>
    )

}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};


