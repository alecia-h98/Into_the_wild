import React from "react"
import useStore from "../../zustand/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './FoundItem.css';
import trash from '/images/bin.png';
import Button from 'react-bootstrap/Button';
import moment from "moment/moment";

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
    <div id='background' >
            {foundItem?.map((item) => {
                    console.log(item);
                return(
                    <div
                    className='item' key={item.id} id={item.id}>
                    <h1 id='fIHead' >{item.name}</h1>
                    <img className="foundPhoto" src={item.photo} alt={item.id}/>
                    <p><b>Found on:</b> {moment(item.found_date).format("MMM Do YY")}</p>
                    <br />
                    <p><b>Location found:</b> {item.location}</p>
                    <br />
                    <p><b>Your entry:</b> {item.description}</p>
                    <img id='delButton' onClick={handleClick} src={trash} />
                    </div>
                )
            })}
            <Button id='backButton' variant="dark" onClick={goBack} >Back</Button>
    </div>
  )
};

export default FoundItem;
