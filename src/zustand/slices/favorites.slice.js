import axios from 'axios';

// All requests made with axios will include credentials, which means
// the cookie that corresponds with the session will be sent along
// inside every request's header
axios.defaults.withCredentials = true;

const createFavoritesSlice = (set, get) => ({

    //the favorites functions go here

    //get function for all favorites specific to the user
    favorites: [],

    fetchFavorites: async () => {
        try {
            const response = await axios.get('/api/favorites');
            set({ favorites : response.data });
        } catch (error) {
            console.log('error fetching favorites');
        }
    },

    //post function for favorites
    addFavorite: async (itemId) => {
        try {
            const response = await axios.post(`/api/favorites/${itemId}`);
            console.log('Adding favorite, item id added:', itemId);
            return response.data;
        } catch (error) {
            console.log('Unable to set new favorite.');
        }
    },

    //put function for favorites
    switchFav: async (favId) => {
        try {
            const response = await axios.put(`/api/favorites/fav/${favId}`);
            console.log('Item unfavorited sucessfully', response.data);
            return response.data;
        } catch (error) {
            console.log('Error unfavoriting item', error);
            alert('Failed to unfavorite the item');  
        }
    }

});



export default createFavoritesSlice;