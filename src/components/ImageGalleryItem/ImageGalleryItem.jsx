import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import { GalleryItem, GalleryItemImage } from '../Emotion.styled'
import { Modal } from '../Modal/Modal'
import 'aos/dist/aos.css'; 
import AOS from "aos";

export class ImageGalleryItem extends Component {
static propTypes = {
          webformatURL: PropTypes.string.isRequired,
          largeImageURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
    };

  state = {
    showModal: false,
  }

   componentDidMount() {
    AOS.init();
   }
  
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  

  render() {
   const { webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;

    return (
<>
        <GalleryItem data-aos="fade-up" onClick={this.toggleModal}>
          <GalleryItemImage src={webformatURL} alt={tags} />
        </GalleryItem>
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageURL} alt={tags}/>
        )}
      </>


    )


}



 }
// export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
//   React.useEffect(() => {
//     AOS.init();
//   }, []);

//     return (<>
//    <GalleryItem data-aos="fade-up">
//         <GalleryItemImage src={webformatURL} alt={tags} />
//       </GalleryItem>
      
//       {showModal && <Modal src={largeImageURL} alt={tags}/>} 
//     </>)
  
    
// }

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };