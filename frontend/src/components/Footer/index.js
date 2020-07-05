import React from 'react';
import Logo from '../Logo';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
import { Container, Top, Bottom, AboutUs, SocialMedia } from './styles';

function Footer() {
  return (
    <Container>
      <Top>
        <Logo size={60} />
        <AboutUs>
          Somos uma empresa que desenvolve procedimentos padronizados na entrega,
          proporcionando experiências transparentes e de confiança.
        </AboutUs>
      </Top>
      <Bottom>
        <p>Saiba mais em
          <a href='#'>www.valideo.io</a>
        </p>
        <SocialMedia>
          <p>Siga-nos em nossas redes sociais</p>
          <span>
            <a href='www.facebook.com'><FiFacebook size={30} color={'#2CAFDC'} /></a>
            <a href='www.instagram.com'><FiInstagram size={30} color={'#2CAFDC'} /></a>
          </span>
        </SocialMedia>
      </Bottom>
    </Container>
  );
}

export default Footer;