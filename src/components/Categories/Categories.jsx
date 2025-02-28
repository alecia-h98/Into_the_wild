import React from "react"
import useStore from "../../zustand/store";
// import { useNavigate } from "react-router-dom";

function Categories() {
  const categories = useStore((state) => state.categories);
  // const navigate = useNavigate();

console.log(categories);
  // handleClick to nagivate them to the category list pages
  // const handleClick = (event) => {
  //   navigate(`/categories/`)

  // }

  //add to category button
  // onClick={handleClick}


  return (
    <div>
      <h1>Pick a category:</h1>
      <section className='buttons'>
        {categories?.map((category) => {
          return (
            <div key={category.id} id={category.id}>
              <button>{category.name}</button>
            </div>
          )
        })}
      </section>
    </div>
  )
};

export default Categories;
<h1>Category Page</h1>