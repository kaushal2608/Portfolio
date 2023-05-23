import React, { useState } from 'react'
import {HiMenuAlt4, HiX} from 'react-icons/hi';
//import  { motion } from 'framer-motion';


import './Navbar.scss'
import {images} from '../../constants'

const Navbar = () => {
const [toggle, settoggle] = useState(false)

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
        </div>
        <ul className='app__navbar-links'>
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
             <li className='app__flex p-text' key={`link-${item}`}>
               <div/>
               <a href={`#${item}`}>{item}</a>   
             </li>
          ))}
        </ul>
        <div className='app__navbar-menu'>
             <HiMenuAlt4 onClick={() => settoggle(true)}/>

             {toggle &&(
                 <div>
                   <HiX  onClick={() => settoggle(false)} />
                   <ul>
                   {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li  key={item}>
                       
                         <a href={`#${item}`} onClick={() => settoggle(false)}>{item}</a>   
                    </li>
                     ))}
                     </ul>
                 </div>
             )}
        </div>
    </nav>
  )
}

export default Navbar
