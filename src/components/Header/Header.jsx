import React, { useEffect, useRef } from 'react';
import { Container, Row } from 'reactstrap';
import { BiShoppingBag, BiMenu } from 'react-icons/bi';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../sass/components/Header.scss';

const nav__links = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('stick__header');
      } else {
        headerRef.current.classList.remove('stick__header');
      }
    });
  };

  const menuToggle = () => {
    menuRef.current.classList.toggle('active__menu')
  }

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  });

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <Link to="/home">
                <h1>FurniShop</h1>
              </Link>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'nav__active' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="cart__icon">
                <Link to="/cart">
                  <BiShoppingBag />
                </Link>
                {totalQuantity === 0 ? (
                  <></>
                ) : (
                  <span className="badge">{totalQuantity}</span>
                )}
              </span>
              <div className="nav__mobile">
                <span onClick={menuToggle}>
                  <BiMenu />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
