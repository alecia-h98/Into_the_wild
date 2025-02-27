import React from "react"
import useStore from "../../zustand/store";
import { useNavigate } from "react-router-dom";

function Favorites(props) {
  const favorites = useStore((state) => state.favorites);
  const navigate = useNavigate();

  //handleClick to bring the user back to the item's detail page
  const handleClick = (event) => {
    const category = event.target.parentElement.id;
    navigate(`/items/${category}`)
  }

  return (
    <div>
      <h1>Favorites List</h1>
      <section className='categories'>
        {favorites?.map((item) => {
          return (
            <div key={item.id} id={item.id}>
              <h3>{item.name} onClick={handleClick}</h3>
              <img   />
            </div>
          );
        })}
        
      </section>
    </div>
  )
};

export default Favorites;
