import React, { Component } from "react";
import axios from 'axios';

import PropTypes from 'prop-types'; 
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList, } from "../Emotion.styled";



export const ImageGallery = ({ imageData }) => {
    return (
         <ImageGalleryList>
      {imageData.map((image) => (
        <ImageGalleryItem
          key={image.id} 
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          tags={image.tags}
        />
      ))}
    </ImageGalleryList>
    )
}

ImageGallery.propTypes = {
    imageData: PropTypes.array,
}

