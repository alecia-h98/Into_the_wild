import axios from 'axios';

// All requests made with axios will include credentials, which means
// the cookie that corresponds with the session will be sent along
// inside every request's header
axios.defaults.withCredentials = true;


const createItemSlice = (set, get) => ({
 
    //fetching all items in my db
    itemsList: [],

    fetchList: async () => {
        try {
            const response = await axios.get('/api/items');
            set({ itemsList: response.data });
        } catch (error) {
            console.log('Error fetching items');
        }
    },





    //favorites page info
    favorites: [],

    fetchFavorites: async () => {
        try {
            const response = await axios.get('api/items/favorites');
            set ({favorites: response.data});
        } catch (error) {
            console.log('Error fetching favorites list');
        }
    }






});


export default createItemSlice;