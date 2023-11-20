import React from 'react'

const ExperienceItem = ({year, title, duration, credentials, place, details,}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-neutral-700 dark:border-neutral-300'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-neutral-600 dark:bg-neutral-300 rounded-full mt-1.5 -left-1.5 border-white' />
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block text-sm px-2 py-1 font-normal text-neutral-50 bg-neutral-700 dark:bg-neutral-600 rounded-md font-vt'>{year}</span>
          <span className='text-lg text-neutral-700 dark:text-neutral-200'>{title}</span>
          <span className='my-1 text-sm font-normal leading-none text-neutral-600 dark:text-neutral-400 font-vt'>{duration}</span>
          <span className='inline-block px-1 py-0.5 text-[0.6rem] text-neutral-700 bg-yellow-300 rounded-md'>{credentials}</span>
        </p>
        <p className='my-1 text-md text-neutral-600 dark:text-neutral-300 py-2 font-karma'>{place}</p>
        <p className='my-2 text-base leading-5 tracking-wide text-neutral-600 dark:text-neutral-400'>{details}</p>
      </li>
    </ol>
  )
}

export default ExperienceItem