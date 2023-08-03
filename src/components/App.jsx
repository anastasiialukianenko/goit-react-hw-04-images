import React, { useState } from "react";


import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { GalleryApp } from "./Emotion.styled";


export function App() {
    const [imageName, setImageName] = useState('');

const handleSubmit = (name) => {
    if (name.trim() !== '') {
 setImageName(name)
  };
}
  return (
       <GalleryApp>
         <Searchbar onSubmit={handleSubmit} />
         <ImageGallery imageName={imageName}/>

    </GalleryApp>
  );

  };
