import { Component } from 'react';
import { createPortal } from 'react-dom';
import {Owerlay, ModalBox} from './ModalStyle.module';

const modalRoot = document.querySelector('#modal-root')
export default class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.hendleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendleKeyDown)
        }

    hendleKeyDown = eve => {
                if (eve.code === 'Escape') {
                    this.props.onCloseModal(eve.code);
                }
            }
    hendleBackDrop = event => {
                if (event.currentTarget === event.target) {
                    this.props.onCloseModal('Escape');
        }
    }
    
render(){
    return createPortal(
        <Owerlay onClick={this.hendleBackDrop} >
            <ModalBox >
                {this.props.children}
  </ModalBox>
</Owerlay>, modalRoot)
}
    }