//import React from 'react'

const About = () => {
    return (
      <div>About</div>
    )
  }
  
  export default About 


// Copy code
// import { Link, NavLink } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { useState } from "react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null); // Track open dropdown

//   const handleDropdownToggle = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index); // Toggle specific dropdown
//   };

//   return (
//     <div className="w-full h-20 flex items-center justify-between font-medium">
//       <div className="flex items-center">
//         <Link to="/" className="text-2xl font-semibold flex items-center space-x-3">
//           <img className="h-10 w-auto pb-2" src={assets.logo1} alt="" />
//           <span className="text-[#326f2e]">MBOHO ANAM</span>
//         </Link>
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden sm:flex gap-4 items-center justify-center">
//         {/* Example with dropdown on Home */}
//         <div className="relative group">
//           <NavLink to="/" className="flex flex-col items-center gap-1">
//             <p className="text-[#326f2e] hover:text-orange">Home</p>
//           </NavLink>
//           <div className="absolute hidden group-hover:flex flex-col bg-white border border-gray-200 mt-2 shadow-lg rounded-md p-2 w-36">
//             <Link to="/home1" className="p-2 hover:bg-gray-100 rounded">Submenu 1</Link>
//             <Link to="/home2" className="p-2 hover:bg-gray-100 rounded">Submenu 2</Link>
//             <Link to="/home3" className="p-2 hover:bg-gray-100 rounded">Submenu 3</Link>
//           </div>
//         </div>
//         {/* Repeat for other dropdown items */}
//       </ul>

//       {/* Mobile Toggle Icon */}
//       <div className="sm:hidden flex items-center">
//         <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <ul className="flex flex-col items-center gap-4 sm:hidden absolute top-20 left-0 w-full bg-white shadow-lg p-4">
//           {/* Mobile dropdown for Home */}
//           <div className="flex flex-col items-center gap-1">
//             <NavLink to="/" onClick={() => handleDropdownToggle(0)} className="text-[#326f2e] hover:text-orange">
//               Home
//             </NavLink>
//             {dropdownOpen === 0 && (
//               <div className="flex flex-col bg-white border border-gray-200 shadow-lg rounded-md p-2 w-36">
//                 <Link to="/home1" className="p-2 hover:bg-gray-100 rounded">Submenu 1</Link>
//                 <Link to="/home2" className="p-2 hover:bg-gray-100 rounded">Submenu 2</Link>
//                 <Link to="/home3" className="p-2 hover:bg-gray-100 rounded">Submenu 3</Link>
//               </div>
//             )}
//           </div>
//           {/* Repeat for other mobile dropdowns */}
//         </ul>
//       )}

//       <div className="hidden sm:flex items-center px-8">
//         <div className="flex gap-5">
//           <button className="bg-white border-2 border-[#326f2e] rounded-lg w-20 h-8 text-orange hover:bg-[#2f7a29] hover:text-white">Sign-In</button>
//           <button className="bg-white border-2 border-[#326f2e] rounded-lg w-20 h-8 text-orange hover:bg-[#2f7a29] hover:text-white">Sign-Up</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;