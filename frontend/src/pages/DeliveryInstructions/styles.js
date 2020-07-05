import styled from 'styled-components';

import background from '../../assets/images/ProceduresPath.svg';

export const Container = styled.div`
  margin-top: 10px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 45px;
  font-size: 28pt;
  font-weight: 400;
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const ProductView = styled.div`
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  border: 1px solid #2CAFDC;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px #2CAFDC;
  background-color: white;
`;

export const ProductPhoto = styled.img.attrs((props) => ({
  src: props.src
}))`
  width: 40%;
  height: auto;
`;

export const ModalPhoto = styled.img.attrs((props) => ({
  src: props.src
}))`
  margin: 30px;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  border: 1px solid #2CAFDC;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px #2CAFDC;
`;

export const ModalInfo = styled.div`
  margin: 5px;
`;

export const ModalName = styled.h4`
  margin-top: -30px;
  margin-bottom: 30px;
  font-size: 36pt;
  font-weight: 500;
  width: 600px;
  max-width: 95%;
`;

export const ModalProcedure = styled.h5`
  font-size: 24pt;
  font-weight: 300;
  width: 600px;
  max-width: 95%;
`;
