import { useState } from "react";

function About() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        id="footer"
        className="container mt-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section className="w-full">
          <div className="flex text-center items-center flex-col">
            <img
              src="https://github.com/kinemasa/myportfolio/blob/main/images/logo.png?raw=true"
              alt=""
              className="w-40 h-40 block"
            />
            <p className="text-3xl mt-10 mb-10">MASAYA KINEFUCHI</p>
            <h2 className="text-3xl underline mb-3">E-mail</h2>
            <p className="p-4 underline ">sample@gmail.com</p>
            <h2 className="text-3xl underline mb-3">SNS</h2>
            <div className="flex gap-4 p-5">
              <i className="fa-brands fa-instagram text-4xl text-pink-700"></i>
              <i className="fa-brands fa-twitter text-4xl text-blue-500"></i>
            </div>
          </div>

          <i></i>
        </section>
      </div>
    </>
  );
}

export default About;
