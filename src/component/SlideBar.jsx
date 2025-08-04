// import React from 'react';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar bg-dark text-white p-3 ${isOpen ? 'open' : 'collapsed'}`}>
      <h4>Menu</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;











// import { NavLink } from 'react-router-dom';

// const Sidebar = () => (
//   <div className="bg-dark text-white p-3 sidebar" style={{ minWidth: '200px', minHeight: '100vh' }}>
//     <h4>Menu</h4>
//     <ul className="nav flex-column">
//       <li className="nav-item">
//         <NavLink className="nav-link text-white" to="/">Home</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link text-white" to="/about">About</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
//       </li>
//     </ul>
//   </div>
// );

// export default Sidebar;
