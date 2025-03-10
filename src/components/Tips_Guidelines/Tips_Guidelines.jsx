import React from "react"
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import acornPhoto from '/images/acorns.jpg';
import './Tips_guidelines.css'

function Tips_Guidelines(props) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  }

  return (
    <div id='background' >
      <h1 id='T_GTitle' >Tips & Guidelines</h1>
      <ul>
        <li>Always be 1000% sure of the plant you're foraging before eating it. Get a foraging book that goes over not only the plant itself but also it's similar imposters.</li>
        <br/>
        <img src={acornPhoto} alt='Basket of mushrooms' id='acornPhoto' />
        <li>
          <b>Don't over harvest.</b> Take only what you need, leaving enough for the plant to regenerate and allowing other animals to continue hunting for these delectible treats.
        </li>
        <br/>
        <li>
          Check that you aren't foraging in a protected area. Although we have been doing it since the cavemen, foraging is illegal in certain areas. Please check into your area's guidelines beforehand.
          It is also seen as unsafe to do it in areas where pesticides or toxic fumes are near the 
        </li>
        <br/>
        <li>
           Fill in information
        </li>
        <br/>
        <li>
           Fill in information
        </li>
      </ul>
      <Button id='button' variant="dark" onClick={goHome} >Back</Button>
    </div>
  )
};

export default Tips_Guidelines;