import React from "react"
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'

function Tips_Guidelines(props) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  }

  return (
    <div>
      <h1>Tips & Guidelines</h1>
      <ul>
        <li>Always be 1000% sure of the plant you're foraging before eating it. Get a foraging book that goes over not only the plant itself but also it's similar imposters.</li>
        <br/>
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
           Random bologna
        </li>
        <br/>
        <li>
           Random bologna
        </li>
      </ul>
      <Button variant="dark" onClick={goHome} >Back</Button>
    </div>
  )
};

export default Tips_Guidelines;