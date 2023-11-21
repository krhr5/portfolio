import React from 'react'
import styles from '../styles'
import {LuArrowBigUp} from 'react-icons/lu'

const Footer = () => {
  return (
    <footer className='w-full fixed bottom-0 xs:pt-3 pt-4 pb-5 text-center'>
      <p className='xs:text-sm text-xs text-neutral-600 dark:text-neutral-500 xs:pt-2 xs:mb-0 mb-1 font-vt'>
        &copy; {new Date().getFullYear()} Kiran Harrison
      </p>
      <button type='button' className='fixed bottom-[1.1rem] right-3 p-1 cursor-pointer bg-neutral-800 hover:bg-neutral-700 rounded-md'>
        <a href="#home">
          <LuArrowBigUp size={20} className='stroke-neutral-50'/>
        </a>
      </button>
    </footer>
  )
}

export default Footer