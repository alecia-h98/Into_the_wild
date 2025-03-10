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
    <section id="background" >
      <h3 id='hPTitle' ><b>Welcome Back {user.name}!</b></h3>
    
      <section >
        <div id='1stRow'>
        <div id='forgMM' className="grid place-items-center" onClick={moveForagable} >
            <img src={magnifying} id="magnMM" className="w-32 h-32 object-cover"/>
            <h5 className="text-lg font-semibold">Foragable Items</h5>
          </div>
          <div id='favMM' className="grid place-items-center" onClick={moveFavorites} >
            <img src={heart} id="heartMM" className="w-32 h-32 object-cover"/>
            <h5 className="text-lg font-semibold">Favorites</h5>
          </div>
          {/* <div id='foundMM' className="grid place-items-center" onClick={moveFoundItems} >
            <img src={basket} id="baskMM" className="w-32 h-32 object-cover"/>
            <h5 className="text-lg font-semibold">Found Items</h5>
          </div> */}
        </div>

      <br />

        <div id='2ndRow' >
        <div id='foundMM' className="grid place-items-center" onClick={moveFoundItems} >
            <img src={basket} id="baskMM" className="w-32 h-32 object-cover"/>
            <h5 className="text-lg font-semibold">Found Items</h5>
          </div>
          {/* <div id='forgMM' className="grid place-items-center" onClick={moveForagable} >
            <img src={magnifying} id="magnMM" className="w-32 h-32 object-cover"/>
            <h5 className="text-lg font-semibold">Foragable Items</h5>
          </div> */}

          <div id='TnGMM' className="grid place-items-center" onClick={moveTaG} >
            <img src={lightBulb} id="lightMM" className="w-32 h-32 object-cover"/>
            <h5 className="text-lg font-semibold">Tips & Rules</h5>
          </div>
        </div>
      </section>

      {/* <div className='findASnack' >
      <img />
      <h5>Find-a-snack</h5>
      </div>
      <br /> */}

      <Button id='button' variant="dark" onClick={logOut}>
        Log Out
      </Button>
      </section>
    </>
  );
}


export default HomePage;
