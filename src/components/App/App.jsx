import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import useStore from "../../zustand/store";
import Nav from "../Nav/Nav";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import FoundItemsList from "../Found Items/FoundItemsList";
import Tips_Guidelines from "../Tips_Guidelines/Tips_Guidelines";
import FoundItem from "../FoundItem/FoundItem";
import Category from "../Categories/Categories";
import Favorites from "../Favorites/Favorites";
import CategoryItems from "../CategoryItems/CategoryItems";
import SpecificItem from "../SpecificItem/SpecificItem";
import FoundForm from "../FoundForm/FoundForm";
import './App.css';



function App() {
  const user = useStore((state) => state.user);
  const fetchUser = useStore((state) => state.fetchUser);
  const fetchFoundItems = useStore((state) => state.fetchFoundItems);
  const fetchCategories = useStore((state) => state.fetchCategories);
  const fetchFavorites = useStore((state) => state.fetchFavorites);
  
  const favorites = useStore((state) => state.favorites)



  useEffect(() => {
    fetchUser();
    fetchFoundItems();
    fetchCategories();
    fetchFavorites();
  }, [fetchUser, fetchFoundItems, fetchCategories, fetchFavorites, user.id]);
  console.log('fetching user', user);
  console.log('fetching favorites', favorites);




  return (
    <>
      <header>
        <h1 id='ITW' ><b>Into the Wild</b></h1>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              user.id ? (
                <HomePage /> // Render HomePage for authenticated user.
              ) : (
                <Navigate to="/login" replace /> // Redirect unauthenticated user.
              )
            }
          />
          <Route
            path="/login"
            element={
              user.id ? (
                <Navigate to="/" replace /> // Redirect authenticated user.
              ) : (
                <LoginPage /> // Render LoginPage for unauthenticated user.
              )
            }
          />
          <Route
            path="/registration"
            element={
              user.id ? (
                <Navigate to="/" replace /> // Redirect authenticated user.
              ) : (
                <RegisterPage /> // Render RegisterPage for unauthenticated user.
              )
            }
          />
          <Route path='/tips_guidelines' element={<Tips_Guidelines/>}/>
          <Route path='/found' element={<FoundItemsList />} />
          <Route path='/found/:foundId' element={<FoundItem />} />
          <Route path='/items' element={<Category />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/categories/:categoryId' element={<CategoryItems />} />
          <Route path='/items/:itemId/found' element={<FoundForm />} />
          <Route path='/items/:itemId' element={<SpecificItem />} />
          {/* <Route path='/favorites/fav' element={<Favorites />} /> */}


          <Route
            path="/about"
            element={
              <>
              <div id='about' >
                <h2>About Page</h2>
                <ul>
                  <p>Icons:</p>
                  <li>
                    Basket - 
                    Your found items, you can also click on this icon on a specific item's detail page to go to the found form and create a new finding.
                  </li>
                  <li>
                    Heart -
                    This will bring you to your favorites list, you can select this icon when on an items description page to add it to your favorites list. A filled in icon means you have already liked it.
                  </li>
                  <li>
                    Trash bin -
                    On your found items description page you are able to delete stored items. You may find these items in your archive within the dropdown menu.
                  </li>
                  <li>

                  </li>

                  <p>This app was made to </p>

                </ul>
                </div>
              </>
            }
          />
          <Route path="*" element={<h2>404 Page</h2>} />
        </Routes>
      </main>
      <footer>
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default App;
