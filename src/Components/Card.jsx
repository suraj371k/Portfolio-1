import React from 'react';
import data from './Data';

const Card = ({project}) => {
    return (
        <div>
         <div className='w-[550px] px-5 py-10 rounded-lg bg-[#118ab2] m-10 hover:scale-105
         transition duration-500'>
      <img className='rounded-xl p-5' src={project.image} alt={project.title} width={500} height={700} />
      <h3 className='text-2xl font-semibold p-6'>{project.title}</h3>
      <p className='text-xl p-6'>{project.description}</p>
      <a  className='text-xl py-3 px-6 bg-black text-white mx-5 rounded-2xl' 
      href={project.github} target='_blank'>GitHub</a>
      <a className='text-xl py-3 px-6 bg-black text-white mx-5 rounded-2xl'
       target='_blank' href={project.site}>Live Site</a>
    </div>
        </div>
    );
};

export default Card;
