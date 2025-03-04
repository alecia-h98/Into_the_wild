import { NavLink } from 'react-router-dom';
import useStore from '../../zustand/store';
import './Nav.css';

//MAKE THIS PAGE THE DROP DOWN MENU

function Nav() {
  const user = useStore((store) => store.user);
  const logOut = useStore((state) => state.logOut);



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
          {/* <CollapsedMenu /> */}
          
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
            </li> 
          </>
        )
      }
      
      {/* Show these links regardless of auth status: */}
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}


export default Nav;
