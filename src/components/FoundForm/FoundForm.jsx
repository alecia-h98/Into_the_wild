import React from "react"
import useStore from "../../zustand/store";
import { useState } from "react";
import UploadWidget from './UploadWidget';
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

function FoundForm() {
  const [dateInput, setDateInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [photoInput, setPhotoInput] = useState('');

  //----CLOUDINARY INFO----//

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dwqjkxlqe'
      }
    });

      // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('docs/result.info.public_id'); 

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));




  //----REGULAR FORM INFO----//

  const addItem = useStore((store) => store.addItem);


  const formHandler = (event) => {
    event.preventDefault();
    
    const newItem = {
        item_id: '',
        found_date: dateInput,
        location: locationInput,
        description: descriptionInput,
        //I believe this photo info is correct..?
        photo: photoInput,
        user_id: ''
    }
    
    //Below is the photo 
    //result.info.public_id

    addItem(newItem);

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
           {/* This line of code is supposed to show the user the photo they uploaded..still working out the kinks */}         
          <AdvancedImage cldImg={myImage} />

          <br />

          {/* This line of code renders the pop up widget tool to upload their photo to cloudinary */}
          <UploadWidget />

          {/* Check to see if this actually renders the info for the public_id.. This may need to be changed */}
          <input type="text" placeholder="uploaded img url" value={photoInput} onChange={(e) => setPhotoInput(result.info.public_id)} />

          <br />
          
          <button type='submit' >Submit</button>
        </form>
      </section>
    </div>
  )
};

export default FoundForm;
