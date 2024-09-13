import React from 'react'

function Contact() {
  return (
    <div className='md:screen-container'>
    <section className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-[60px] lg:gap-[100px] xl:gap-[150px] p-6 md:p-10">
        <div className="space-y-10">
          <h1 className="text-white text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            <span className="text-green-400">Let's Get</span> In Touch
          </h1>
          <div className="md:py-[50px] mt-8 space-y-10">
            <div className='text-white'>
              <p className="text-lg font-light text-[#868585] py-[16px]">Phone</p>
              <p className='text-[#E4E3E3] font-light text-xl'>9656300567</p>
              <p className='text-[#E4E3E3] font-light text-xl'>9037206760</p>
            </div>
            <div className='text-white'>
              <p className="text-lg font-light text-[#868585] py-[13px]">Email</p>
              <p className='text-[#E4E3E3] font-light text-xl'>Admissions.Co.In</p>
            </div>
            <div className='text-white'>
              <p className="text-lg font-light text-[#868585] py-[6px]">Address</p>
              <p className='text-[#E4E3E3] font-light text-xl'>
                Education, <br /> 2nd Floor, Central Arcade,<br />
                Cherooty Road,<br /> Calicut - 673032
              </p>
            </div>
          </div>
        </div>
  
        <div className="space-y-10">
        <div className="py-[30px]  items-center space-x-4 hidden sm:flex">
        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-10 h-10 md:w-12 md:h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L20.25 12 13.5 19.5M3.75 12h15.75"
              />
            </svg>
            <div className="flex w-full md:w-[344px] h-20 justify-end">
              <p className="text-gray-300 text-base leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since.
              </p>
            </div>
          </div>
  
          {/*  Contact Form */}
          <div className="bg-white text-black rounded-3xl cursor-pointer p-3 shadow-lg w-full md:w-[400px] lg:w-[450px] xl:w-[497px] h-auto md:h-[520px]">
            <h2 className="py-[12px] text-xl md:text-2xl font-bold mb-6">Contact</h2>
            <form action="#" method="POST" className="space-y-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-green-500 w-full"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-green-500 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-green-500 w-full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="border-b border-gray-300 p-3 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-green-500 w-full"
              />
              <select
                name="courses"
                className="border-b border-gray-300 p-3  focus:outline-none focus:ring-0 focus:border-b-2 focus:border-green-500 w-full"
              >
                <option value="" disabled selected className="text-gray-400">
                  Select a Course
                </option>
                <option value="computer-science">Computer Science</option>
                <option value="business">Business Administration</option>
                <option value="engineering">Engineering</option>
                <option value="design">Graphic Design</option>
                <option value="marketing">Marketing</option>
              </select>
              <div className='py-2'>
                <button
                  type="submit"
                  className="bg-green-500 text-white w-full py-3 rounded-lg hover:bg-green-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
    
  )
}

export default Contact
