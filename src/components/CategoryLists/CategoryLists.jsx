import React from "react"
import useStore from "../../zustand/store";

function CategoriesLists() {
  const categoryList = useStore((state) => state.categoryList);
console.log(categoryList);
  return (
    <div>
      <h3>Specific category List</h3>
      <section className='item'>
        {categoryList?.map((item) => {
          return (
            <div key={item.id} id={item.id}>
              <p><b>{item.name}</b></p>
            </div>
         );
        })}
      </section>
    </div>
  )
};

export default CategoriesLists;
