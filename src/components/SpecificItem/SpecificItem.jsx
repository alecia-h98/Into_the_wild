import React from "react"
import useStore from "../../zustand/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './SpecificItem.css';
import basket from '/images/wicker-basket.png';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function SpecificItem() {

    //This page shows a selected plants full detail

    const plant = useStore((state) => state.plant);
    const fetchPlant = useStore((state) => state.fetchPlant);
    const params = useParams();
    const addFavorite = useStore((state) => state.addFavorite);
    const navigate = useNavigate();
    //this is to switch between my post and put function(allowing me to toggle with the heart)
    const [imageChanged, setImageChanged] = useState(false);
    
    const changeImage = () => {
      if (!imageChanged) {
        //after it is clicked it will update the state
        setImageChanged(true);
      }
    };

    
    useEffect(() => {
        console.log(`Getting plant by id ${params.itemId}`)
        fetchPlant(params.itemId)
    },[params.itemId]);

    const favClick = (itemId) => {
      console.log('itemId', itemId)
      addFavorite(params.itemId)
       if (!imageChanged) {
        //after it is clicked it will update the state
        setImageChanged(true);
      }
    };


    const formClick = (event) => {
      navigate(`/items/${params.itemId}/found`)
    };

    const renderTooltipB = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Mark as found
      </Tooltip>
    )

    const goBack = () => {
      navigate(-1);
    };

  return (
    <div id='background' >
      <section className='plant'>
        {plant?.map((plant) => {
          return (
            <div key={plant.id} id={plant.id}>
                <img className="photo" src={plant.photo} alt="plant photo"/>
                <h2 id='sTitle' ><b>{plant.name}</b></h2>
                <p id='sDataB' ><b id='sDescriptors'>Description:</b> {plant.description}</p>
                <br />
                <p id='sDataB'><b id='sDescriptors' >Most commonly found:</b> {plant.found}</p>
                <br />
                <p id='sDataB'><b id='sDescriptors'>Best season to forage:</b> {plant.season}</p>
                <br />
                <p id='sDataB'><b id='sDescriptors'>Common uses:</b> {plant.uses}</p>
                <br />
                <p id='sDataB'><b id='sDescriptors'>Nutritional values:</b> {plant.nutrition}</p>
                <br />
                <p id='sDataB'><b id='sDescriptors'>Shelf life:</b> {plant.shelf_life}</p>
                <br />
                <p id='sDataB'><b id='sDescriptors'>How to harvest:</b> {plant.harvesting}</p>
                <br />
                <p id='sDataB'><b id='sDescriptors'>Common imposters:</b> {plant.imposters}</p>
                <br />
                <div>
                
                  {/* <OverlayTrigger placement="top"  > */}
                  <img src={imageChanged ? "/images/big-filled-heart.png" : "/images/like.png"} alt="Toggle Image" onClick={favClick} />
                  {/* </OverlayTrigger> */}

                  <OverlayTrigger placement='top' overlay={renderTooltipB} >
                  <img id='sBasket' onClick={formClick} src={basket} />
                  </OverlayTrigger>
               
                  <br />

                  <Button id='button' variant="dark" onClick={goBack}>Back</Button>

                </div>
            </div>
          )
        })}
      </section>
    </div>
  )
};

export default SpecificItem;

//Below is a route for my images so I can import more into the database.
// "../../../public/images/"