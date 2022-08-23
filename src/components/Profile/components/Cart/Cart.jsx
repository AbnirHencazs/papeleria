import { Row, Col } from 'reactstrap';
import chair from '../../../../assets/images/chair.jpg';
import placeholder from '../../../../assets/images/placeholder.jpg';
import desk from '../../../../assets/images/desk.jpg';
import styles from './Cart.module.scss';

const Cart = () => {
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
    }
  ];

  return (
    <div className={styles.root}>
      <div className={styles.orderInfo}>
        <p>
          Pedido realizado<span>26 de mayo de 22</span>
        </p>
        <p>
          Total <span>$63,700</span>
        </p>
        <p>
          Enviar a <span>Calle nelson 421</span>
        </p>
        <div className={styles.orderNumber}>
          PEDIDO Nº 3080586
          <div className="d-flex">
            <a href="">Ver detalles del pedido</a>
            <a href="">Ver recibo</a>
          </div>
        </div>
      </div>
      <div className={styles.textBanner}>
        <p>
          Se requiere confirmación del pago
          <span>
            Confirmar método de pago usado en este pedido, o cambiar a otro método de pago. Si no se
            confirma, el pedido se cancelará automáticamente un día después de que se realizó.
          </span>
        </p>
      </div>
      <Row className={styles.row}>
        <Col lg={7} md={5} sm={12} className={styles.leftCol}>
          <Row className={styles.productsRow}>
            {products.map((product, index) => (
              <Col lg={12} key={index} className={styles.productsCol}>
                <img src={product.imageLink} alt="" />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={2}></Col>
        <Col lg={3} md={5} sm={12} className={styles.rightCol}>
          <a href="orderSuccess">Confirmar método de pago</a>
          <a href="">Cancelar productos</a>
          <a href="">Ver o editat pedidos</a>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
