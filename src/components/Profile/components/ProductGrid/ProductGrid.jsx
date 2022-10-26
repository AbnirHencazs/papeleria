import { useContext } from 'react';
import placeholder from '../../../../assets/images/placeholder.jpg';
import { Row, Col } from 'reactstrap';
import { AppContext } from '../../../../App';
import styles from './ProductGrid.module.scss';

const ProductGrid = () => {
  const { appContext } = useContext(AppContext);

  return (
    <div className={styles.root}>
      <Row className={styles.row}>
        {appContext.products.map((product, index) => (
          <Col lg={3} key={index} className={styles.col}>
            <img src={placeholder} alt="" />
            <h3>{product.Nombre}</h3>
            <p>{product.Descripcion}</p>
            <h3>{`$${product.Precio}`}</h3>
            <button>Añadir al carrito</button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductGrid;
