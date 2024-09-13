import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div className='screen-container'>
      <footer className=' text-white border rounded-3xl '>
        <div className=' md:flex items-center justify-around  md:h-[449px] px-[30px]'>
      <ul className='py-[50px]'>
        <li className='text-[#868585]'>Phone</li>
        <li>9656300567</li>
        <li className='pb-[24px]'>9037206760</li>
        <li className='text-[#868585]'>Email</li>
        <li className='pb-[47.67px]'>Admissions@co.in</li>
        <li className='text-[#868585]'>Address</li>
        <li>2nd Floor, Cental Arcade. <br /> Cherooty Road,<br /> Calicut - 673032</li>
      </ul>

        <ul className='cursor-pointer'>
            <li className='pb-[20px] text-[#01F19B]'>Explore</li>
            <li className='pb-[20px]'>Home</li>
            <li className='pb-[20px]'>About us</li>
            <li className='pb-[20px]'>Courses</li>
            <li className='pb-[20px]'>Gallery</li>
            <li className='pb-[20px]'>Contact us</li>
            <li className='pb-[20px]'>Privacy Policy</li>
        </ul>

       <ul className='mt-4 cursor-pointer'>
        <li className='pb-[20px] text-lg text-[#01F19B]'>Courses</li>
        <li className='pb-[20px] text-lg'>Full Stack Developer and Certification <br /> courses</li>
        <li className='pb-[20px] text-lg'>Bachelor of Commerce (Bcom)</li>
        <li className='pb-[20px] text-lg'>BBA Computer Application</li>
        <li className='pb-[20px] text-lg'>Bsc computer science -AI and Data <br /> Science </li>
        <li className='pb-[20px] text-lg'>BBA Aviation Management</li>
       </ul>
       </div>

       <div className="flex flex-r md:flex-row justify-end md:px-[140px] cursor-pointer text-4xl gap-[30px] text-[#01F19B] pr-[30px] py-[10px]">
       <FaInstagram />
       <SlSocialFacebook />
       <FiLinkedin />
       </div>
      </footer>
    </div>
  )
}

export default Footer
