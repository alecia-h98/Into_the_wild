import React from "react"
import useStore from "../../zustand/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './SpecificItem.css';
import basket from '/images/wicker-basket.png';
import { useState } from "react";

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
      alert('Item has been favorited!')
      if (!imageChanged) {
        //after it is clicked it will update the state
        setImageChanged(true);
      }
    };


    const formClick = (event) => {
      navigate(`/items/${params.itemId}/found`)
    };

    const goBack = () => {
      navigate(-1);
    };

  return (
    <div>
      <h3>Show specific item here</h3>
      <section className='plant'>
        {plant?.map((plant) => {
          return (
            <div key={plant.id} id={plant.id}>
                <img className="photo" src={plant.photo} alt="plant photo"/>
                <h2>{plant.name}</h2>
                <p><b>Description:</b> {plant.description}</p>
                <br />
                <p><b>Most commonly found:</b> {plant.found}</p>
                <br />
                <p><b>Best season to forage:</b> {plant.season}</p>
                <br />
                <p><b>Common uses:</b> {plant.uses}</p>
                <br />
                <p><b>Nutritional values:</b> {plant.nutrition}</p>
                <br />
                <p><b>Shelf life:</b> {plant.shelf_life}</p>
                <br />
                <p><b>How to harvest:</b> {plant.harvesting}</p>
                <br />
                <p><b>Common imposters:</b> {plant.imposters}</p>
                <div>
                  <img src={imageChanged ? "/images/big-filled-heart.png" : "/images/like.png"} alt="Toggle Image" onClick={favClick} />
                  <img onClick={formClick} src={basket} />
                  <button onClick={goBack}>Back</button>
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