import React from 'react';

import ProcedureCard from '../../components/ProcedureCard';
import Footer from '../../components/Footer';

import {
  Container,
  Title,
  Modal,
  ProductView,
  ProductPhoto,
  ModalPhoto,
  ModalInfo,
  ModalName,
  ModalProcedure,
} from './styles';

import tempProduct from '../../assets/images/tempProduct.png';
import tempImage from '../../assets/images/tempImage.png';

const procedures = [
  [
    { id: 0, title: 'Disponibilize uma máscara', description: 'A máscara de pano já é suficiente para te proteger', img: tempImage },
    { id: 1, title: 'Disponibilize álcool em gel', description: 'Caso não tenha álcool em gel, utilize álcool 70%', img: tempImage },
    { id: 2, title: 'Utilize máscara', description: 'O uso de máscara é essencial para mantê-lo seguro', img: tempImage },
    { id: 3, title: 'Higienize as mãos com álcool em gel', description: 'Lave bem as mãos', img: tempImage },
  ],
  [
    { id: 0, title: 'Disponibilize uma máscara', description: 'A máscara de pano já é suficiente para te proteger', img: tempImage },
    { id: 1, title: 'Disponibilize álcool em gel', description: 'Caso não tenha álcool em gel, utilize álcool 70%', img: tempImage },
    { id: 2, title: 'Utilize máscara', description: 'O uso de máscara é essencial para mantê-lo seguro', img: tempImage },
  ],
  [
    { id: 0, title: 'Disponibilize uma máscara', description: 'A máscara de pano já é suficiente para te proteger', img: tempImage },
    { id: 1, title: 'Disponibilize álcool em gel', description: 'Caso não tenha álcool em gel, utilize álcool 70%', img: tempImage },
    { id: 2, title: 'Utilize máscara', description: 'O uso de máscara é essencial para mantê-lo seguro', img: tempImage },
  ]
]

function DeliveryInstructions() {
  return (
    <Container>
      <Title>Adoramos dar boas notícias!</Title>
      <Modal>
        <ProductView>
          <ProductPhoto src={tempProduct} />
        </ProductView>
        <ModalInfo>
          <ModalName>Apple Iphone 11 Pro</ModalName>
          <ModalProcedure>Seu produto chegou na transportadora de sua cidade</ModalProcedure>
        </ModalInfo>
      </Modal>

      <ProcedureCard
        position="left"
        title="Antes da entrega"
        dateText="Hoje"
        procedures={procedures[0]}
      />
      <ProcedureCard
        position="center"
        title="Durante a entrega"
        dateText="Amanhã 12:00hrs"
        procedures={procedures[1]}
      />
      <ProcedureCard
        position="right"
        title="Após a entrega"
        procedures={procedures[2]}
      />

      <Modal>
        <ModalPhoto src={tempImage} />
        <ModalInfo>
          <ModalName>Experiência agrádavel e segura na entrega</ModalName>
        </ModalInfo>
      </Modal>

      <Footer />
    </Container>
  );
}

export default DeliveryInstructions;