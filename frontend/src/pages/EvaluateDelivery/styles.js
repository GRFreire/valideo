import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ProcedureCheckListContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 50px 0;
`;

export const ProcedureCheckListSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    strong {
      color: #333333;
      font-size: 13pt;
      margin-bottom: 45px;
    }

    span {
      width: 100%;
      margin-left: 5%;
      padding-bottom: 32px;
      display: flex;
      flex-direction: row;
      align-items: center;

      input[type=checkbox] {
        min-width: 20px;
        min-height: 20px;
        margin-right: 5px;
      }

      label {
        width: 100%;
        color: #333333;
        font-size: 13pt;
        padding-left: 2%;
      }

    }
`;

export const EvaluationTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    strong {
      color: #484848;
      min-width: 20%;
      max-width: 350px;
      text-align: center;
      font-size: 18pt;
      margin: 30px 0 30px 0;
    }

    textarea {
      min-width: 500px;
      height: 200px;
      margin-bottom: 30px;
      padding: 15px 10px;
      border-radius: 6px;
      border-width: 2px;
      resize: none;

      ::placeholder {
        color: #666666;
        font-family: Montserrat;
      }
    }

    span {
      input[type=checkbox]{
        margin-bottom: 37px;
        margin-right: 19px;
      }

      label{

      }
    }

    button {
      width: 300px;
      height: 60px;
      background: #2CAFDC;
      border-radius: 4px;
      border: none;
      font-family: Montserrat;
      font-weight: bold;
      color: #FFFFFF;
      margin-bottom: 17px;
      cursor: pointer;
      transition: .5s;
    }

    button:hover {
        background: #008DBD;
      }

    p {
      font-size: 13pt;
      color: #666666;
      font-family: Montserrat;
      font-weight: 500;
      margin-bottom: 6px;
    }

    a {
      text-decoration: none;
      font-family: Montserrat;
      font-style: normal;
      font-size: 12pt;
      text-align: center;
      color: #2CAFDC;
    }

    a:hover {
      color: #008DBD;
    }
`;