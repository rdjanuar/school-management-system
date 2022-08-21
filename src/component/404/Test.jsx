import React from "react";
import wdtimages from "../../assets/wdt.png";

export const Testing = () => {
  return (
    <div className="mx-auto container">
      <div className="flex">
        <div className="bg-[#66BCAD] w-full h-screen clip-path relative">
          <p className="text-white text-6xl w-7/12 absolute top-10 left-28">
            Plan your day with{" "}
            <span className="text- font-semibold">Planly</span>
          </p>
          <img src={wdtimages} className="w-4/6 h-3/4 absolute top-10"></img>
        </div>
        <div className="flex flex-col justify-center items-center  h-screen w-full  rounded-sm">
          <form className="flex flex-col justify-center items-center  border-2 relative border-red-500 w-3/5 h-1/2  rounded-md  space-y-5 ">
            <div className="mx-10  ">
              <div className="mb-4">
                <label>E-mail or Username</label>
                <input
                  type="email"
                  className="p-2 border border-red-500 rounded-md w-full"
                  placeholder="enter your e-mail or username"
                />
              </div>
              <label>Password</label>
              <input
                type="password"
                className="p-2 border border-red-500 rounded-md w-full"
                placeholder="enter your password"
              />
            </div>
            <button className="px-20 py-2 rounded-full bg-red-500">
              Submit
            </button>
            <p className="text-red-500 font-semibold">forgot password?</p>
          </form>
          <div className="absolute top-36 px-40 py-6 bg-white"></div>
          <div className="absolute top-[9.5rem] right-64  px-28 py-6 bg-blue-500"></div>
          <div className="absolute top-[8.8rem] right-72  px-28 py-6 bg-red-500"></div>
          <p className="absolute top-36 px-16 py-3.5 text-white font-semibold bg-[#003D41]  ">
            Login here,fols...
          </p>
          <p className="mt-10">Dont have an account? Sign up here</p>
        </div>
      </div>
    </div>
  );
};
