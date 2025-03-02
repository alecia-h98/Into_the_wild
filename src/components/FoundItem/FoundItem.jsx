import React from "react"
import useStore from "../../zustand/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import './FoundItem.css';

function FoundItem() {

    //This page shows found item details

    const fetchFoundItem = useStore((state) => state.fetchFoundItem);
    const foundItem = useStore((state) => state.foundItem);
    const params = useParams();

    useEffect(() => {
        console.log(params.itemId);
        fetchFoundItem(params.foundId);
    },[fetchFoundItem]);



  return (
    <div>
        <section className='item'>
            {foundItem?.map((item) => {
                    console.log(item);
                return(
                    <div key={item.id} id={item.id}>
                    <img src={item.photo} alt={item.id}/>
                    <h1>{item.name}</h1>
                    <p><b>Found on:</b> {item.found_date}</p>
                    <br />
                    <p><b>at:</b> {item.location}</p>
                    <br />
                    <p><b>Your entry:</b> {item.description}</p>
                    </div>
                )
            })}
        </section>
    </div>
  )
};

export default FoundItem;
