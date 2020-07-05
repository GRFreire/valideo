import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 15px;
  font-weight: 400;
`;

export const PhotoBox = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Photo = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  border-radius: ${props => props.imgSize / 2}px;
  width: ${props => props.imgSize}px;
  height: ${props => props.imgSize}px;
`;

export const PhotoDescription = styled.p`
  margin-top: 20px;
  font-size: 14pt;
  text-align: center;
`;

export const Instructions = styled.h3`
  margin-top: 30px;
  width: 20%;
  min-width: 350px;
  text-align: center;
  font-size: 18pt;
`;

