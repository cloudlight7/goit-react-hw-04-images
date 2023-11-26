
import { Component } from 'react';
import Searchbar from './Searchbar'
import ImageGallery from './ImageGallery'
import Button from './Button'
import Modal from './Modal'
import { getPictures } from './services/api'
import Loader from './Loader'
import {Box} from './AppStyle.module'

export class App extends Component {
  state = {
    value:'',
    modal: false,
    loading: false,
    images: [],
    page: 1,
    error: '',
    loadMore: '',
    modalImage:'',

  }
   hendleFormSubmit = ({values})=>{
      this.setState({ value: values, page: 1  })
  }
  openImage = (eve) => {

    if (eve !== 'Escape') {
      const searchImg = this.state.images.find(option => option.id === eve);
      this.setState({ modalImage: searchImg.largeImageURL })
    }
    
    this.setState(({ modal }) => ({
      modal: !modal
    }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value || this.state.page !== prevState.page) {
      if (prevState.value !== this.state.value) {
        this.setState({ images: '', })
      }
      this.handleImages()
    }
  }
  handleImages = async () => {
		try {
      this.setState({ loading: true, loadMore:false })
      const data = await getPictures(this.state.value, this.state.page)
      this.setState((prev) => ({
        loading: false,
        images: [...prev.images, ...data.hits],
        loadMore: this.state.page < Math.ceil(data.totalHits / 12 )
    }))
    } catch (error) {
      console.log(error.message);
			this.setState({ error: error.message, loading: true, loadMore:false })
      }
    finally {

      }
  }
  changePage = () => {
    this.setState((prevState) => { 
      return {
        page: prevState.page + 1,
      };
    })
  }

  render() {
    const { modal, images,loading, loadMore, modalImage,error } = this.state;
    return (
      <>
        {modal && <Modal onCloseModal={this.openImage}>
          <div >
			<img src={modalImage} width={'100%'} height={'100%'}  alt='...' />
			
		</div></Modal>
        }
        <Searchbar onSubmit={this.hendleFormSubmit} isSubmitting={loading} />
        {images && <ImageGallery images={images} onOpenModal={this.openImage}/>}
        <Box>
          {error && <h1>{error}</h1>}
        {loading && <Loader/>}
          {loadMore && <Button onClickLoadMore={this.changePage} />}
          </Box>
      </>
  );
  };
  };