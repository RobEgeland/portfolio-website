import React from 'react'
import headshot from "../selfportrait.png"

const Home = () => {
  return (
    <div className='home'>
      <div className='home-content'>
        <img className='headshot' src={headshot}></img>
        <div className='text'>
          <div className='heading-parent'>
            <h1 className='heading'>Driven by an interest for Music and Cars, I seek to make the web interactive and fast.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home