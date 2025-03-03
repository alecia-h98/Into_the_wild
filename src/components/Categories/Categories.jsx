import React from "react"
import useStore from "../../zustand/store";
import { useNavigate } from "react-router-dom";

function Categories() {

//This page shows all of the categories a user can choose from

  const categories = useStore((state) => state.categories);
  const navigate = useNavigate();

console.log(categories, "This is the all categories page");


  // handleClick to nagivate them to the category list pages
  const handleClick = (event) => {
    const categoryId = event.target.id;
    navigate(`/categories/${categoryId}`);
  }

 


  return (
    <div>
      <h1>Pick a category:</h1>
      <section className='buttons'>
        {categories?.map((category) => {
          return (
            <div key={category.id} id={category.id}>
              <img src={category.photo} />
              <button id={category.id} onClick={handleClick}>{category.name}</button>
            </div>
          )
        })}
      </section>
    </div>
  )
};

export default Categories;
<h1>Category Page</h1>