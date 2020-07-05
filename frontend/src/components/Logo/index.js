import React from 'react';

import { Container, LogoText } from './styles';

function Logo(props) {
  return (
    <Container>
      <LogoText size={props.size}>valideo</LogoText>
    </Container>
  );
}

export default Logo;