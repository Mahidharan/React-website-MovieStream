import React,{useEffect,useRef, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Nzg2MTJlNTgwMDQ0MmM4Mjc0YjQyYWQ5MmVkM2JjZSIsIm5iZiI6MTc0Njg0MjI3NC4zNiwic3ViIjoiNjgxZWIyYTJiNzAyYjZiOTBkNzM4NWU3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.gIIvPPwWFjcG93eaBhORyupcAI-3oOTRnlnTnrQ7FVo'
  }
};

const handlewheel = (event) => {

  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handlewheel);
})
                                                                                                                                     

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on MovieStream"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index) => {
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link> 
        })}
      </div>
    </div>
  )
}

export default TitleCards
