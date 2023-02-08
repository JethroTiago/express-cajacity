import React from 'react';
import ProfilePic from "../Assets/gaby-avatar.png";
import { AiFillStar } from "react-icons/ai";

const Depoimentos = () => {
  return <div className='work-section-wrapper'>
    <div className='work-section-top'>
        <p className='primary-subheading'>Depoimentos</p>
        <h1 className='primary-heading'>Opinião do cliente</h1>
        <p className='primary-text'>
            "A melhor pizza da região! Uma pizza como você nunca viu! As bordas são diferentes de todas as outras que já experimentei! E os sabores autorais, que homenageiam regiões do bairro de Cajazeiras?! São fantásticos!!!"
        </p>
    </div>
    <div className='testimonial-section-bottom'>
        <img src={ ProfilePic } alt='Foto do instagram de Gaby'></img>
        <p>
            Nutricionista • Criadora de conteúdo digital • Baiana em Curitiba • Vida com humor • Maternidade • Dicas • Embaixadora @nblack_21
        </p>
        <div className='testimonials-stars-container'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h2>Gaby Bragança</h2>
    </div>
  </div>
};

export default Depoimentos;