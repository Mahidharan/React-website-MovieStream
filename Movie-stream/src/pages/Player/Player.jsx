import React, { useEffect, useState } from 'react'
import './Player.css'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import myvideo from '../../assets/ultron_trailer.mp4'

const Player = () => {
const {id} = useParams();
const navigate = useNavigate()

  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzg2MTJlNTgwMDQ0MmM4Mjc0YjQyYWQ5MmVkM2JjZSIsIm5iZiI6MTc0Njg0MjI3NC4zNiwic3ViIjoiNjgxZWIyYTJiNzAyYjZiOTBkNzM4NWU3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.gIIvPPwWFjcG93eaBhORyupcAI-3oOTRnlnTnrQ7FVo'
  }
};


  useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err)); 
},[])


  return (
    <div className='player'>
      <FaArrowLeft size={40} style={{cursor:'pointer'}} className='back' onClick={()=>{navigate(-2)}}/>
     
     {
  id === "9986100" ? (
    // Show local video for Ultron
    <div className="video-container">
      <video className="video-element" controls autoPlay>
        <source src={myvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    // Show YouTube trailer for other movies
    <iframe
      width='90%'
      height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer'
      frameBorder="0"
      allowFullScreen
    ></iframe>
  )
}        
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

    </div>
    
  )
}

export default Player
