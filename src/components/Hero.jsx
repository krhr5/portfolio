import React from 'react'
import { bgGradient } from '../assets'
import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaGithubAlt } from 'react-icons/fa'
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from 'react-icons/fa6'
import GradientHeading from './GradientHeading'
import styles from '../styles'

const Hero = () => {
  return (
    <div id='home' className=''>
        <img className='w-full lg:h-[90vh] h-[100vh] object-fill scale-x-[-1] opacity-90 dark:opacity-100' src={bgGradient}/>
        <div className='w-full lg:h-[90vh] h-[100vh] absolute top-0 left-0 bg-neutral-50/80 dark:bg-neutral-950/80'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                <GradientHeading gradient={`${styles.ypGradient}`}>Kiran Harrison</GradientHeading>
                <h2 className='sm:text-3xl text-2xl text-neutral-800 dark:text-neutral-50 pt-3 font-vt'>
                    <TypeAnimation
                    sequence={[
                        'Web Developer',
                        2000, // wait 2s before replacing with next
                        'Frontend/Graphic Designer',
                        2000,
                        'Artist',
                        2000,
                        'Web3 Enthusiast',
                        2000,
                    ]}
                    wrapper="span"
                    speed={20}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                </h2>
                <div className='flex flex-row pt-4'>
                    <a href="https://instagram.com/kh5tech" target='_blank' rel='noreferrer'><FaInstagram size={20} className={`${styles.socialHover}`}/></a>
                    <a href="https://twitter.com/k7x1r4n" target='_blank' rel='noreferrer'><FaXTwitter size={20} className={`${styles.socialHover}`}/></a>
                    <a href='https://github.com/krhr5' target='_blank' rel='noreferrer'><FaGithubAlt size={20} className={`${styles.socialHover}`}/></a> 
                    <a href="https://www.linkedin.com/in/kiran-harrison" target='_blank' rel='noreferrer'><SiLinkedin size={18} className={`${styles.socialHover}`}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero