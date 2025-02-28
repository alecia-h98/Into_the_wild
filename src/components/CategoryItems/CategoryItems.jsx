import React, { useEffect } from "react";
import useStore from "../../zustand/store";
import { useParams } from "react-router-dom";

function CategoriesLists() {
  const categoryItems = useStore((state) => state.categoryItems);
  const fetchCategoryItems = useStore(state => state.fetchCategoryItems);
  const params = useParams();

  console.log(categoryItems);

  useEffect(() => {
    console.log(`Getting category items with id ${params.categoryId}`)
    fetchCategoryItems(params.categoryId)
  }, [params.categoryId]); // only run after first render and if params.categoryId changes

  return (
    <div>
      <h3>Specific category List</h3>
      <section className="item">
        {categoryItems?.map((item) => {
          return (
            <div key={item.id} id={item.id}>
              <p>
                <b>{item.name}</b>
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default CategoriesLists;
