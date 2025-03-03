import React from "react"
import useStore from "../../zustand/store";
import { useState } from "react";
import UploadWidget from './UploadWidget';

function FoundForm() {
  const [dateInput, setDateInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  //const photo input?

  const addItem = useStore((store) => store.addItem);


  const formHandler = (event) => {
    event.preventDefault();
    
    const itemToAdd = {
        date: dateInput,
        location: locationInput,
        description: descriptionInput,
        // photo: photoInput
    }

    addItem(itemToAdd);

    setDateInput('');
    setLocationInput('');
    setDescriptionInput('');
    // setPhotoInput('');

  };

  

  return (
    <div>
      <h3>Welcome to the found form!</h3>
      <section>
        <form id="form" onSubmit={formHandler}>

          {/* found date */}
          <input type="text" placeholder="Found date" value={dateInput}  onChange={(e) => setDateInput(e.target.value)}/>

          {/* location */}
          <input type="text" placeholder="Location found" value={locationInput}  onChange={(e) => setLocationInput(e.target.value)}/>

          {/* Description/journal entry */}
          <input type="text" placeholder="Description" value={descriptionInput}  onChange={(e) => setDescriptionInput(e.target.value)}/>

          {/* Photo input */}
          <UploadWidget />
          {/* <input type="img" value={photoInput}  onChange={(e) => setPhotoInput(e.target.value)}/> */}
          <br />
          <button type='submit' >Submit</button>
        </form>
      </section>
    </div>
  )
};

export default FoundForm;
