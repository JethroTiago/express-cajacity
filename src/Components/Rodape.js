import React from 'react';
import Logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Rodape = () => {
    return (
        <div className="footer-wrapper">
          <div className="footer-section-one">
            <div className="footer-logo-container">
              <img src={Logo} alt="Logomarca da Express Cajacity Pizzaria" />
            </div>
            <div className="footer-icons">
              <BsTwitter />
              <SiLinkedin />
              <BsYoutube />
              <FaFacebookF />
            </div>
          </div>
          <div className="footer-section-two">
            <div className="footer-section-columns">
              <span>Qualidade</span>
              <span>Ajuda</span>
              <span>Compartilhe</span>
              <span>Trabalhe conosco</span>
              <span>Depoimentos</span>
              <span>Trabalho</span>
            </div>
            <div className="footer-section-columns">
              <span>71 98425-9989</span>
              <span>@express.cajacitypizzaria/</span>
            </div>
            <div className="footer-section-columns">
              <span>Termos e condições</span>
              <span>Política de privacidade</span>
            </div>
          </div>
        </div>
      );
    }; 

export default Rodape;