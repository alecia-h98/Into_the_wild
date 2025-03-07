import React from "react"
import useStore from "../../zustand/store";
import './Favorites.css';
import { useNavigate } from "react-router-dom";
import smolBasket from '/images/smol-wicker-basket.png';
import smolHeart from '/images/smol-full-like.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';



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
    <>
    <div id='background' >
      <h1>Favorites</h1>
      <section className='favorites'>
        {favorites?.map((item) => {
          return (
            <div key={item.id} id={item.item_id}>
                {/* <div id={item.item_id} onClick={goToItem} > */}
                <Container className="mt-3">
                <Card style={{ width: '13rem' }} className="p-3" 
                border="success">
                   <Card.Body>
                <Row>
                {/* <Col xs={6} className="border p-2">Item 1</Col>
                <Col xs={6} className="border p-2">Item 2</Col>
                </Row>
                <Row>
                <Col xs={4} className="border p-2">Item 3</Col>
                <Col xs={4} className="border p-2">Item 4</Col>
                <Col xs={4} className="border p-2">Item 5</Col> */}
              
              <Col  xs={12} className="border p-2">
              <img className='favPhotos' src={item.photo} alt={item.name} />
              </Col>
              </Row>
              <Row>
              <Col  xs={12} className="border p-2">
              <Card.Title xs={12} id={item.item_id} onClick={goToItem}> {item.name}  </Card.Title>
              </Col>
              </Row>
              <Row>
              <div id='favButtons' >
              {/* <Col  xs={4} className="border p-2"> */}
              <img id="favHeart" src={smolHeart} onClick={() => removeFavorite(item.id)}/>
              {/* </Col> */}
              {/* <Col  xs={4} className="border p-2"></Col> */}
              {/* <Col  xs={4} className="border p-2">
              <img id="favBasket" onClick={foundForm} src={smolBasket} />
              </Col> */}
              </div>
              </Row>
              </Card.Body>
              </Card>
              </Container>
              <br />
            </div>
          );
        })}
      </section>
      <Button id='button' variant="dark" onClick={goHome} >Back</Button>
    </div>
    </>
  )
};

export default Favorites;
