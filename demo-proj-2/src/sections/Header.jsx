import React from 'react'
import { FaXmark, FaBars } from 'react-icons/fa'
//import { motion } from 'framer-motion'
import { Link} from 'react-scroll'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [
    { link: 'Home', to: 'home' },
    { link: 'About', to: 'about' },
    { link: 'Services', to: 'services' },
    { link: 'Projects', to: 'projects' },
    { link: 'Contact', to: 'contact' },
  ];

  

  return (
    <nav className='w-full bg-white justify-between items-center gap-1 
    lg:px-16 px-4 sticky top-0 z-50 shadow-md'>
      <h1 className='text-black md:text-4xl text-3xl font-bold font-rubik 
      cursor-pointer'>
        Sally 
        <span>Construction And Projects</span>

      </h1>
    </nav>
  )
}

export default Header
