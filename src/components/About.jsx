import React from "react";

function About() {
  return (
    <div className="md:screen-container bg-[#090913] text-white mt-10">
      <section className="px-[52px] py-[52px] border rounded-2xl">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 px-4 md:px-0">
          <div className="w-full md:w-[497px]">
            <h1 className="text-2xl md:text-3xl">
              <span className="text-[#01F19B]">About of</span> School Of Science
              & Management
            </h1>
          </div>

          <div className="flex flex-col items-start w-full md:w-auto">
            <h2 className="text-base md:text-lg sm:text-base w-full md:w-[674px]">
              Academy is a fully accredited institution with its headquarters in
              Calicut. The institution prides itself for being a vibrant effort
              from the part of highly experienced entrepreneurs who had
              successfully proved themselves in a range of academic fields.
            </h2>

            <div className="mt-6 md:mt-10 self-center md:self-end rounded-3xl border border-gray-600 h-[40px] w-[130px]">
              <button className="text-[#01F19B] px-3.5 py-2">Read more</button>
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-6 py-[64px] overflow-x-auto">
          <div className="min-w-[301px] h-[373px] border rounded-3xl flex flex-col justify-center items-start text-start p-[20px]">
            <h1 className="text-5xl  bg-clip-text text-transparent bg-gradient-to-r from-[#01F19B] via-[#FFFFFF] to-[#FFFFFF]">01</h1>
            <h2 className="text-2xl mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#01F19B] via-[#FFFFFF] to-[#FFFFFF]">
              What we offer
            </h2>
            <h3 className="text-lg mt-3">
              The skill set required for jobs are changing every day.
            </h3>
            <div className="self-end px-6 border rounded-3xl mt-6">
              <button className="mt-4 pb-3 text-[#01F19B]">Read more</button>
            </div>
          </div>

          <div className="min-w-[301px] h-[373px] border rounded-3xl flex flex-col justify-center items-start text-start p-[20px]">
            <h1 className="text-5xl  bg-clip-text text-transparent bg-gradient-to-r from-[#01F19B] via-[#FFFFFF] to-[#FFFFFF]">02</h1>
            <h2 className="text-2xl mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#01F19B] via-[#FFFFFF] to-[#FFFFFF]">
              Overseas consultancy
            </h2>
            <h3 className="text-lg mt-3">
              Our Overseas education consultants will be helping you to find the
              best course or university.
            </h3>
            <div className="self-end px-6 border rounded-3xl mt-6">
              <button className="mt-4 pb-3 text-[#01F19B]">Read more</button>
            </div>
          </div>

          <div className="min-w-[301px] h-[373px] border rounded-3xl flex flex-col justify-center items-start text-start p-[20px]">
            <h1 className="text-5xl  bg-clip-text text-transparent bg-gradient-to-r from-[#01F19B] via-[#FFFFFF] to-[#FFFFFF]">03</h1>
            <h2 className="text-xl mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#01F19B] via-[#FFFFFF] to-[#FFFFFF]">
              Distance education programs
            </h2>
            <h3 className="text-lg mt-3">
              We believe education is life-long. Our distance education program
              for students will help them acquire skills.
            </h3>
            <div className="self-end px-6 border rounded-3xl mt-6">
              <button className="mt-4 pb-3 text-[#01F19B]">Read more</button>
            </div>
          </div>

          <div className="min-w-[301px] h-[373px] border rounded-3xl flex flex-col justify-center items-start text-start p-[20px]">
            <h1 className="text-5xl  bg-clip-text text-transparent bg-gradient-to-r from-[#01F19B] via-[#FFFFFF] to-[#FFFFFF]">04</h1>
            <h2 className="text-2xl mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#01F19B] via-[#FFFFFF] to-[#FFFFFF]">
              Add-on courses
            </h2>
            <h3 className="text-lg mt-3">
              Add-on courses are an excellent way of getting more out of your
              degree and career.
            </h3>
            <div className="self-end px-6 border rounded-3xl mt-6">
              <button className="mt-4 pb-3 text-[#01F19B]">Read more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
