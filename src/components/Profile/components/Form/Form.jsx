import { Row, Col } from 'reactstrap';
import styles from './Form.module.scss';

const Form = () => {
  return (
    <div className={styles.root}>
      <form action="">
        <Row className={styles.row}>
          <Col className={styles.col} lg="6">
            <input type="text" placeholder="Cli Clave" name="" id="" />
            <input type="text" placeholder="RFC" name="" id="" />
          </Col>
          <Col className={styles.col} lg="6">
            <input type="text" placeholder="Uso de CFDI" name="" id="" />
            <input type="text" placeholder="Forma de pago" name="" id="" />
          </Col>
          <Col className={styles.col} lg="6">
            <input type="text" placeholder="Nombre" name="" id="" />
          </Col>
          <Col className={styles.col} lg="6">
            <input type="text" placeholder="Metodo de Pago" name="" id="" />
            <input type="text" placeholder="Con. de Pago" name="" id="" />
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Form;
