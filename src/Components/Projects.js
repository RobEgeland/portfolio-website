import React, {useState} from 'react'
import ProjectCards from './ProjectCards'

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "Synth-etic",
      webURL: "https://synth-etic.onrender.com",
      githubURL: "https://github.com/RobEgeland/Synth-etic"
    },
    
  ])
  return (
    <div className='projects'>
      <ProjectCards/>
    </div>
  )
}

export default Projects