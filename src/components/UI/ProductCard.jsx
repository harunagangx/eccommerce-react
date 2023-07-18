import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../sass/components/ProductCard.scss';

const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="6" className="pt-4">
      <div className="product__item p-2">
        <div className="product__img">
          <Link to={`/shop/${item.id}`}>
            <img src={item.imgUrl} alt="" />
          </Link>
        </div>
        <h3 className="product__name p-2">
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h3>
        <div className="card__bottom ps-2 pe-2 pb-2 d-flex align-items-center justify-content-between">
          <span className="price">${item.price}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
