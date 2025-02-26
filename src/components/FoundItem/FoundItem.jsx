import React from "react"
import useStore from "../../zustand/store";

function FoundItem({item}) {
    const foundItems = useStore((state) => state.foundItems);

    console.log(item);
  return (
    <div>
        <section className='item'>
            {foundItems?.map((item) => {
                return(
                    <div key={item.id} id={item.id}>
                    <h1>{item.name}</h1>
                    <img src={item.photo} alt={item.id}/>
                    <p>Found on: {item.found_date}</p>
                    <p>at: {item.location}</p>
                    <p>{item.description}</p>
                    </div>
                )
            })}
        </section>

    </div>
  )
};

export default FoundItem;
