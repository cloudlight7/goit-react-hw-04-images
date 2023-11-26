/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {Owerlay, ModalBox} from './ModalStyle.module';

const modalRoot = document.querySelector('#modal-root')

 const Modal = ({children, onCloseModal}) => {

    useEffect(() => {
       window.addEventListener('keydown', hendleKeyDown)

      return () => {
        window.removeEventListener('keydown', hendleKeyDown)
      }
    }, [])
    

   const hendleKeyDown = eve => {
                if (eve.code === 'Escape') {
                    onCloseModal();
                }
            }
   const hendleBackDrop = event => {
                if (event.currentTarget === event.target) {
                    onCloseModal();
        }
    }
  return createPortal(
        <Owerlay onClick={hendleBackDrop} >
            <ModalBox >
                {children}
  </ModalBox>
</Owerlay>, modalRoot)
}

export default Modal