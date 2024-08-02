import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-around bg-[#111620] p-6 fixed w-full text-white flex-wrap'>
      <div>
        <h2 className='text-3xl font-extrabold'>SK</h2>
      </div>
      <div>
        <ul className='flex text-2xl gap-x-16 flex-wrap'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
