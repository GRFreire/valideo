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

import onlineMarketImage from '../../assets/images/online-market.jpg';
import maskImage from '../../assets/images/mask.jpg';
import disinfectantImage from '../../assets/images/disinfectant.jpg';
import packageImage from '../../assets/images/package.jpg';


const procedures = [
  [
    { id: 0, title: 'Separe uma máscara', description: 'Uma máscara de pano já é suficiente para te proteger', img: maskImage },
    { id: 1 , title: 'Separe álcool em gel', description: 'Caso não tenha álcool em gel, utilize álcool 70%', img: disinfectantImage }
  ],
  [
    { id: 0, title: 'Utilize máscara', description: 'O uso de máscara é essencial para mantê-lo seguro', img: maskImage },
    { id: 1, title: 'Pegue a encomenda sem contato', description: 'Mantenha uma distancia de no mínimo 1.5m', img: packageImage },
    { id: 2, title: 'Utilize álcool em gel', description: 'Lembre-se de se higeniezar com frequencia', img: disinfectantImage },
  ],
  [
    { id: 0, title: 'Retire a encomenda da embalagem', description: 'Tenha cuidado e atente-se onde a embalagem será descartada', img: packageImage },
    { id: 1, title: 'Higienize as mãos com álcool em gel', description: 'Caso não tenha álcool em gel, utilize álcool 70%', img: disinfectantImage },
    { id: 2, title: 'Retire a máscara', description: 'Retire sua máscara com segurança e a lave', img: maskImage },
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
        <ModalPhoto src={onlineMarketImage} />
        <ModalInfo>
          <ModalName>Experiência agrádavel e segura na entrega</ModalName>
        </ModalInfo>
      </Modal>

      <Footer />
    </Container>
  );
}

export default DeliveryInstructions;