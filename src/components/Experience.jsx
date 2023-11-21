import React from 'react'
import ExperienceItem from './ExperienceItem'
import styles from '../styles'

const experienceData = [
  {
      year:'Jan. ' + 2022 + '-' + 23,
      title: 'Web Development',
      duration: '1 year +',
      credentials: 'Certificate',
      place: 'Saskatchewan Polytechnic',
      details: 'Graduated with a certificate in the Website Design and Development program. Learned and became well-versed in the fundamental concepts of front-end web design, building a solid understanding of HTML, CSS and JavaScript.',
  },
  {
    year: 'Dec. ' + 2022 + ' - ' + 'June ' + 2023,
    title: 'First Project',
    duration: '6 months',
    credentials: 'Client',
    place: 'One Day Creates',
    details: 'Redesigned, developed and deployed a static site for a Toronto based mural and design company, One Day Creates. Implemented my experience in front-end design, with frameworks such as Bootstrap, Animate.css and Hover.css. Focused on practicing SEO principles and maintaing website security.',
  },
  {
    year: 'Jan. ' + 2023 + '-' + 'Present',
    title: 'Online Learning',
    duration: '1 year +',
    credentials: 'Self-taught',
    place: 'Internet & personal resources',
    details: 'Currently furthering my knowledge and expanding my skills in front-end web design, learning TailwindCSS, React JS, Vite and other frameworks. Building a good grasp of package management, while also expanding my knowledge of deployment and website security. The next goal is to start implementing backend code and server side projects.',
  },
]

const Experience = () => {
  return (
    <div id='experience' className={`${styles.backgroundMain}`}>
      <div className='md:max-w-xs max-w-[225px] mx-auto flex flex-col justify-center items-center rounded-lg bg-neutral-100 py-5'>
        <h1 className={`${styles.headingMain} font-receipt dark:text-neutral-600`}>Experience</h1>
        <p className='text-neutral-600 dark:text-neutral-600 text-center pb-2 md:px-24 px-16 md:max-w-2xl max-w-md font-karma'>
          ************************
        </p>
        <p className='text-neutral-600 dark:text-neutral-600 text-sm text-center pb-2 px-16 max-w-[20rem] font-receipt'>
          A small timeline of my learning journey as a web developer. 
        </p>
        <p className='text-neutral-600 dark:text-neutral-600 text-center pb-2 md:px-24 px-16 md:max-w-2xl max-w-md font-karma'>
          ************************
        </p>
        <p className='text-4xl text-center pt-4 px-2 font-barcode bg-neutral-100 text-neutral-700'>LearnTimeline</p>
      </div>
      <div className='sm:w-[768px] m-auto sm:pl-40 sm:px-36 xs:px-12 px-8 py-12 flex flex-col'>
        {experienceData.map((item, idx) => (
          <ExperienceItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration}
            credentials={item.credentials}
            place={item.place} 
            details={item.details} 
          />
        ))}
      </div>
    </div>
  )
}

export default Experience