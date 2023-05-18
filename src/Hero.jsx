import { useState } from "react";



function Hero() {
  const [count, setCount] = useState(0);

  return (
    <>
       {/* <!-- hero section --> */}
    <div
      id="home"
      className="container mt-16 grid-cols-2 justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full relative"
    >
      <div className="flex flex-wrap md:flex-nowrap ">
        <div className="md:my-36 lg:ml-20 justify-center md:justify-start  max-w-xl flex flex-wrap ">
          <h1
            className="font-bold text-5xl text-center md:text-left lg:text-7xl md:text-6xl"
          >
            Masaya Kinefuchi
          </h1>
          <button
            className="px-6 py-4 mt-10 bg-theme font-bold rounded-md hover:bg-purple-600 transition-all duration-300 "
          >
            <i className="fa-solid fa-rocket mr-1"></i><span>MORE </span>
          </button>
        </div>
    
      <img
          className=" py-12
              -z-10 object-cover"
          src="../images/hero.png"
          alt=""
        />

  
   
      </div>
    </div>
    </>
  );
}

export default Hero;
