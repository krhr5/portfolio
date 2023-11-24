import React from 'react'
import { bgGradient2 } from '../assets'
import styles from '../styles'
import GradientHeading from './GradientHeading'

const About = () => {
  return (
    <div id='about' className=''>
        <img className='w-full absolute h-[100vh] object-fill scale-x-[-1] opacity-90 dark:opacity-100' src={bgGradient2}/>
        <div className='w-full relative h-[100vh] bg-neutral-50/80 dark:bg-neutral-950/80'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                <h1 className={`${styles.headingMain} font-receipt`}>About</h1>
                <p className='text-neutral-700 dark:text-neutral-300 md:px-10 p-4 mx-2 mt-6 md:max-w-md max-w-sm border-2 text-left border-neutral-400/70 dark:border-neutral-500/50 rounded-xl'>I'm Kiran, a freelance junior web developer and graphic designer based out of Canada. I'm currently focused on building my frontend design skills, but have also started learning backend code in order to accomplish my goal of becoming a full-stack programmer. Another passion of mine is cryptocurrency & Web3. I have a strong foundational understanding of blockchain technologies and am always expanding my knowledge in the field.</p>
            </div>
        </div>
    </div>
  )
}

export default About