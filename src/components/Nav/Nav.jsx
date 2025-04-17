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
          <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic" >
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink to="/login">Login</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/registration">Register</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/about">About</NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
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
        <Dropdown.Item>
        <NavLink to="/about">About</NavLink>
        </Dropdown.Item>
        {user?.is_admin && (
              <>
                <Dropdown.Item>
                  {/* Possibly add this below in the NavLink..? onClick={() => setExpanded(false)} */}
                  <NavLink className="nav-link" to="/admin">Admin</NavLink> 
                </Dropdown.Item>
                {/* <Dropdown.Item>
                  <NavLink to="/addPlant" >Add plant</NavLink>
                </Dropdown.Item> */}
              </>
        )}
        <Dropdown.Item onClick={logOutFunction}>
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          </>
        )
      } 
      
      {/* Show these links regardless of auth status: */}
        <li>
        </li>
      </ul>
    </nav> 
  );
}


export default Nav;
