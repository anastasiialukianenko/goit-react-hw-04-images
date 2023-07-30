import React, { Component } from "react";
import api from '../api';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';


import PropTypes from 'prop-types'; 
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList, LoadMoreBtn } from "../Emotion.styled";

export class ImageGallery extends Component {
  static propTypes = {
     imageName: PropTypes.string.isRequired,
      };
  state = {
    status: 'idle',
    error: null,
    currentPage: 1,
    data: [],
  }
  
  
  async componentDidUpdate(prevProps, prevState) {
    
    const { imageName } = this.props;
    const { currentPage, } = this.state;

    if (imageName !== prevProps.imageName || currentPage !== prevState.currentPage) {
      if (imageName !== prevProps.imageName) {
        this.setState({
        data: [],
        currentPage: 1,
        status: 'pending'
      });
      }

      this.fetchImages()
    }
  }

async fetchImages() {
    const { imageName } = this.props;
    const { currentPage, } = this.state;

    try {
      const images = await api.fetchImages(imageName, currentPage);
      this.setState((prevState) => ({data: currentPage === 1 ? images : [...prevState.data, ...images], status: 'resolved'}));
    } catch (error) {
      this.setState({ status: 'rejected', error })
    } 
  }

  handleLoadMore = () => {
  this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
}



  render() {
    const { status, error } = this.state;  
    
    if (status === 'pending') {
     return <Loader />
   }
    if (status === 'rejected') {
     return <Error><p>{error}</p></Error>
   }
    if (status === 'resolved') {
if (this.state.data.length === 0) {
      return <Error><p>There are no pictures with this search term.</p></Error>;
    }

      return (

        <ImageGalleryList>
          {this.state.data.map((image) => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              tags={image.tags}
            />
          ))}
          
          <LoadMoreBtn type='button' onClick={this.handleLoadMore}>Load more</LoadMoreBtn>
        
        </ImageGalleryList>
      )
    }
  
    }
  
}
