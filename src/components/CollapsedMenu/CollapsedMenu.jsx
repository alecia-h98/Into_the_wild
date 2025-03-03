// import React, { useState } from 'react';
// import useStore from '../../zustand/store';
// import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// function CollapsedMenu() {
//     const user = useStore((store) => store.user);
//     const logOut = useStore((state) => state.logOut);
//     const location = useLocation();

    // Only show menu if NOT on the homepage ("/")
//   if (location.pathname === "/") {
//     return null; // Don't render the menu on the homepage
//   }

//     const [isOpen, setIsOpen] = useState(false);


//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };


//     return (
//         <div>
//             <button onClick={toggleMenu}>
//                 {isOpen ? 'Close' : 'Menu'}
//             </button>
//         {isOpen && (
//             <ul>
//      { // User is logged in and not on the homepage, render these links:
//         user.id && (
//           <>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/favorites">Favorites</NavLink>
//             </li>
//             <li>
//               <NavLink to="/found">Found Items</NavLink>
//             </li>
//             <li>
//               <NavLink to="/items">Categories</NavLink>
//             </li>
//             <li>
//               <NavLink to="/tips_guidelines">Tips & Guidelines</NavLink>
//             </li>
//             <li>
//               <p onClick={logOut} >Log Out</p>
//             </li>
//           </>
//         )
//       }

//             </ul>
//         )}
//         </div>
//     );
// }

// useState hook manages the isOpen state, which determines whether the menu is open or closed.

// toggleMenu function updates the isOpen state, toggling the menu's visibility.

// A button triggers the toggleMenu function when clicked.

// Conditional rendering (isOpen && ...) displays the menu items only when isOpen is true

// export default CollapsedMenu;