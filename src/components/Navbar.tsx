//import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { assets} from "../assets/assets";
//import { useEffect, useState } from "react";

const Navbar = () => {

  return (
    <div className="w-full h-20 flex items-center justify-between font-medium" >
      <div className="flex items-center w-50 h-"> 
      <Link to='/' className=" text-2xl font-semibold flex items-center space-x-3"><img className="h-40 flex pb-5 w-auto" src={assets.logo1} alt=""/><span className="text-[#326f2e]">MBOHO ANAM</span></Link>
       </div>
       {/*Navbar Items*/}
      <ul className="hidden sm:flex gap-4 items-center justify-center ">
        
        <NavLink to='/' className='flex flex-col items-center gap-1 group'>
          <p className="text-[#326f2e] hover:text-orange">Home</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700" hidden />
        </NavLink>          
        
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p className="text-[#326f2e] hover:text-orange">About</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700" hidden/>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p className="text-[#2f7a29] hover:text-orange">Contact</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700" hidden/>
        </NavLink>
        <div className="relative group">
          <NavLink to='/members' className='flex flex-col items-center gap-1'>
          <p className="text-[#326f2e] hover:text-orange">Members</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700" hidden/>
          </NavLink>
          <div className="group-hover:block hidden absolute dropdown-menu left-[-15px] pt-4">
            <div className="flex items-center flex-col gap-3 w-40 py-3 px-5 bg-[#115a1ed7] text-white rounded border-t-4 border-t-orange" >
              <Link to="/executive" className="cursor-pointer hover:text-orange">Executives</Link>
              <Link to="/sponsors" className="cursor-pointer hover:text-orange">Sponsors</Link>
              <Link to="/home3" className="cursor-pointer hover:text-orange">Submenu 3</Link>
            </div>
          </div>
        </div>
        <div className="relative group">
          <NavLink to='/members' className='flex flex-col items-center gap-1'>
          <p className="text-[#326f2e] hover:text-orange">Media</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700" hidden/>
          </NavLink>
          <div className="group-hover:block hidden absolute dropdown-menu left-[-15px] pt-4">
            <div className="flex items-center flex-col gap-3 w-40 py-2 bg-[#115a1ed7] text-white rounded border-t-4 border-t-orange" >
              <Link to="/executive" className="cursor-pointer hover:text-orange">News</Link>
              <Link to="/sponsors" className="cursor-pointer hover:text-orange">Photos</Link>
              <Link to="/home3" className="cursor-pointer hover:text-orange">Videos</Link>
              <Link to="/home3" className="cursor-pointer hover:text-orange">Speeches</Link>
              <Link to="/home3" className="cursor-pointer hover:text-orange">Achievements</Link>
              <Link to="/home3" className="cursor-pointer hover:text-orange">Events</Link>
              <Link to="/home3" className="cursor-pointer hover:text-orange">Live Event</Link>
            </div>
          </div>
        </div>
                
        <div className="relative group">
          <NavLink to='/members' className='flex flex-col items-center gap-1'>
          <p className="text-[#326f2e] hover:text-orange">Students Forum</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700" hidden/>
          </NavLink>
          <div className="group-hover:block hidden absolute dropdown-menu left-[-15px] pt-4">
            <div className="flex items-center flex-col gap-3 w-40 py-3 px-5 bg-[#115a1ed7] text-white rounded border-t-4 border-t-orange" >
              <Link to="/executive" className="cursor-pointer hover:text-orange">Beneficiaries</Link>
              <Link to="/sponsors" className="cursor-pointer hover:text-orange"></Link>
              <Link to="/home3" className="cursor-pointer hover:text-orange">Submenu 3</Link>
            </div>
          </div>
        </div>
      </ul>

      <div className="flex items-center px-8">
        <div className="flex gap-5">
        <button className="bg-white border-2 border-[#326f2e] rounded-lg w-20 h-8 text-orange hover:bg-[#fsf7fa] hover:text-[#326f2e]"> Sign-In</button>
        <button className="bg-white border-2 border-[#326f2e] rounded-lg w-20 h-8 text-orange hover:bg-[#fsf7fa] hover:text-[#326f2e]"> Sign-Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar




// const [isMenuOpen, setIsMenuOpen] = useState(false);
// const [isSticky, setIsSticky] = useState(false);

// //setting of toggle menu
// const toggleMenu = ()=> {
//   setIsMenuOpen(!isMenuOpen)
// }

// useEffect(()=>{
//   const handlScroll = () => {
//     if(window.scrollY > 100){
//       setIsSticky(true);
//     }
//     else{
//       setIsSticky(false)
//     }
//   }
//   window.addEventListener('scroll', handlScroll);

//   return () =>{
//     window.addEventListener('scroll', handlScroll);
    
//   }
// });

// //navigations arrays
// const navItems =[
//   {link: 'Home', path:'home'},
//   {link: "About", path:"about"},
//   {link: 'Contact',path:'contact'},
//   {link: 'Login',path:'login'},
//   {link: 'Members',path:'members'},
//   {link: 'News',path:'news'},
//   {link: 'StudentForum',path:'studentforum'},
// ];


{/* <nav>
        <div>
          <a href="" className="text-2xl font-semibold flex items-center space-x-0"><img className="w-60 inline-block items-center" src={assets.logo} alt=""/> <span className="text-[#263238]">MBOHO ANAM</span></a>

          {/*nav items for large screen*/}
      //     <ul className="md:flex space-x-12 hidden">

      //     </ul>
      //   </div>
      // </nav> */}

