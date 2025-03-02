import React from "react"
import useStore from "../../zustand/store";
// import FoundItem from "../FoundItem/FoundItem";
import { useNavigate } from "react-router-dom";

function FoundItemsList() {
  const foundItems = useStore((state) => state.foundItems);
  const navigate = useNavigate();


  //handleClick to nagivate them to the foundITEM detail page
  const handleClick = (event) => {
    const itemId = event.target.id;
    navigate(`/found/${itemId}`)
  }

  return (
    <div>
      <h1>Found items list</h1>
      <section className='item'>
        {foundItems?.map((item) => {
          return (
            <div key={item.id} id={item.id}>
              <h3>{item.name}</h3>
              <img id={item.id} onClick={handleClick} src={item.photo} alt={item.name} />
              <br />
            </div>
          );
        })}
      </section>
    </div>
  )
};

export default FoundItemsList;
