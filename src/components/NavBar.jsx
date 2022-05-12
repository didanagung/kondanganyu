import React from 'react';
import {Link} from 'react-scroll';
import { RiHome7Fill, RiNurseFill, RiAlarmLine, RiFirstAidKitFill } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className='fixed bottom-0 w-full'>
        <ul className='flex justify-evenly max-w-2xl mx-auto font-tape bg-slate-100 rounded-t-2xl'>
          <Link
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} className='cursor-pointer active:bg-emerald-500 flex items-center p-2 rounded-md hover:tombol hover:text-white m-1 px-6'><span><RiHome7Fill className='w-full'/> <span className='text-sm'>Home</span></span></Link>
          <Link
          activeClass="active"
          to="acara"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} className='cursor-pointer active:bg-emerald-500 flex items-center p-2 rounded-md hover:tombol hover:text-white m-1 px-6'><span><RiAlarmLine className='w-full'/> <span className='text-sm'>Acara</span></span></Link>
          <Link
          activeClass="active"
          to="prokes"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} className='cursor-pointer active:bg-emerald-500 flex items-center p-2 rounded-md hover:tombol hover:text-white m-1 px-6'><span><RiFirstAidKitFill className='w-full'/> <span className='text-sm'>Prokes</span></span></Link>
          <Link
          activeClass="active"
          to="penutup"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} className='cursor-pointer active:bg-emerald-500 flex items-center p-2 rounded-md hover:tombol hover:text-white m-1 px-6'><span><RiNurseFill className='w-full'/> <span className='text-sm'>Penutup</span></span></Link>
        </ul>
    </div>
  )
}

export default NavBar