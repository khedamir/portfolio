import React from 'react'
import About from '../components/About'
import ProjectItem from '../components/ProjectItem'
import '../scss/pages/_home.scss'

const Home: React.FC = () => {
  return (
    <div>
      <About />
      <ProjectItem />
    </div>
  )
}

export default Home
