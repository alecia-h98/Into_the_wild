import axios from 'axios';

// All requests made with axios will include credentials, which means
// the cookie that corresponds with the session will be sent along
// inside every request's header
axios.defaults.withCredentials = true;


const createItemSlice = (set, get) => ({
    categories: [],
    fetchCategories: async () => {
        try {
            const response = await axios.get('api/items');
            set({categories: response.data});
        } catch (error) {
            console.log('Error fetching items');
        }






    }







});


export default createItemSlice;