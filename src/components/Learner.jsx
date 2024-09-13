import React from "react";

function Learner() {
  return (
    <div className="screen-container">
    <div className="bg-gradient-to-b min-h-screen px-4 py-12 flex flex-col justify-center items-center md:items-start ">
      {/* Heading */}
      <div className="text-center py-12 md:py-[71px]">
        <h1 className="text-5xl md:text-5xl lg:text-7xl font-normal text-white">
          <span className="text-[#01F19B]">Learner</span> Benefits
        </h1>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-transparent border border-[#01F19B] rounded-xl p-6 text-white shadow-md w-full h-auto  md:w-[524px] md:h-[236px]">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
                World Class Pedagogy
              </h2>
              <p className="mt-4 text-base md:text-lg lg:text-xl font-inter">
                Learn from the World’s Best Faculty & Industry Experts. Learn
                with fun Hands-on Exercises & Assignments. Participate in
                Hackathons & Group Activities.
              </p>
            </div>
  
            <div className="bg-transparent border border-[#01F19B] rounded-xl p-6 text-white shadow-md w-full h-auto md:w-[524px] md:h-[250px]">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
                Career Assistance
              </h2>
              <p className="mt-4 text-base md:text-lg lg:text-xl font-inter">
                Resume Building & Mock Interview Prep. 50+ Institution
                Options. Interview Prep.
              </p>
            </div>
          </div>
  
          {/* Gamified Learning Div */}
          <div className="md:px-[150px] space-y-8 md:space-y-0">
            <div className="bg-transparent border border-[#01F19B] rounded-xl p-6 text-white shadow-md w-full h-auto md:w-[571px] md:h-[521px]">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
                Gamified Learning
              </h2>
              <p className="mt-4 text-base md:text-lg lg:text-xl font-inter">
                Dedicated Learning Managers. <br />
                24x7 Learning Support. <br />
                Network with Peers & Interact <br />
                with Industry Leaders.
              </p>
            </div>
          </div>
        </div>
  
        {/* Right Section: Image */}
        <div className="relative flex justify-center md:justify-start">
  <img
    src="/src/assets/Group.png" // Replace with actual image path or source
    alt="Learner"
    className="hidden md:block w-full max-w-[391px] h-auto object-contain md:absolute"
  />
</div>

      </div>
    </div>
  </div>
  
  );
}

export default Learner;
