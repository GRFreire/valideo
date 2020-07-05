import React from 'react';

import {
  Container,
  Title,
  DateText,
  ProceduresContainer,
  Procedure,
  Photo,
  ProcedureInformation,
  ProcedureTitle,
  ProcedureDescription,
} from './styles';

function ProcedureCard(props) {
  return (
    <Container position={props.position || 'center'} >
      <Title>{props.title}</Title>
      <DateText>{props.dateText}</DateText>
      <ProceduresContainer>
        {props.procedures.map((procedure => (
          <Procedure key={procedure.id}>
            <Photo src={procedure.img} alt={props.title} imgSize={80} />
            <ProcedureInformation>
              <ProcedureTitle>{procedure.title}</ProcedureTitle>
              <ProcedureDescription>{procedure.description}</ProcedureDescription>
            </ProcedureInformation>
          </Procedure>
        )))}
      </ProceduresContainer>
    </Container>
  );
}

export default ProcedureCard;