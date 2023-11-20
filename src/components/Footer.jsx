import React from 'react'
import styles from '../styles'
import {LuArrowBigUp} from 'react-icons/lu'

const Footer = () => {
  return (
    <footer className='w-full fixed bottom-0 pt-3 pb-5 text-center'>
      <p className='text-sm text-neutral-600 dark:text-neutral-500 pt-2 font-vt'>
        &copy; {new Date().getFullYear()} Kiran Harrison. All rights reserved.
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