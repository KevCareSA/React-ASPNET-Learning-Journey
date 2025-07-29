import React from 'react'
import { FaXmark,FaBars } from 'react-icons/fa6'
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
    <nav className='w-full flex bg-white justify-between items-center gap-1 
    lg:px-16 px-6 py-4 sticky top-0 z-50'>
      <h1 className='text-black md:text-3xl text-2xl font-bold font-rubik'>
        Sally<span className='text-yellow-500 italic'> Construction And Projects</span> 
      </h1>

      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {navItems.map(({link, path}) => (
          <Link key={path} className='text-black uppercase font-bold 
          cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]'
          to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>
      
      <button className='bg-yellow-500 hover:bg-black hover:text-white
      text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105 
        transition-transform duration-300 cursor-pointer md:flex hidden'>
        REACH US
      </button>

      {/* Mobile Menu */}
      <div className='flex justify-between items-center lg:hidden mt-3' 
      onClick={toggleMenu}>
        <div>
          {isMenuOpen ? (
            <FaXmark className='text-yellow-500 text-3xl cursor-pointer' />
          ) : (
            <FaBars className='text-yellow-500 text-3xl cursor-pointer' />
          )}
        </div>
      </div> 

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit 
        bg-yellow-500 p-4 absolute top-[70px] left-0 z-50 flex-col 
          items-center gap-4`} onClick={closeMenu}>
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
            {navItems.map(({link, path}) => (
              <Link key={path} className='text-black uppercase font-semibold 
              cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white
              w-full text-center'
              to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
            ))}
          </ul>

      </div>
     
    </nav>
  )
}

export default Header
