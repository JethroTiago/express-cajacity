import React from 'react';
import SobreBackground from '../Assets/about-background.png';
import SobreBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const Sobre = () => {
  return <div className='about-section-container'>
    <div className='about-background-image-container'>
        <img src={SobreBackground} alt="Um belo pano quadriculado laranja" />
    </div>
    <div className='about-section-image-container'>
        <img src={SobreBackgroundImage} alt='Imagem de uma pizza saborosa'></img>
    </div>
    <div className='about-section-text-container'>
        <p className='primary-subheading'>Sobre</p>
        <h1 className='primary-heading'>
            A vida é melhor com uma pizza!
        </h1>
        <p className='primary-text'>
            A pizza da Express Cajacity pizzaria é considerada como a melhor pizza
            da região de Cajazeiras e está entre as melhores pizzas da cidade!
        </p>
        <p className='primary-text'>
            Desenvolvida com os melhores ingredientes e com sabores inovadores que 
            você só vai encontrar aqui com a gente! Peça logo a sua!
        </p>
        <div className='about-buttons-container'>
            <button className='secondary-button'>Conheça os sabores</button>
            <button className='watch-video-button'>
                <BsFillPlayCircleFill /> Assista o vídeo!
            </button>
        </div>
    </div>
  </div>
};

export default Sobre;