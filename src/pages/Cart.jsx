import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/CommonSection/CommonSection';
import { useSelector } from 'react-redux';
import emptyImg from '../images/empty-cart.png';
import CartItem from '../components/CartItem/CartItem';
import '../sass/pages/Cart.scss';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <CommonSection title="Cart" />

      <section className="pb-0">
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <img
                  src={emptyImg}
                  alt=""
                  className="h-75 w-75 object-fit-cover"
                />
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <CartItem item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <div className="cart__right">
                <h6 className='text-center'>Subtotal</h6>
                <p className='text-center'>${cartTotal}</p>
                <p className='text-center'>Not including taxes and shipping fee</p>
                <div className='p-2'>
                  <button className="buy__btn">Check out</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cart;
