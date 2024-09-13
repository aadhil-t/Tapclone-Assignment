import React from "react";

function Courses() {
  return (
    <div>
    <section className="md:screen-container mt-14 px-4">
      <div className="text-center text-white py-[49px]">
        <div className="py-[17px]">
          <button className="border w-[168px] h-[54px] rounded-3xl">
            Courses
          </button>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl">
          <span className="text-[#01F19B]">Courses</span> Available
        </h1>
        <h2 className="text-sm md:text-base lg:text-lg py-[20px] md:py-[37px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus.
          Praesent at hendrerit velit, at dictum nisl.
        </h2>
      </div>
  
      <div className="relative flex flex-wrap justify-center md:justify-start text-white gap-[25px] md:gap-[35px] px-4 md:px-[38px] py-[30px] md:py-[37px] border rounded-3xl">
        <div className="border border-[#01F19B] rounded-2xl shadow-lg w-full md:w-[45%] lg:w-[30%] mb-6 p-6 flex flex-col justify-between md:h-[382px]">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Full Stack Developer and Certification courses</h1>
            <h2 className="text-sm md:text-base font-inter mt-4 leading-relaxed">
            Every day, new technologies having the potential to transform interpersonal and professional relationships are born. Businesses are rapidly changing to digital. As a result , the need for IT professionals are also growing. According to recent studies, the demand for IT professionals will rise by 50-70 percent in the future.
            </h2>
          </div>
          <button className="mt-4 bg-transparent border text-white py-2 px-4 rounded-2xl hover:bg-green-600 self-end">
            Read more
          </button>
        </div>
  
        <div className="border border-[#01F19B] rounded-2xl shadow-lg w-full md:w-[45%] lg:w-[30%] mb-6 p-6 flex flex-col justify-between md:h-[382px]">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Bachelor of Commerce (Bcom)</h1>
            <h2 className="text-sm md:text-base font-inter mt-4 leading-relaxed">
            Bachelor of Commerce (B.Com.) is a 3-year full time program designed to cultivate business acumen among students and aims to develop various skills, to make students capable to be an effective part of the Organisation in various capacities.
            </h2>
          </div>
          <button className="mt-4 bg-transparent border text-white py-2 px-4 rounded-2xl hover:bg-green-600 self-end">
            Read more
          </button>
        </div>
  
        <div className="border border-[#01F19B] rounded-2xl shadow-lg w-full md:w-[45%] lg:w-[30%] mb-6 p-6 flex flex-col justify-between md:h-[382px]">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">BBA Computer Application</h1>
            <h2 className="text-sm md:text-base font-inter mt-4 leading-relaxed">
            BBA in Computer Application is a three-year bachelor degree designed to provide some advanced application of computer science to the students. The program trains students to tackle diverse opportunities and challenges in the IT industries. Since the IT sector is growing rapidly, the demand for skilled and qualified IT professionals has also increased.
            </h2>
          </div>
          <button className="mt-4 bg-transparent border text-white py-2 px-4 rounded-2xl hover:bg-green-600 self-end">
            Read more
          </button>
        </div>
  
        <div className="border border-[#01F19B] rounded-2xl shadow-lg w-full md:w-[45%] lg:w-[30%] mb-6 p-6 flex flex-col justify-between md:h-[382px]">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Bsc Computer Science - AI and Data Science</h1>
            <h2 className="text-sm md:text-base font-inter mt-4 leading-relaxed">
            Artificial Intelligence and Data science is new branch of study that deals with scientific methodologies, processes, and techniques drawn in different domains like statistics, cognitive science, and computing the information science to extract knowledge from structured data and unstructured data. This knowledge is applied in various intelligent decisions in business applications
            </h2>
          </div>
          <button className="mt-4 bg-transparent border text-white py-2 px-4 rounded-2xl hover:bg-green-600 self-end">
            Read more
          </button>
        </div>
  
        <div className="border border-[#01F19B] rounded-2xl shadow-lg w-full md:w-[45%] lg:w-[30%] mb-6 p-6 flex flex-col justify-between md:h-[382px]">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">BBA Aviation Management</h1>
            <h2 className="text-sm md:text-base font-inter mt-4 leading-relaxed">
            The Bachelor of Business Administration (BBA) in Aviation management is an undergraduate Programme designed for those who are seeking to prepare themselves for managerial responsibilities. This will help them to develop their ability to recognize and solve problems and to understand the role of business in the ever-changing scenario.
            </h2>
          </div>
          <button className="mt-4 bg-transparent border text-white py-2 px-4 rounded-2xl hover:bg-green-600 self-end">
            Read more
          </button>
        </div>
  
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] bg-gradient-to-br from-transparent  rounded-br-3xl opacity-70 pointer-events-none"></div>
      </div>
    </section>
  </div>
  
  );
}

export default Courses;
