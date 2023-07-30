import React, { Component } from "react";
import { ModalWrap, Overlay } from "../Emotion.styled";

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

  render() { 

    return (
        <Overlay onClick={this.handleBackdropClick}>
            <ModalWrap>
                <img src={this.props.src} alt={this.props.alt} />
            </ModalWrap>
        </Overlay>
    );
  }
}