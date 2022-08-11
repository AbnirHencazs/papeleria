import { Row, Col } from 'reactstrap';
import brandsLogosGrey from '../../../../assets/icons/brandsLogosGrey.svg';
import facebook from '../../../../assets/icons/facebook.svg';
import instagram from '../../../../assets/icons/instagram.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.root}>
      <Row className={styles.row}>
        <Col className={styles.leftCol}>
          <h1>Garantía y confianza que hace la diferencia</h1>
          <p>
            <li>
              <b>Garantía:</b> Manejamos gran variedad de las mejores marcas que garantizan una alta
              calidad.
            </li>
            <li>
              <b>Entrega:</b> Entregamos a domicilio y los muebles armados, para su entera
              satisfacción.
            </li>
            <li>
              <b>Honestidad:</b> Entregamos lo que ofrecemos en el tiempo que nos comprometemos.
            </li>
            <li>
              <b>Asesoría personalizada:</b> Damos su mejor opción según sus necesidades y
              presupuesto.
            </li>
            <li>
              <b>Atención:</b> Contamos con servicio de Contact Center para sus requerimientos y
              pedidos.
            </li>
          </p>
          <img src={brandsLogosGrey} alt="brandsLogosGrey" />
          <a href="">Aviso de privacidas</a>
          <a href="">Políticas de garantía</a>
        </Col>

        <Col className={styles.rightCol}>
          <div className={styles.rightColContainer}>
            <div>
              <h3>Sucursal cln:</h3>
              <span>
                <b>Dirección:</b> Rafael Buelna #546 Ote. Col. Centro, Culiacán, Sinaloa <br />
                <b>Teléfonos:</b> (667)7130100 y (667)7132560 <br />
                <b>Correo:</b> ventas@equiposdeoficina.mx <br />
                <b>Horario:</b> 9:00am-5:30pm
              </span>
            </div>
            <br />
            <br />
            <div>
              <h3>Sucursal mzt:</h3>
              <span>
                <b>Dirección:</b> Cruz Lizárraga #705 Col. Palos Prietos, Mazatlán, Sinaloa <br />
                <b>Teléfonos:</b> (669)9824350 y (669)9824267 <br />
                <b>Correo:</b> ventas@equiposdeoficina.mx <br />
                <b>Horario:</b> 9:00am-5:30pm
              </span>
            </div>
            <br />
            <a href="/login">
              <div>
                Regístrate <span>Regístrate y cotiza</span>
              </div>
            </a>
            <div className={styles.images}>
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
            </div>
          </div>
          <p>Equipos de oficina 2021 - Todos los derechos reservados.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
