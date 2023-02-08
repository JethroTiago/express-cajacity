import React from 'react';
import PickPizza from "../Assets/pick-pizza-image.png";
import ChoosePizza from "../Assets/choose-image.png";
import DeliveryPizza from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickPizza,
            title: "Bateu a fome?",
            text: "Pizza é um prato que combina com tudo! É um dos alimentos mais consumidos do mundo!",
        },
        {
            image: ChoosePizza,
            title: "Escolha uma pizza",
            text: "Temos um imenso cardápio com uma quantidade gigante de sabores e tamanhos. É só clicar e escolher seu sabor favorito!",
        },
        {
            image: DeliveryPizza,
            title: "Entregamos em sua casa",
            text: "Se você mora no bairro de Cajazeiras ou adjacências, entregaremos a pizza bem rapidinho em sua residência!",
        },
    ];
    return <div>Work</div>
};

export default Work;