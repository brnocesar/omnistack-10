import React from 'react';
import { FooterBase, ExtraLink } from './styles';

function Footer() {
  return (

    <FooterBase>
      <p>
        {'Desenvolvido  durante  a  '}
        <ExtraLink href="https://vitrine-imersao-react.vercel.app/">
          Imersão React
        </ExtraLink>
        {'  da  '}
        <a href="https://www.alura.com.br/">
          <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" height="19" alt="Logo Alura" />
        </a>
        {'  por  '}
        <ExtraLink href="https://brnocesar.github.io/">
          Bruno  Cesar
        </ExtraLink>
      </p>
    </FooterBase>
  );
}

export default Footer;
