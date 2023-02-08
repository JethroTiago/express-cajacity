import React from 'react';
import PickPizza from "../Assets/pick-pizza-image.png";
import ChoosePizza from "../Assets/choose-image.png";
import DeliveryPizza from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickPizza,
            title: "Bateu a fome?",
            text: "Pizza é um prato que combina com tudo! É um dos alimentos mais consumidos do mundo! Por que não saborear uma?",
        },
        {
            image: ChoosePizza,
            title: "Escolha uma pizza",
            text: "Temos um imenso cardápio com uma quantidade gigante de sabores! É só clicar e escolher seu sabor favorito!",
        },
        {
            image: DeliveryPizza,
            title: "Entregamos em sua casa",
            text: "Se você mora no bairro de Cajazeiras ou adjacências, entregaremos a pizza bem rapidinho em sua residência!",
        },
    ];
    return <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>EXPRESS CAJACITY</p>
            <h1 className='primary-heading'>Como trabalhamos</h1>
            <p className='primary-text'>
                Terça, quarta e quinta das 18:00 às 22:00 e de sexta a domingo das 18:00 às 22:40! SÓ TRABALHAMOS COM DELIVERY!
            </p>
        </div>
        <div className='work-section-bottom'>
            {
                workInfoData.map((data) => (
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt="Uma imagem ilustrativa do que esta sendo exposto"></img>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
};

export default Work;