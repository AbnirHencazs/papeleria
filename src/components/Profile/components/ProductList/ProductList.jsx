import { Row, Col } from 'reactstrap';
import chair from '../../../../assets/images/chair.jpg';
import placeholder from '../../../../assets/images/placeholder.jpg';
import desk from '../../../../assets/images/desk.jpg';
import chair2 from '../../../../assets/images/chair2.jpg';
import styles from './ProductList.module.scss';

const ProductList = () => {
  const products = [
    {
      imageLink: chair,
      title: 'Silla ejecutiva Reqüiez',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec condi.',
      price: 'Total: $19,600'
    },
    {
      imageLink: placeholder,
      title: 'Folder Oxford carta',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec condi.',
      price: 'Total: $1.30'
    },
    {
      imageLink: desk,
      title: 'Haken Drei',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec condi.',
      price: 'Total: $15,500'
    },
    {
      imageLink: chair2,
      title: 'Sillón ejecutivo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec condi.',
      price: 'Total: $22,200'
    }
  ];

  return (
    <div className={styles.root}>
      <Row className={styles.row}>
        {products.map((product, index) => (
          <Col lg={12} key={index} className={styles.col}>
            <Row className={styles.productRow}>
              <Col xs={9}>
                <div className="d-flex">
                  <img src={product.imageLink} alt="" />
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                </div>
              </Col>
              <Col xs={3}>
                <h3>{product.price}</h3>
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
