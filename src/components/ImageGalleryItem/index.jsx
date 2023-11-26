import {Elem, Img} from './GalleryItemStyle.module'
const Image = ({ image, onOpenModal }) => {
	return (
		<Elem onClick={()=>onOpenModal(image.id)}>
			<Img src={image.webformatURL}  alt='...' />
			
		</Elem>
	)
}

export default Image