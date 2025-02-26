import { create } from "zustand";
import userSlice from './slices/user.slice.js';
import foundSlice from "./slices/found.slice.js";
import itemSlice from "./slices/item.slice.js";


// Combine all slices in the store:
const useStore = create((...args) => ({
  ...userSlice(...args),
  ...foundSlice(...args),
  ...itemSlice(...args)
}))


export default useStore;
