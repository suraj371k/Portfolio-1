import React from 'react'
import Card from './Card'
import data from './Data'

const Project = () => {
  return (
    <div id='projects' className='mt-24 pt-40'>
        <h1 className='text-center text-3xl font-semibold'>My Projects</h1>
 
      <div className='grid grid-flow-row grid-cols-2 place-items-center ml-40 mr-40 mt-16'>
       {
        data.map((project) => (
          <Card  key={project.id} project={project}></Card>
        ))
       }
      </div>
      </div>
   
  )
}

export default Project