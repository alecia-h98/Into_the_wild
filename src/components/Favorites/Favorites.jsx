import React from "react"
import useStore from "../../zustand/store";
// import { useNavigate } from "react-router-dom";

function Favorites() {
  const favorites = useStore((state) => state.favorites);
  const switchFav = useStore((state) => state.switchFav);
  // const navigate = useNavigate();
  console.log(favorites);

  //---WTF IS THIS BELOW??---//
  // handleClick to bring the user back to the item's detail page
  // const handleClick = (event) => {
  //   const category = event.target.parentElement.id;
  //   navigate(`/items/${category}`)
  // }

  const unfavorite = (event) => {
    const favId = event.target.id;
    console.log(favId);
    // switchFav(favId);
  }


  //onClick={handleClick}

  return (
    <div>
      <h1>Favorites List</h1>
      <section className='favorites'>
        {favorites?.map((item) => {
          return (
            <div key={item.id} id={item.id}>
              <h3 id={item.id}> {item.name} </h3>
              <img  src={item.photo} alt={item.name} />
              <button onClick={unfavorite} >Unfavorite</button>
              <br />
            </div>
          );
        })}
        
      </section>
    </div>
  )
};

export default Favorites;
