import React from "react"
import useStore from "../../zustand/store";
// import FoundItem from "../FoundItem/FoundItem";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './FoundItemsList.css';

function FoundItemsList() {
  const foundItems = useStore((state) => state.foundItems);
  const navigate = useNavigate();


  //handleClick to nagivate them to the foundITEM detail page
  const handleClick = (event) => {
    const itemId = event.target.id;
    navigate(`/found/${itemId}`)
  }

  const goHome = () => {
    navigate('/');
  }

  return (
    <div id='background' >
      <h1>Found items</h1>
        {foundItems?.map((item) => {
          return (
            <div key={item.id} id={item.id}>
             <div id='foundItemSection' >
              <img id={item.id} onClick={handleClick} src={item.photo} alt={item.name} height={75} width={75}  />
              <h3 id='foundTitle' >{item.name}</h3>
              <br />
              </div>
            </div>
          );
        })}
      <Button id='button' variant="dark" onClick={goHome} >Back</Button>
    </div>
  )
};

export default FoundItemsList;
