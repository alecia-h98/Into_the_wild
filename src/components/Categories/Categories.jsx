import React from "react"
import useStore from "../../zustand/store";
import { useNavigate } from "react-router-dom";

function Categories(props) {
  const itemsList = useStore((state) => state.itemsList);
  const navigate = useNavigate();
console.log(itemsList);
  // handleClick to nagivate them to the category list pages
  const handleClick = (event) => {
  itemsList.map((item) => {
    navigate(`/items/${item.category}`)
  })

  }



  return (
    <div>
      <h1>Pick a category:</h1>
      <section className='buttons'>
        {/* {itemsList?.map((item) => {
          return (
            <div key={item.id} id={item.id}> */}
              <button onClick={handleClick}>Mushrooms</button>
              <button onClick={handleClick}>Berries & Fruits</button>
              <button onClick={handleClick}>Nuts & Seeds</button>
              <button onClick={handleClick}>Herbs</button>
              <button onClick={handleClick}>Other</button>
              {/* <h3>{item.category} </h3>
              <img   />
            </div>
          );
        })} */}
      </section>
    </div>
  )
};

export default Categories;
<h1>Category Page</h1>