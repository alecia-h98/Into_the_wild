import React from "react"
import useStore from "../../zustand/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import './SpecificItem.css';

function SpecificItem() {

    //This page shows a selected plants full detail

    const plant = useStore((state) => state.plant);
    const fetchPlant = useStore((state) => state.fetchPlant);
    const params = useParams();

    useEffect(() => {
        console.log(`Getting plant by id ${params.itemId}`)
        fetchPlant(params.itemId)
    },[params.itemId]);

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