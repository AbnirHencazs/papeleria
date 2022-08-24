import { useState, useEffect } from 'react';
import axios from 'axios';
import placeholder from '../../../../assets/images/placeholder.jpg';
import { Row, Col } from 'reactstrap';
import styles from './ProductGrid.module.scss';

const ProductGrid = () => {
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
          <Col lg={3} key={index} className={styles.col}>
            <img src={placeholder} alt="" />
            <h3>{product.Nombre}</h3>
            <p>{product.Descripcion}</p>
            <h3>{`$${product.PrecioLista}`}</h3>
            <button>Añadir al carrito</button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductGrid;
