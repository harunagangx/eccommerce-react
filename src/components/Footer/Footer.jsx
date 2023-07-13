import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import paymentImg from '../../images/payment.png';
import '../../sass/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <h1>FurniShop</h1>

              <p className="footer_text mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
                quia autem. Alias laboriosam ipsam voluptatibus nisi pariatur
                recusandae hic voluptate.
              </p>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick-links__title mb-2">Studio</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Visit our store</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">About us</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Our Blog</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Craftsmanship</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Apply for job</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick-links__title mb-2">Shopping</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Online Payment</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Gift Cards</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Return Policy</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Furniture Assembling</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Shipping Methods</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick-links__title mb-2">Payment Methods</h4>
              <p className="mt-3">
                Select one of many supported payment providers from the list
                below.
              </p>
              <div className="mt-4">
                <img src={paymentImg} alt="" />
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__copyright mt-3">
              <p className="text-center mt-2">
                © 2023 Copyright, All Rights Reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
