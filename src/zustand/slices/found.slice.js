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
    }


    //Delete a found item







});


export default createFoundSlice;