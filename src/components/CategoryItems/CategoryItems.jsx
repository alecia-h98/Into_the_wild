import React, { useEffect } from "react";
import useStore from "../../zustand/store";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './CategoryItems.css';

function CategoriesLists() {

      //This page shows a list of all of the items within the selected category

  const categoryItems = useStore((state) => state.categoryItems);
  const fetchCategoryItems = useStore(state => state.fetchCategoryItems);
  const params = useParams();
  const navigate = useNavigate();


  console.log(categoryItems);

//we had to use a useEffect here instead of on the app page because when the website
// renders nothing had been selected yet.
  useEffect(() => {
    console.log(`Getting category items with id ${params.categoryId}`)
    fetchCategoryItems(params.categoryId)
  }, [params.categoryId]); // only run after first render and if params.categoryId changes

//handleClick to move to a specific 
  const handleClick = (event) => {
    const itemId = event.target.id;
    navigate(`/items/${itemId}`)
  }


  return (
    <div>
      <h3>Specific category List</h3>
      <section className="item">
        {categoryItems?.map((item) => {
          return (
            <div key={item.id} id={item.id} >
                <img className="tabPhoto" src={item.photo} alt="plant photo" />
                <p>
                <b id={item.itemId} onClick={handleClick}>{item.name}</b>
                {/* update the below image to show the item's photo, resize once it shows */}
              </p>
              <br />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default CategoriesLists;
