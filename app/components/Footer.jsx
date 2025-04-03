import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode, setIsDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={ isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-3'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={ isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail' className='w-6' />
            benagbannon@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-b-gray-400 mx-[10%] mt-12 py-6'>
        <p> &copy; 2025 Ben Ephraïm W. Tout droits réservés. </p>
        <ul className='flex items-center gap-20 justify-center mt-4 sm:mt-0'>
            <li><a href="https://github.com/Tedel12">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/ben-ephraim-agbannon-948819311/">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/declan_3.5?igsh=YzljYTk1ODg3Zg==">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
