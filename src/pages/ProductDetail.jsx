import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../constants/product';
import CommonSection from '../components/CommonSection/CommonSection';
import ProductList from '../components/UI/ProductList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import '../sass/pages/ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const productInfo = products.find((item) => item.id === id);

  const dispatch = useDispatch();

  const { name, imgUrl, price, category, shortDesc, description } = productInfo;

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: id,
        name: name,
        imgUrl: imgUrl,
        price: price,
      })
    );
  };

  const [relatedProducts, setRelatedProduct] = useState([]);

  useEffect(() => {
    const filteredRelated = products.filter(
      (item) => item.category === category && item.id !== id
    );

    setRelatedProduct(filteredRelated);
  }, [id, category]);

  return (
    <>
      <CommonSection title="Product Page" />

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" className="product__img" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{name}</h2>
                <p>${price}</p>
                <p>{shortDesc}</p>
                <button className="buy__btn w-100" onClick={addToCart}>Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0 pb-3">
        <Container>
          <Row>
            <Col lg="12">
              <div className="description__section">
                <h1>Description</h1>
                <p>{description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pb-3'>
        <Container>
          <Row>
            <Col lg="12">
              <h1>Related Products</h1>
            </Col>
            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetail;
