
import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem'
import {List} from './GalleryListStyle.module'


const ImageGallery = ({ images, onOpenModal }) => {
    
    return <List>
        {images.map(image => {
        //console.log(images.id);
		return (
        <ImageGalleryItem key={image.id} image={image} onOpenModal={onOpenModal} />
        )
        })}
    </List>
}

export default ImageGallery

