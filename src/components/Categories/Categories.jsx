import React from "react"
import useStore from "../../zustand/store";
import { useNavigate } from "react-router-dom";

function Categories(props) {
  const itemsList = useStore((state) => state.itemsList);
  const navigate = useNavigate();
console.log(itemsList);
  // handleClick to nagivate them to the category list pages
  const handleClick = (event) => {
    navigate(`/category/${item.id}`)

  }



  return (
    <div>
      <h1>Pick a category:</h1>
      <section className='buttons'>
        {itemsList?.map((item) => {
          return (
            <div key={item.id} id={item.id}>
              <button onClick={handleClick}>{item.category}</button>
              <img   />
            </div>
          );
        })}
      </section>
    </div>
  )
};

export default Categories;
<h1>Category Page</h1>