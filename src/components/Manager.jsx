import React from "react";
// import { FaEye } from "react-icons/fa";
// <FaEye style={{ color: 'black', fontSize: '24px', paddingRight:'5px'}}/>
import {useRef} from 'react';

const Manager = () => {
  const ref = useRef()
  const showpassword = ()=>{
    alert("show the password"); 
    if( ref.current.src.includes("../close-eye.png" ) ){
      ref.current.src = "../eye.png" 
    }
     else 
     {
      ref.current.src = "../close-eye.png"
     }
  }

  return (
    <div>
      <div class="absolute top-0 -z-10 h-full w-full bg-green-50">
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className=" mycontainer ">
        <h1 className="text-center text-3xl font-bold">
          <span className="text-green-500 ">&lt;</span>
          Password
          <span className="text-green-500 ">Mr.&gt;</span>
        </h1>
        <p className="text-center text-green-700 text-lg">
          your own password Manager
        </p>

        <div className="text-black flex flex-col items-center p-4 gap-8">
            {/* flexx col isliye child ko center banane ke liye item-center kro */}
          <input placeholder="Enter website Url"
            className="  rounded-full border border-green-500  w-full px-4 py-1"
            type="text"
            name=""
            id=""
          />
          <div className="flex w-full justify-between  gap-8">
            <input placeholder="Enter username"
              className=" rounded-full border border-green-500  w-full px-4 py-1"
              type="text"
              name=""
              id=""
            />
            <div className="relative">
            <input placeholder="Enter password"
              className=" rounded-full border border-green-500  w-full px-4 py-1"
              type="text"

              name=""
              id=""
            />
            <span className="absolute right-2 top-1 cursor-pointer  " 
                          onClick={showpassword}>
              <img  ref={ref} className="p-1" width={36} src="../eye.png"/>
            </span>
            </div>
           
          </div>
          <button className="  flex justify-center gap-2 items-center bg-green-500 rounded-full px-8 py-2 border border-green-900  w-fit hover:bg-green-400" >
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
          ></lord-icon>

            Add pasword</button>
        </div>
      </div>
    </div>
  );
};

export default Manager;
