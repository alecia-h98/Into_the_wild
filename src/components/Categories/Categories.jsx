import React from "react"
import useStore from "../../zustand/store";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Categories.css';

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

  const goHome = () => {
    navigate('/');
  }

  


  return (
    <>
    <div id="background" >
      <h1 id='mcHead' >Pick a category:</h1>
      <p>By picking a category it will direct you to foragable items</p>
      <section className='cat'>
        {categories?.map((category) => {
          return (
            <div className="grid grid-cols-2 items-center gap-4" key={category.id} id={category.id}>
              {/* <img className="w-16 h-16 object-cover" src={category.photo} /> */}
              <Button className="text-lg font-semibold" variant="dark" id={category.id} onClick={handleClick}>
                {category.id ===1
                ? "Other"
                :category.id ===2
                ? "Mushrooms"
                :category.id ===3
                ? "Berrys & Fruits"
                :category.id ===4
                ? "Herbs"
                : "Nuts & Seeds"}
                </Button>
                <br />
            </div>
          )
        })}
      </section>
      <div id='backButton'>
      <Button id="button" variant="dark" onClick={goHome} >Back</Button>
    </div>
      </div>

    </>
  )
};

export default Categories;
<h1>Category Page</h1>