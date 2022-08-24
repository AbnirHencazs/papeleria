import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import placeholder from '../../../../assets/images/placeholder.jpg';
import styles from './ProductList.module.scss';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    return await axios
      .get('https://safe-inlet-39255.herokuapp.com/api/v1/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.root}>
      <Row className={styles.row}>
        {products.map((product, index) => (
          <Col lg={12} key={index} className={styles.col}>
            <Row className={styles.productRow}>
              <Col xs={9}>
                <div className="d-flex">
                  <img src={placeholder} alt="" />
                  <div>
                    <h3>{product.Nombre}</h3>
                    <p>{product.Descripcion}</p>
                  </div>
                </div>
              </Col>
              <Col xs={3}>
                <h3>{`$${product.PrecioLista}`}</h3>
                <button>Añadir al carrito</button>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
