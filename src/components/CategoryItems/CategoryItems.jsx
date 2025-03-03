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

  const back = () => {
    navigate(`/items`)
  }



  const header = (par) => {
    let content;
    console.log('par', par);
    if (par==1){
      content = <h3>Other</h3>
      return content;
    } else if (par==2){
      content = <h3>Mushrooms</h3>
      return content;
    } else if (par==3){
      content = <h3>Berrys & Fruits</h3>
      return content;
    } else if (par==4){
      content = <h3>Herbs</h3>
      return content;
    } else {
      content = <h3>Nuts & Seeds</h3>
      return content;
    }
  }

  const head = header(params.categoryId);

  return (
    <>
    <div>{head}</div>
      <section className="item">
        {categoryItems?.map((item) => {
          return (
            <div key={item.id} id={item.id} >
                <img className="tabPhoto" src={item.photo} alt="plant photo" />
                <p
                id={item.itemId} onClick={handleClick}>{item.name}
                {/* update the below image to show the item's photo, resize once it shows */}
              </p>
              <br />
            </div>
          );
        })}
      </section>
      <button onClick={back} >Back</button>
    </>
  );

  //end of jsx function
}

export default CategoriesLists;
