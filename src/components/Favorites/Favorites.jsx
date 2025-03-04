import React from "react"
import useStore from "../../zustand/store";
import './Favorites.css';
import { useNavigate } from "react-router-dom";
import smolBasket from '/images/smol-wicker-basket.png';
import smolHeart from '/images/smol-full-like.png';


function Favorites() {
  const favorites = useStore((state) => state.favorites);
  const switchFav = useStore((state) => state.switchFav);
  const removeFavorite = useStore((state) => state.removeFavorite);
  const navigate = useNavigate();
  console.log(favorites);



  const goHome = () => {
    navigate('/');
  }
  
  const foundForm = () => {
    navigate('/found/form');
  }

      //--for some reason this code below didn't work--//
  const goToItem = (event) => {
    const itemId = event.target.id;
    console.log(itemId);
    navigate(`/items/${itemId}`)
  }


  return (
    <div>
      <h1>Favorites</h1>
      <section className='favorites'>
        {favorites?.map((item) => {
          return (
            <div key={item.id} id={item.item_id}>
                {/* <div id={item.item_id} onClick={goToItem} > */}
              <img className='favPhotos' src={item.photo} alt={item.name} />
              <h3 id={item.item_id} onClick={goToItem}> {item.name} </h3>
              {/* </div> */}
              <img src={smolHeart} onClick={() => removeFavorite(item.id)}/>
              <img onClick={foundForm} src={smolBasket} />
              <br />
            </div>
          );
        })}
      </section>
      <button onClick={goHome} >Back</button>
    </div>
  )
};

export default Favorites;
