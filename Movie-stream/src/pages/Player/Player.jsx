import React from 'react'
import './Player.css'
import { FaArrowLeft } from "react-icons/fa";


const Player = () => {
  return (
    <div className='player'>
      <FaArrowLeft size={40} style={{cursor:'pointer'}} className='back'/>
      <iframe width='90%' height='90%'  src="https://www.youtube.com/embed/q7eZHEmbhIM" title='trailer' frameBorder="0"  allowFullScreen></iframe>
      <div className="player-info">
        <p>Publishede Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>

      
    </div>
  )
}

export default Player
