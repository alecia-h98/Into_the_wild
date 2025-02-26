import React from "react"

function FoundItem({item}) {
    console.log(item);
  return (
    <div>
      <h1>Found it! {item.name}</h1>
    </div>
  )
};

export default FoundItem;
