import React, { Component } from "react";


import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { GalleryApp } from "./Emotion.styled";



export class App extends Component {
  state = {
    imageName: '',
  };

handleSubmit = (name) => {
    if (name.trim() !== '') {
      this.setState({
        imageName: name,
      });
    }
  };

  render() {

     return (
       <GalleryApp>
         <Searchbar onSubmit={this.handleSubmit} />
         <ImageGallery imageName={this.state.imageName}/>

    </GalleryApp>
  );
  }
}
