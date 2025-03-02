import axios from 'axios';

// All requests made with axios will include credentials, which means
// the cookie that corresponds with the session will be sent along
// inside every request's header
axios.defaults.withCredentials = true;

const createFoundSlice = (set, get) => ({

    foundItems: [],
    //this finds the full list of found items (only renders their name and a link to the next funtion)
    fetchFoundItems: async () => {
        //axios GET our found items from db
        try {
            const response = await axios.get('/api/found');
            set({ foundItems: response.data });
        } catch (error) {
            console.log('error fetching found items');       
        }
    },

    //This is the function that gets a specific found item's id to render only it's
    //information to the page
    foundItem: [],
    fetchFoundItem: async (foundId) => {
        try {
            const response = await axios.get(`/api/found/${foundId}`);
            set({ foundItem : response.data });
        } catch (error) {
            console.log('Error fetching specific found plant data', error);
        }
    },


    //Delete a found item
    deleteFoundItem: async (foundId) => {
        try {
            const response = await axios.delete(`/api/found/del/${foundId}`);
            console.log('Item deleted successfully', response.data);
            return response.data;
        } catch (error) {
            console.log('Error deleting found item', error);
            alert('Failed to delete the item');
        }
    }






});


export default createFoundSlice;