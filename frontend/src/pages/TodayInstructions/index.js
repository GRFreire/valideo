import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import tempImage from '../../assets/images/tempImage.png'

import { Container, SectionContainer, Sections, Section, SectionTitle, Steps, Step, Icon, StepDescription } from './styles';

const sections = [
  { id: 1, title: 'Antes da entrega', steps: [
    'Deixe uma autorização na portaria do seu prédio para o entregador',
    'Disponibilize uma máscara',
    'Disponibilize álcool em gel',
    'Utilize máscara',
    'Higienize as mãos com álcool em gel'
  ] },
  { id: 2, title: 'Na entrega', steps: [
    'Encontre o entregador',
    'Tome distância de 1.5m',
    'Receba o produto'
  ] },
  { id: 3, title: 'Após a entrega, como higienizar seu produto', steps: [
    'Disponibilize uma máscara',
    'Disponibilize álcool em gel',
    'Utilize máscara',
  ] },
]

function TodayInstructions() {
  return (
    <Container>
      <Header
        title="É Hoje"
        imgSrc={tempImage}
        description="Você receberá seu pedido pela FedEx"
        instructions="Esses são os procedimentos que recomendamos que você siga"
      />

      <SectionContainer>
        <Sections>
          {sections.map((section) => (
            <Section key={section.id}>
              <SectionTitle>{section.title}</SectionTitle>
              <Steps>
                {section.steps.map((step) => (
                  <Step key={step}>
                    <Icon><FiCheckCircle size={24} color='#2CAFDC' /></Icon>
                    <StepDescription>{step}</StepDescription>
                  </Step>
                ))}
              </Steps>
            </Section>
          ))}
        </Sections>
      </SectionContainer>

      <Footer />
    </Container>
  );
}

export default TodayInstructions;
