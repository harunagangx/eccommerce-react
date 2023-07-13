import React, { useEffect, useRef } from 'react';
import { Container, Row } from 'reactstrap';
import { BiShoppingBag, BiMenu, BiHeart } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
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
              <h1>FurniShop</h1>
            </div>

            <div className="navigation">
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
              <span className="fav__icon">
                <BiHeart />
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <BiShoppingBag />
                <span className="badge">1</span>
              </span>
              <div className="nav__mobile">
                <span>
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
