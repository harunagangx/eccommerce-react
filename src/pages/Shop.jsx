import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BiSearch } from 'react-icons/bi';
import ProductList from '../components/UI/ProductList';
import products from '../constants/product';
import CommonSection from '../components/CommonSection/CommonSection';
import '../sass/pages/Shop.scss';

const Shop = () => {
  const [productData, setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === 'all') {
      setProductData(products);
    } else {
      const filteredProducts = products.filter(
        (item) => item.category === filterValue
      );
      setProductData(filteredProducts);
    }
  };

  const handleSort = (e) => {
    const sortValue = e.target.value;

    const sortedProducts = [...productData];

    if (sortValue === 'ascending') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProductData(sortedProducts);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProduct = products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setProductData(searchedProduct);
  };

  return (
    <>
      <CommonSection title="Shop" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6" sm="6">
              <div className="filter__widget">
                <select defaultValue="#" onChange={handleFilter}>
                  <option value="#" hidden disabled>
                    Filter By Category
                  </option>
                  <option value="all">All</option>
                  <option value="bed">Bed</option>
                  <option value="chair">Chair</option>
                  <option value="frame">Frame</option>
                  <option value="lamp">Lamp</option>
                  <option value="sofa">Sofa</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6">
              <div className="filter__widget">
                <select defaultValue="#" onChange={handleSort}>
                  <option value="#" hidden disabled>
                    Filter By Price
                  </option>
                  <option value="ascending">Lowest To Highest</option>
                  <option value="decreasing">Highest To Lowest</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search....."
                  onChange={handleSearch}
                />
                <span>
                  <BiSearch />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productData.length === 0 ? (
              <h1 className="text-center">No products are found!</h1>
            ) : (
              <ProductList data={productData} />
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shop;
