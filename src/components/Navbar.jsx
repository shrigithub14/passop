import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-slate-800 text-white  '>
    <div className="mycontainer justify-between  items-center flex px-5  py-5 h-14 ">

    <div className=' logo font-bold  text-white text-2xl '>
      <span className='text-green-500 '>&lt;</span>
      Password
      <span className='text-green-500 '>Mr.&gt;</span>
      </div>
    <ul>
        <li className='flex gap-4'>
            <a  className="hover:font-bold" href="#" >Home</a>
            <a className="hover:font-bold" href="#" >Home</a>
            <a className="hover:font-bold" href="#" >Home</a>
        </li>
    </ul>
    </div>
   </nav>
  )
}

export default Navbar
