import React from "react"
import useStore from "../../zustand/store";
import './Favorites.css';
import { useNavigate } from "react-router-dom";
import smolBasket from '/images/smol-wicker-basket.png';
import smolHeart from '/images/smol-full-like.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';

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
    <div id='background' >
      <h1>Favorites</h1>
      <section className='favorites'>
        {favorites?.map((item) => {
          return (
            <div key={item.id} id={item.item_id}>
                {/* <div id={item.item_id} onClick={goToItem} > */}
                <Card border="success" >
                  <Card.Body>
              <img className='favPhotos' src={item.photo} alt={item.name} />
              <Card.Title id={item.item_id} onClick={goToItem}> {item.name} </Card.Title>
              <div id='favButtons' >
              <img id="favHeart" src={smolHeart} onClick={() => removeFavorite(item.id)}/>
              <img id="favBasket" onClick={foundForm} src={smolBasket} />
              </div>
              </Card.Body>
              </Card>
              <br />
            </div>
          );
        })}
      </section>
      <Button id='button' variant="dark" onClick={goHome} >Back</Button>
    </div>
  )
};

export default Favorites;
