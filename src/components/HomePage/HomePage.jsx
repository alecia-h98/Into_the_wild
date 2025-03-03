import useStore from '../../zustand/store'
import { useNavigate } from 'react-router-dom';
import heart from '/images/like.png';
import basket from '/images/wicker-basket.png';
import magnifying from '/images/search.png';
import lightBulb from '/images/light-bulb.png';
import './HomePage.css';


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
      <h2>Main Menu</h2>
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
      <button onClick={logOut}>
        Log Out
      </button>
    </>
  );
}


export default HomePage;
