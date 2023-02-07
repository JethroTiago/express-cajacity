import React from 'react';
import Navbar from './Navbar';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt="Pano quadriculado laranja"/>
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Alto Padrão!!! A melhor Pizza da região!
            </h1>
            <p className='primary-text'>
              A pizza mais saborosa de CajaCity, ótima para qualquer hora e ocasião!
            </p>
            <button className='secondary-button'>
              Peça Agora! <FiArrowRight />
            </button>
          </div>
          <div className='home-image-container'>
            <img src={ BannerImage } alt="Uma deliciosa pizza"></img>
          </div>
        </div>
    </div>
  );
};

export default Home;