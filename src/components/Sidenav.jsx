import React, {useState, createContext} from 'react'
import {LuMenu} from 'react-icons/lu'
import {AiOutlineHome, AiOutlineClose} from 'react-icons/ai'
import {FaProjectDiagram, FaRegHandshake} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFilePerson} from 'react-icons/bs'
import styles from '../styles'


const Sidenav = () => {
  const [nav, setNav] = useState(false)
    const handleNav = () => {
      setNav(!nav);
    }

const DesktopContext = createContext()

  
  return (
    <div>
      <button type='button' className='fixed top-2 right-2 p-1 z-40 md:hidden cursor-pointer bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-700 dark:hover:bg-neutral-600 hover:scale-105 ease-in duration-200 rounded-md'>
        <LuMenu onClick={handleNav} size={25} className='stroke-neutral-300'/>
      </button>
      {
        nav ? (
          <div className='fixed w-full h-screen bg-neutral-300/90 dark:bg-neutral-950/90 flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav} href='#home' className={`${styles.mobileNav}`}>
              <AiOutlineHome size={18}/>
              <span className='pl-4'>Home</span>
            </a>
            <a onClick={handleNav} href='#experience' className={`${styles.mobileNav}`}>
              <FaRegHandshake size={18}/>
              <span className='pl-4'>Experience</span>
            </a>
            <a onClick={handleNav} href='#portfolio' className={`${styles.mobileNav}`}>
              <FaProjectDiagram size={18}/>
              <span className='pl-4'>Portfolio</span>
            </a>
            <a onClick={handleNav} href='#about' className={`${styles.mobileNav}`}>
              <BsFilePerson size={18}/>
              <span className='pl-4'>About</span>
            </a>
            <a onClick={handleNav} href='#contact' className={`${styles.mobileNav}`}>
              <HiOutlineMail size={18}/>
              <span className='pl-4'>Contact</span>
            </a>
          </div>
        )
        : (
          ''
        )}
          <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
              <a href="#home" className={`${styles.desktopNav}`} aria-label='Home'>
                <AiOutlineHome size={20}/>
              </a>
              <a href="#experience" className={`${styles.desktopNav}`} aria-label='Experience'>
                <FaRegHandshake size={20}/>
              </a>
              <a href="#portfolio" className={`${styles.desktopNav}`} aria-label='Portfolio'>
                <FaProjectDiagram size={20}/>
              </a>
              <a href="#about" className={`${styles.desktopNav}`} aria-label='About'>
                <BsFilePerson size={20}/>
              </a>
              <a href="#contact" className={`${styles.desktopNav}`} aria-label='Contact'>
                <HiOutlineMail size={20}/>
              </a>
            </div>
          </div>
    </div>
  )
}

export default Sidenav