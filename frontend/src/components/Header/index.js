import React from 'react';

import { Container, Title, PhotoBox, Photo, PhotoDescription, Instructions } from './styles';

function Header(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <PhotoBox>
        <Photo src={props.imgSrc} alt={props.description} imgSize={175} />
        <PhotoDescription>{props.description}</PhotoDescription>
      </PhotoBox>
      <Instructions>{props.instructions}</Instructions>
    </Container>
  )
}

export default Header;