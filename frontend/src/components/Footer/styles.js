import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  padding-left: 10%;
`;

export const AboutUs = styled.div`
  width: 40%;
  color: #fff;
  font-family: Montserrat;
  font-size: 12pt;
  line-height: 140%;
  margin-left: 4%;
`;

export const Bottom = styled.div`
  text-align: center;

  p {
    line-height: 140%;
    margin-bottom: 2%;
    font-family: Montserrat;
    font-size: 12pt;
    color: #fff;

    a {
      text-decoration: none;
      color: #2CAFDC;
      margin-left: 1%;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding-bottom: 5%;

  span {
    margin-top: 4%;

    a {
      margin-left: 5%;
    }
  }
`;
