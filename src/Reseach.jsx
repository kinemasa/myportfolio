import { useState } from "react";

function Reseach() {
  const [count, setCount] = useState(0);

  return (
    <>
 
      <div
        id="reseach"
        className="container mt-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section className="w-full">
          <h1 className="secondary-title mb-6">Reseach</h1>
          <div className="reseach-img relative flex flex-col justify-center  md:w-3/4  h-auto mx-auto">
            <img src="https://github.com/kinemasa/myportfolio/blob/main/images/reserch.png?raw=true" className="w-full" alt="" />
            <div className="bg-black opacity-70 h-full w-1/3 absolute top-0 left-0 flex flex-col items-center">
              <h1 className="text-2xl underline mt-5 sm:text-2xl sm:mt-10 md:mt-20 xl:mt-32 xl:text-5xl">
                Reseach
              </h1>
              <p className=" my-auto text-1xl md:text-1xl lg:text-2xl" >
                画像から健康状態を推定するための実験を行う。
                <span className="hidden sm:block">
                  特に眼底の画像情報と顔画像情報の比較を行うことで眼底検査の負担軽減を目指す。
                </span>
                
              </p>
              <button className="p-4 border-2 mt-4 rounded-md hover:bg-white hover:text-black"> Read More</button>
             
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Reseach;
