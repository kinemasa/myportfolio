import { useState } from "react";

function Work() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        id="reseach"
        className="container mt-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section className="w-full">
          <h1 className="secondary-title mb-6">Work</h1>
          <p className="section-paragraph">
            私が作ってきたWebアプリケーションがこちら
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <img
              src="https://github.com/kinemasa/myportfolio/blob/main/images/reserch.png?raw=true"
              alt=""
              className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
            />
            <img
              src="https://github.com/kinemasa/myportfolio/blob/main/images/reserch.png?raw=true"
              alt=""
              className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
            />
            <img
              src="https://github.com/kinemasa/myportfolio/blob/main/images/reserch.png?raw=true"
              alt=""
              className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
            />
            <img
              src="https://github.com/kinemasa/myportfolio/blob/main/images/reserch.png?raw=true"
              alt=""
              className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
            />
            <img
              src="https://github.com/kinemasa/myportfolio/blob/main/images/reserch.png?raw=true"
              alt=""
              className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
            />
            <img
              src="https://github.com/kinemasa/myportfolio/blob/main/images/reserch.png?raw=true"
              alt=""
              className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Work;
