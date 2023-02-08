import React from 'react';

const Contato = () => {
    return (
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Ficou com alguma dúvida?</h1>
        <h1 className="primary-heading">Mande-nos uma mensagem!</h1>
        <div className="contact-form-container">
          <input type="text" placeholder="seuemail@seuemail.com" />
          <button className="secondary-button">ENVIAR</button>
        </div>
      </div>
    );
  };
  
  export default Contato;  