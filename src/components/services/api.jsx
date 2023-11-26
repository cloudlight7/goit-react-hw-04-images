import axios from 'axios'
axios.defaults.baseURL = 'https://pixabay.com/api/'
const API_KEY = "39805507-98a380d83b6dbf250f682b86d";

export const getPictures = async (search, PAGE) => {
	const { data } = await axios(`?q=${search}&page=${PAGE}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
	return data
}