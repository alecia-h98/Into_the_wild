import React from "react"
import useStore from "../../zustand/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './FoundItem.css';

function FoundItem() {

    //This page shows found item details

    const fetchFoundItem = useStore((state) => state.fetchFoundItem);
    const fetchFoundItems = useStore((state) => state.fetchFoundItems);
    const foundItem = useStore((state) => state.foundItem);
    const params = useParams();
    const deleteFoundItem = useStore((state) => state.deleteFoundItem) ;
    const navigate = useNavigate();


    useEffect(() => {
        console.log(params.itemId);
        fetchFoundItem(params.foundId);

    },[fetchFoundItem]);

    const handleClick = (event) => {
        deleteFoundItem(params.foundId);
        navigate(`/found`)
        fetchFoundItems(params.foundId);
      }


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
                    <button onClick={handleClick}>Delete</button>
                    </div>
                )
            })}
        </section>
    </div>
  )
};

export default FoundItem;
