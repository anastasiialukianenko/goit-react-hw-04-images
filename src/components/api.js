import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const PERSONAL_KEY = '37256076-94134e98c6f84438055c7da20';


const fetchImages = async (imageName, currentPage) => {
    const response = await axios.get(`/?q=${imageName}&page=${currentPage}&key=${PERSONAL_KEY}&image_type=photo&orientation=horizontal&per_page=12`)

    return response.data.hits;
}

const api = { fetchImages };

export default api;

