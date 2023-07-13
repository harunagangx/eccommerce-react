import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import services from '../../constants/services';

import '../../sass/components/Services.scss';

const Services = () => {
  return (
    <section className="services__section">
      <Container>
        <Row>
          {services.map((service, index) => (
            <Col lg="3" md="6" key={index}>
              <div className="service__item">
                <span>{service.icon}</span>
                <div className="service__content">
                  <h3>{service.title}</h3>
                  <p className="mt-2">{service.subTitle}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
