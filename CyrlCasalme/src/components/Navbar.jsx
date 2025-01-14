// import { Link, UseLocation } from 'react-router-dom';
// import React, {useState} from 'react';

// function Navbar(){
//   const currentPage = UseLocation().pathname;
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);
//   return (
//     <>
//       <nav className="navbar">
//         <div className ="navbar-container">
//           <Link to ="/" className="navbar-logo">
//             CCASALME <img src="./assets/CCasalme.png" alt="CCasalme Logo" />
//           </Link>
//           <div className="menu-icon" onClick={handleClick}> </div>
//           <div className="menu-icon"> 
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className="nav-item">
//               <Link to ='/' className="nav-links" onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to ='/' className="nav-links" onClick={closeMobileMenu}>
//                 About Me
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to ='/' className="nav-links" onClick={closeMobileMenu}>
//                 Contact Me
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to ='/' className="nav-links" onClick={closeMobileMenu}>
//                 Portfolio
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to ='/' className="nav-links" onClick={closeMobileMenu}>
//                 Resume
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/AboutMe"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
