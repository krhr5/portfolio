import React from 'react'
import styles from '../styles'

const Contact = () => {
  return (
    <div id='contact' className={`${styles.backgroundMain} pb-24`}>
      <h1 className={`${styles.headingMain} font-receipt`}>Contact</h1>
      <div className='m-auto md:max-w-4xl md:pl-24 px-8 p-4'>
        <form action='' method='POST' encType='multipart/form-data'>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 w-full py-2'>
            <div className='flex flex-col'>
              <label className='py-2 text-neutral-700 dark:text-neutral-200 font-karma'>Name</label>
              <input className={`${styles.inputFocus}`} type='text' name='name'/>
            </div>
            <div className='flex flex-col'>
              <label className='py-2 text-neutral-700 dark:text-neutral-200 font-karma'>Phone Number</label>
              <input className={`${styles.inputFocus}`} type='text' name='phone'/>
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='py-2 text-neutral-700 dark:text-neutral-200 font-karma'>Email</label>
            <input className={`${styles.inputFocus}`} type='email' name='name'/>
          </div>
          <div className='flex flex-col'>
            <label className='py-2 text-neutral-700 dark:text-neutral-200 font-karma'>Message</label>
            <textarea className={`${styles.inputFocus}`} rows='8' name='message'></textarea>
          </div>
          <button type='button' className={`mt-6 p-4 bg-neutral-300 rounded-lg w-[8em] hover:outline outline-neutral-500 dark:outline-neutral-300 font-karma bg-gradient-to-r from-yellow-300/80 to-rose-400/80`}>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact