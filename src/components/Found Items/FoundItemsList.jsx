import React from "react"
import useStore from "../../zustand/store";
import FoundItem from "../FoundItem/FoundItem";

function FoundItemsList() {
  const foundItems = useStore((state) => state.foundItems);

  return (
    <div>
      <h1>Found items</h1>
      {foundItems?.map((item) => <FoundItem key={item.id} item={item}/>)}
    </div>
  )
};

export default FoundItemsList;
