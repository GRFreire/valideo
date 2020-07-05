import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(10,117,153);
  background: linear-gradient(30deg, rgba(10,117,153,1) 0%, rgba(32,181,232,1) 50%);
  margin: 15px;
  margin-top: 125px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  max-width: 80%;
  border-radius: 10px;


  margin-left: ${({ position }) => {
    if(position === 'left') {
      return `20%`;
    }
    if(position === 'center') {
      return `35%`;
    }
    if(position === 'right') {
      return `50%`;
    }
  }};
`;

export const Title = styled.h3`
  color: white;
  font-size: 18pt;
`;

export const DateText = styled.p`
  color: white;
  margin-top: 5px;
  font-size: 18px;
`;

export const ProceduresContainer = styled.div`
  margin: 10px;
  margin-top: -10px;
`;

export const Procedure = styled.div`
  margin: 5px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Photo = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  border-radius: ${props => props.imgSize / 2}px;
  width: ${props => props.imgSize}px;
  height: ${props => props.imgSize}px;
`;

export const ProcedureInformation = styled.div`
  margin: 5px;
  margin-left: 50px;
`;

export const ProcedureTitle = styled.h4`
  font-family: Montserrat;
  color: white;
  font-size: 15pt;
  font-weight: 400;
`;

export const ProcedureDescription = styled.p`
  color: white;
  margin-top: 10px;
  font-weight: 300;
`;
