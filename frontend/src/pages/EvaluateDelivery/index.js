import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Form,
  ProcedureCheckListContainer,
  ProcedureCheckListSection,
  EvaluationTextContainer
} from './styles';

import parkImage from '../../assets/images/park.jpg'
import onlineExperienceImage from '../../assets/images/online-experience.jpg'

function EvaluateDelivery() {

  const data = [
    { id: 1, title: 'O Entregador', steps: ['Estava de máscara', 'Utilizou álcool em gel', 'Manteve um distanciamento', 'Fez a entrega sem contato'] },
    { id: 2, title: 'A embalagem', steps: ['Estava intacta'] },
  ];

  const [evaluationText, setEvaluationText] = useState('');
  const [receivedProduct, setReceivedProduct] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setEvaluationText('');
    setReceivedProduct(false);
    setIsEvaluating(false);
  }

  if (!isEvaluating) {
    return (
      <Header
        title='Obrigado!'
        imgSrc={parkImage}
        description=''
        instructions='Sua avaliação foi enviada com sucesso!'
      />
    );
  }

  return (
    <>
      <Header
        title='Sua entrega'
        imgSrc={onlineExperienceImage}
        description='Confirme o recebimento do seu pedido e avalie como foi a entrega'
        instructions='Marque os procedimentos que você observou que foram feitos'
      />
      <Form onSubmit={handleSubmit}>
        <ProcedureCheckListContainer>
          {
            data.map(procedure => (
              <ProcedureCheckListSection key={procedure.id}>
                <strong>{procedure.title}</strong>
                {
                  procedure.steps.map(step => (
                    <span>
                      <input type='checkbox' id={step} />
                      <label for={step}>{step}</label>
                    </span>
                  ))
                }
              </ProcedureCheckListSection>
            ))
          }
        </ProcedureCheckListContainer>
        <EvaluationTextContainer>
          <strong>Conte-nos um pouco de como foi sua experiência</strong>
          <textarea placeholder='Sinta-se livra para escrever aqui...' value={evaluationText} onChange={e => setEvaluationText(e.target.value)} />
          <span>
            <input type='checkbox' value={receivedProduct} onChange={() => setReceivedProduct(!receivedProduct)} checked={receivedProduct} />
            <label>Recebi o produto e avaliei a entrega “cuidadosamente”</label>
          </span>
          <button type='submit'>ENVIAR AVALIAÇÃO</button>
          <p>Não recebeu seu produto?</p>
          <a href='#'>Clique aqui para entrar em contato</a>
        </EvaluationTextContainer>
      </Form>
      <Footer />
    </>
  );
}

export default EvaluateDelivery;