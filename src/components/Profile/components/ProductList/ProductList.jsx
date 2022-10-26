import { useContext } from 'react';
import { AppContext } from '../../../../App';
import { Row, Col } from 'reactstrap';
import placeholder from '../../../../assets/images/placeholder.jpg';
import styles from './ProductList.module.scss';

const ProductList = () => {
  const { appContext } = useContext(AppContext);

  return (
    <div className={styles.root}>
      <Row className={styles.row}>
        {appContext.products.map((product, index) => (
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
                <h3>{`$${product.Precio}`}</h3>
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
