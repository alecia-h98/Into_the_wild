import { NavLink } from 'react-router-dom';
import useStore from '../../zustand/store';
import './Nav.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
//MAKE THIS PAGE THE DROP DOWN MENU

function Nav() {
  const user = useStore((store) => store.user);
  const logOut = useStore((state) => state.logOut);
  const navigate = useNavigate();

  const logOutFunction = () => {
    logOut();
    navigate('/login');
  }


  return (
    <nav>
      <ul>
      { // User is not logged in, render these links:
        !user.id && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Register</NavLink>
            </li>
          </>
        )
      }
      

       { // User is logged in, render these links:
        user.id && (
          <>
 <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
       Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <NavLink to="/">Home</NavLink></Dropdown.Item>
        <Dropdown.Item>
          <NavLink to="/favorites">Favorites</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink to="/found">Found Items</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink to="/items">Categories</NavLink>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavLink to="/tips_guidelines">Tips & Guidelines</NavLink>
        </Dropdown.Item>
        <Dropdown.Item onClick={logOutFunction}>
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
 
          {/* <CollapsedMenu />          
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/found">Found Items</NavLink>
            </li>
            <li>
              <NavLink to="/items">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/tips_guidelines">Tips & Guidelines</NavLink>
            </li>
            <li onClick={logOut} >
              Log Out
            </li> */}
          </>
        )
      } 
      
      {/* Show these links regardless of auth status: */}
        {/* <li>
          <NavLink to="/about">About</NavLink>
        </li> */}
      </ul>
    </nav> 
  );
}


export default Nav;
