import React from "react"
import useStore from "../../zustand/store";
import { useNavigate } from "react-router-dom";

function Category(props) {
  const categories = useStore((state) => state.categories);
  const navigate = useNavigate();

  //handleClick to nagivate them to the category list pages
  const handleClick = (event) => {
    const category = event.target.parentElement.id;
    navigate(`/item/${category}`)
  }



  return (
    <div>
      <h1>Pick a category:</h1>
      <section className='categories'>
        {categories?.map((item) => {
          return (
            <div key={item.id} id={item.id}>
              <h3>{item.category} onClick={handleClick}</h3>
              <img   />
            </div>
          );
        })}
        
      </section>
    </div>
  )
};

export default Category;
<h1>Category Page</h1>