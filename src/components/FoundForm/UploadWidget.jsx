import React from "react"
import { useEffect } from "react";
import { useRef } from "react";


const UploadWidget = ({setPhotoInput}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dwqjkxlqe',
      uploadPreset: 'my_first_preset',
      folder: 'uploads_ITW'
    }, function(error, result) {
      if (!error && result && result.event === "success") {
        console.log(result);
        setPhotoInput(result.info.secure_url);
        console.log('Done! Here is the public ID: ', result.info.public_id);
      }
    });
  }, []);

  return (
    <button type='button' onClick={() => widgetRef.current.open()}>
      Upload
    </button>
  );
};



export default UploadWidget;
