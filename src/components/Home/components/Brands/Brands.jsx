import styles from './Brands.module.scss';
import { Row, Col } from 'reactstrap';
import brandsLogos from '../../../../assets/icons/brandsLogos.svg';

const Brands = () => {
  return (
    <div className={styles.root}>
      <Row className={styles.row}>
        <Col lg={5} xs={12} className={styles.col}>
          <h1>Dedicados a cubrir todas las necesidades de insumos de oficina a domicilio</h1>
          <p>
            COMERCIOS UNIDOS SA DE CV, es una empresa dedicada a la venta de papelería y muebles de
            oficina, así como equipos, consumibles y accesorios de computo. Fue fun dada en 1944,
            contando en la actualidad con 64 colaboradores dedicados a la satisfacción de nuestros
            clientes en nuestros tres domicilios en las ciudades de Culiacán y Mazatlán. Nuestro
            compromiso siempre ha sido ofrecer al mercado, productos de primera calidad a precios
            competitivos y entregados a satisfacción de cada cliente directamente en su domicilio.
          </p>
        </Col>

        <Col lg={2}></Col>

        <Col lg={5} xs={12} className={styles.col}>
          <img src={brandsLogos} alt="logos" />
        </Col>
      </Row>
    </div>
  );
};

export default Brands;
