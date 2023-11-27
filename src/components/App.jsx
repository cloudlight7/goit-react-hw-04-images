
import { useState} from 'react';
import Searchbar from './Searchbar'
import ImageGallery from './ImageGallery'
import Button from './Button'
import Modal from './Modal'
import { getPictures } from './services/api'
import Loader from './Loader'
import {Box} from './AppStyle.module'
import { useEffect } from 'react';



export const App = () => {
  const [value, setValue] = useState('')
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState('')
  const [loadMore, setLoadMore] = useState('')
  const [modalImage, setModalImage] = useState('')

  const hendleFormSubmit = ({ values }) => {
    setImages('')
    setPage(1)
    setValue(values)
  }
const openImage = (eve) => {
      const searchImg = images.find(option => option.id === eve);
      setModalImage(searchImg.largeImageURL)
    setModal(true)
   
  }
  const closeImage = () =>{
    setModal(false)
    }
  useEffect(() => {
  if(value){
  const handleImages = async () => {
  try {
    setLoading(true)
    setLoadMore(false)
    const data = await getPictures(value, page)
    setImages((prev) => {
        return [...prev, ...data.hits]
    })
    setLoadMore(page < Math.ceil(data.totalHits / 12 ))
  } catch (error) {
    setLoading(true)
    setError(error.message)
    setLoadMore(false)
		 }
    finally {
      setLoading(false)
      }
  }
    handleImages()
    }
  }, [value, page])

  const changePage = () => {
   setPage((prevState) => {
          return prevState + 1
        })
  }
  return (
    <>
        {modal && <Modal onCloseModal={closeImage}>
          <div >
			<img src={modalImage} width={'100%'} height={'100%'}  alt='...' />
			
		</div></Modal>
        }
        <Searchbar onSubmit={hendleFormSubmit} isSubmitting={loading} />
        {images && <ImageGallery images={images} onOpenModal={openImage}/>}
        <Box>
          {error && <h1>{error}</h1>}
        {loading && <Loader/>}
          {loadMore && <Button onClickLoadMore={changePage} />}
          </Box>
      </>
  )
}

