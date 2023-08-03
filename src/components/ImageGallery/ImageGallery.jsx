import React, { useState, useEffect } from "react";
import api from '../api';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';


import PropTypes from 'prop-types'; 
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList, LoadMoreBtn } from "../Emotion.styled";

export function ImageGallery({ imageName }) {

  
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);


  useEffect(() => {
    if (imageName) {
      const fetchImages = async (imageName, currentPage) => {
        try {
          const images = await api.fetchImages(imageName, currentPage);
          setData(prevData => [...prevData, ...images]);
          setStatus('resolved');
        } catch (error) {
          setStatus('rejected');
          setError(error);
        }
      };
      fetchImages(imageName, currentPage);
    }
  }, [imageName, currentPage]);

  useEffect(() => {
    if (imageName) {
      setData([]);
      setCurrentPage(1);
      setStatus('pending');
    }
  }, [imageName])

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  }

  if (status === 'pending') {
    return <Loader />
  }
  if (status === 'rejected') {
    return <Error><p>{error}</p></Error>
  }
  if (status === 'resolved') {
    if (data.length === 0) {
      return <Error><p>There are no pictures with this search term.</p></Error>;
    }
  
    return (

      <ImageGalleryList>
        {data.map((image) => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
          />
        ))}
        {data.length >= 12 && (
      <LoadMoreBtn type='button' onClick={handleLoadMore}>Load more</LoadMoreBtn>
    )}
        
      </ImageGalleryList>
    )
  };
};

ImageGallery.propTypes = {
   imageName: PropTypes.string.isRequired,
}
