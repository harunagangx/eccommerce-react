import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import heroImg from '../images/hero-img.png';
import Services from '../components/Services/Services';
import ProductList from '../components/UI/ProductList';
import products from '../constants/product';
import '../sass/pages/Home.scss';

const Home = () => {
  const year = new Date().getFullYear();

  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSaleProduct, setBestSaleProduct] = useState([]);

  useEffect(() => {
    const filteredTrending = products.filter((item) => item.id <= 4);

    const filteredBestSales = products.filter(
      (item) => item.category === 'chair' || item.category === 'lamp'
    );

    setTrendingProduct(filteredTrending);
    setBestSaleProduct(filteredBestSales);
  }, []);

  return (
    <>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content pt-4">
                <p className="hero__subtitle"> Trending product in {year}</p>
                <h2>Hack your space - Hack your life</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam id reiciendis quod tempora consectetur nemo
                  necessitatibus fuga porro, sapiente iure.
                </p>
                <button className="buy__btn mt-3">
                  <Link to="/shop">Shop now</Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={heroImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Product in {year}</h2>
            </Col>
            <ProductList data={trendingProduct} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestSaleProduct} />
          </Row>
        </Container>
      </section>

      <Services />
    </>
  );
};

export default Home;
