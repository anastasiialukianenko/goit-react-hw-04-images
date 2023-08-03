import React, { useEffect } from "react";
import { ModalWrap, Overlay } from "../Emotion.styled";

export function Modal({ onClose, src, alt }) {

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
    };
    
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };


    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
    };
}, [])

    return (
        <Overlay onClick={handleBackdropClick}>
            <ModalWrap>
                <img src={src} alt={alt} />
            </ModalWrap>
        </Overlay>
    );
    
}
