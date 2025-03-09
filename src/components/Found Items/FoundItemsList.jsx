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

//img info
//height={75} width={75}

  return (
    <div id='background' >
      <h1>Found items</h1>
      <section className="item">
        {foundItems?.map((item) => {
          return (
            <div id='foundItemSection'>
            <div key={item.id} id={item.id} onClick={handleClick}>
              <img className="tabPhoto" id={item.id}  src={item.photo} alt={item.name}   />
              <h4 style={{display: 'inline-block'}}>{item.name}</h4>
              <br />
              </div>
            </div>
          );
        })}
      <Button id='button' variant="dark" onClick={goHome} >Back</Button>
      </section>
    </div>
  )
};

export default FoundItemsList;
