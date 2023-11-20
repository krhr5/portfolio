import React from 'react'
import styles from '../styles'

const PortfolioItem = ({img, title, language, link}) => {
  return (
    <div className={`relative flex items-center justify-center h-auto w-full shadow-lg shadow-neutral-600 dark:shadow-neutral-300 rounded-xl group hover:${styles.portGradient}`}>
        <img src={img} alt="/" className='rounded-xl object-fill group-hover:opacity-[0.05]'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
            <h3 className='text-neutral-800 font-[600] text-xl text-center font-karma pb-1'>{title}</h3>
            <p className='text-center text-sm pt-1'>{language}</p>
            <a href={link}>
              <p className='text-center underline pt-1 text-md hover:text-slate-600 text-neutral-800 hidden md:block'>{link}</p>
            </a>
        </div>
    </div>
  )
}

export default PortfolioItem