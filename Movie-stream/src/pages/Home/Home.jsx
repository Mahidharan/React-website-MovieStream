import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/ultron.jpg'
import hero_title from '../../assets/age.png'
import info_icon from '../../assets/info1.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const Home = () => {

  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/player/9986100');
  };

  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          {/* <p> Thanos, a powerful intergalactic villain, seeks to collect all six Infinity Stones to achieve his goal of balancing the universe by eliminating half of its population. </p> */}
            <div className="hero-btns">
              <button className='btn' onClick={handlePlay}>< FaPlay size={15} color="black" />
              Play</button>
              <button className='btn dark-btn'> <img src={info_icon} />More Info</button>
            </div>

            <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
            <TitleCards title={"Entertaiment All-rounders"} category={"top_rated"}/>
            <TitleCards title={"Action Movies"} category={"popular"}/>
            <TitleCards title={"Exclusive on MovieStream"} category={"upcoming"}/>
            <TitleCards title={"Top pics for you"} category={"now_playing"}/>
          </div>
          <Footer/>
    </div>
  )
}

export default Home
