import { Row, Col } from 'reactstrap';
import check from '../../../../assets/icons/check.svg';
import chair from '../../../../assets/images/chair.jpg';
import placeholder from '../../../../assets/images/placeholder.jpg';
import desk from '../../../../assets/images/desk.jpg';
import styles from './OrderSuccess.module.scss';

const OrderSuccess = () => {
  const products = [{ imageLink: chair }, { imageLink: placeholder }, { imageLink: desk }];

  return (
    <div className={styles.root}>
      <div className={styles.orderDetails}>
        <h2>
          <img src={check} alt="" />
          <div>
            Pedido realizado, ¡gracias! <span>Se enviará la confirmación a tu email</span>
          </div>
        </h2>
        <p>Enviado a Arturo S.</p>
      </div>
      <div className={styles.shippingInfo}>
        <h2>
          Lunes, 30 de mayo <span>Fecha de entrega estimada</span>
        </h2>
        <Row className={styles.productsRow}>
          {products.map((product, index) => (
            <Col lg={2} key={index} className={styles.productsCol}>
              <img src={product.imageLink} alt="" />
            </Col>
          ))}
        </Row>
        <div className={styles.invoiceInfo}>
          <p>
            Factura electrónica (CFDI)
            <span>
              Tu factura será enviada a tu correo electrónico 15 días después de tu compra.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
