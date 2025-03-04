import useStore from '../../zustand/store'
import { useNavigate } from 'react-router-dom';
import heart from '/images/like.png';
import basket from '/images/wicker-basket.png';
import magnifying from '/images/search.png';
import lightBulb from '/images/light-bulb.png';
import './HomePage.css';
import Button from 'react-bootstrap/Button';


function HomePage() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);
  const navigate = useNavigate();


  const moveFavorites = (event) => {
    navigate(`/favorites`)
  };

  const moveFoundItems = (event) => {
    navigate(`/found`)
  };

  const moveForagable = (event) => {
    navigate(`/items`)
  };

  const moveTaG = (event) => {
    navigate(`/tips_guidelines`)
  };

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-lg-4 text-white">Column 1</div>
         <div className="col-xs-12 col-sm-6 col-lg-4 text-white">Column 2</div>
           <div className="col-xs-12 col-xs-12 col-xs-12 bg-warning text-dark">Column 3</div>
             </div>
              </div>
      <h3>Welcome Back {user.name}!</h3>
      <section  >
      <div className='favorites' onClick={moveFavorites} >
      <img src={heart}/>
      <h5>Favorites</h5>
      </div>
      <br />
      <div className='foundItems' onClick={moveFoundItems} >
      <img src={basket} />
      <h5>Found Items</h5>
      </div>
      <br />
      <div className='foragable' onClick={moveForagable} >
      <img src={magnifying} />
      <h5>Foragable Items List</h5>
      </div>
      <br />
      {/* <div className='findASnack' >
      <img />
      <h5>Find-a-snack</h5>
      </div>
      <br /> */}
      <div className='T_a_G' onClick={moveTaG} >
      <img src={lightBulb} />
      <h5>Tips & Guidelines</h5>
      </div>
      </section>
      {/* <p>Your username is: {user .username}</p>
      <p>Your ID is: {user.id}</p> */}
      <Button variant="dark" onClick={logOut}>
        Log Out
      </Button>
    </>
  );
}


export default HomePage;
