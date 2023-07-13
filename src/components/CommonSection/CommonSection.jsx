import React from 'react';
import { Container } from 'reactstrap';
import '../../sass/components/CommonSection.scss';

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="w-100">
        <div className="d-flex align-content-center justify-content-between">
          <h1>{title}</h1>
        </div>
      </Container>
    </section>
  );
};

export default CommonSection;
