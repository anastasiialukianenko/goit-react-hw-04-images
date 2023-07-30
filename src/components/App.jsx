import React, { Component } from "react";
import api from './api';



import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Error } from './Error/Error';
import { GalleryApp, LoadMoreBtn } from "./Emotion.styled";
import { Loader } from './Loader/Loader';


export class App extends Component {
  state = {
    imageName: '',
    isLoading: false,
    isError: false,
    error: null,
    currentPage: 1,
    data: [],
    isSearchSubmitted: false,
  };


async fetchImages() {
    const { imageName, currentPage } = this.state;

    this.setState({ isLoading: true, isSearchSubmitted: true });

    try {
      const images = await api.fetchImages(imageName, currentPage);
      this.setState((prevState) => ({
        data: prevState.currentPage === 1 ? images : [...prevState.data, ...images],
      }));
    } catch (error) {
      this.setState({ isError: true, error })
    } finally {
        this.setState({
        isLoading: false
      })}
    }
  

  
  
  async componentDidUpdate(prevProps, prevState) {
    const { imageName } = this.state;

    if (imageName !== prevState.imageName) {
      this.fetchImages();
    }
  }

handleSubmit = (name) => {
    if (name.trim() !== '') {
      this.setState({ imageName: name, data: [], currentPage: 1 });
    }
  };

  handleLoadMore = () => {

  this.setState(
    (prevState) => ({ currentPage: prevState.currentPage + 1 }),
    () => {this.fetchImages(); 
    }
  );
};

  
  render() {
    const { isLoading, isError, data, error, isSearchSubmitted,  } = this.state;
    const hasImages = data.length > 0;

     return (
    <GalleryApp>
      {isError && <Error><p>{error}</p></Error>}
      
      <Searchbar onSubmit={this.handleSubmit} />
      {isLoading ? (
        <Loader />
      ) : hasImages ? (
        <ImageGallery imageData={data} />
      ) : (
        isSearchSubmitted && <Error><p>There are no pictures with this search term.</p></Error>
      )}
      {hasImages && <LoadMoreBtn type='button' onClick={this.handleLoadMore}>Load more</LoadMoreBtn>}
    </GalleryApp>
  );



   
  }
}



