import React from 'react'
import PortfolioItem from './PortfolioItem'
import styles from '../styles'
import { oneday, calmikaze } from '../assets/index'
import { DiHtml5, DiCss3, DiJsBadge, DiNpm, DiNodejsSmall, DiReact } from 'react-icons/di'
import { SiTailwindcss, SiVite, SiEthereum } from "react-icons/si";
 
const Portfolio = () => {
  return (
    <div id='portfolio' className={`${styles.backgroundMain} pt-2`}>
      <div className='md:max-w-xs max-w-[225px] mx-auto flex flex-col justify-center items-center rounded-lg bg-neutral-100 py-5'>
        <h1 className={`${styles.headingMain} font-receipt dark:text-neutral-600`}>Portfolio</h1>
        <p className='text-neutral-600 dark:text-neutral-600 text-center pb-2 md:px-24 px-16 md:max-w-2xl max-w-md font-karma'>
          ************************
        </p>
        <p className='text-neutral-600 dark:text-neutral-600 text-sm pb-2 px-8 max-w-[20rem] font-receipt'>
          Current personal projects and clients on the go. 
        </p>
        <p className='text-neutral-600 dark:text-neutral-600 text-center pb-2 md:px-24 px-16 md:max-w-2xl max-w-md font-karma'>
          ************************
        </p>
        <p className='text-4xl text-center pt-4 px-2 font-barcode bg-neutral-100 text-neutral-700'>PortfolioItems</p>
      </div>
      <div className='m-auto h-full flex flex-col justify-center items-center'>
        <p className='text-neutral-700 dark:text-neutral-300 py-12 mt-2'>Building with</p>
        <div className='flex flex-row mb-6'>
          <a className='languages cursor-pointer hover:scale-110 ease-in duration-200 hint--top hint--rounded' aria-label='HTML5'>
            <DiHtml5 size={25}  className='md:mx-4 xs:mx-1.5 mx-0.5 text-neutral-700 dark:text-neutral-300'/>
          </a>
          <a className='cursor-pointer hover:scale-110 ease-in duration-200 hint--top hint--rounded' aria-label='CSS3'>
            <DiCss3 size={25} className='md:mx-4 xs:mx-1.5 mx-0.5 text-neutral-700 dark:text-neutral-300'/>
          </a>
          <a className='cursor-pointer hover:scale-110 ease-in duration-200 hint--top hint--rounded' aria-label='JavaScript'>
            <DiJsBadge size={18} className='md:mx-4 xs:mx-1.5 mx-0.5 mt-[0.15rem] mr-1 text-neutral-700 dark:text-neutral-300'/>
          </a>
          <a className='cursor-pointer hover:scale-110 ease-in duration-200 hint--top hint--rounded' aria-label='Tailwind'>
            <SiTailwindcss size={25} className='md:mx-4 xs:mx-1.5 mx-0.5 text-neutral-700 dark:text-neutral-300'/>
          </a>
          <a className='cursor-pointer hover:scale-110 ease-in duration-200 hint--top hint--rounded' aria-label='Node.js'>
            <DiNodejsSmall size={26} className='md:mx-4 xs:mx-1.5 mx-0.5 pb-0.5 text-neutral-700 dark:text-neutral-300'/>
          </a>
          <a className='cursor-pointer hover:scale-110 ease-in duration-200 hint--top hint--rounded' aria-label='Vite'>
            <SiVite size={19} className='md:mx-4 xs:mx-1.5 mx-0.5 mt-0.5 text-neutral-700 dark:text-neutral-300'/>
          </a>
          <a className='cursor-pointer hover:scale-110 ease-in duration-200 hint--top hint--rounded' aria-label='React'>
            <DiReact size={25} className='md:mx-4 xs:mx-1.5 mx-0.5 text-neutral-700 dark:text-neutral-300'/>
          </a>
          <a className='cursor-pointer hover:scale-110 ease-in duration-200 hint--top hint--rounded' aria-label='NPM'>
            <DiNpm size={25} className='md:mx-4 xs:mx-1.5 mx-0.5 text-neutral-700 dark:text-neutral-300'/>
          </a>
          <a className='cursor-pointer hover:scale-110 ease-in duration-200 hint--top hint--rounded' aria-label='Ethereum'>
            <SiEthereum size={19} className='md:mx-4 xs:mx-1.5 mx-0.5 mt-0.5 text-neutral-700 dark:text-neutral-300'/>
          </a>
        </div>
      </div>
      <p className='md:block hidden text-center text-neutral-700 dark:text-neutral-300 text-md pt-8 pb-2'>* Hover over items to view details about each project!</p>
      <div className='grid md:grid-cols-2 gap-12 md:px-48 px-12 pb-16 pt-6'>
        <PortfolioItem img={oneday} title='One Day Creates' language={'Bootstrap, CSS, JavaScript'} link={'https://onedaycreates.com'}/>
          <p className='md:hidden text-center pt-1'>
            <a href="https://onedaycreates.com" className='underline text-lg hover:text-yellow-700 dark:hover:text-yellow-300 text-neutral-800 dark:text-neutral-300'>One Day Creates</a>
          </p>
        <PortfolioItem img={calmikaze} title='Calmikaze Design' language={'CSS, JavaScript'}/>
      </div>
    </div>
  )
}

export default Portfolio