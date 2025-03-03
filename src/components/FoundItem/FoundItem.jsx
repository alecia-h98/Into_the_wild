import React from "react"
import useStore from "../../zustand/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './FoundItem.css';
import trash from '/images/bin.png';

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

    const goBack = () => {
        navigate('/found')
    }

  return (
    <div>
        <section>
            {foundItem?.map((item) => {
                    console.log(item);
                return(
                    <div
                    className='item' key={item.id} id={item.id}>
                    <h1>{item.name}</h1>
                    <img src={item.photo} alt={item.id}/>
                    <p><b>Found on:</b> {item.found_date}</p>
                    <br />
                    <p><b>at:</b> {item.location}</p>
                    <br />
                    <p><b>Your entry:</b> {item.description}</p>
                    <img onClick={handleClick} src={trash} />
                    </div>
                )
            })}
            <button onClick={goBack} >Back</button>
        </section>
    </div>
  )
};

export default FoundItem;
