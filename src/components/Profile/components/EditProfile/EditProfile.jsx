import { Row, Col } from 'reactstrap';
import profileGrey from '../../../../assets/icons/profileGrey.svg';
import upload from '../../../../assets/icons/upload.svg';
import styles from './EditProfile.module.scss';

const EditProfile = () => {
  return (
    <div className={styles.root}>
      <Row className={styles.row}>
        <Col lg={2} className={styles.leftCol}>
          <img className={styles.profile} src={profileGrey} alt="" />
          <div className={styles.upload}>
            <img src={upload} alt="" />
            <p>Reemplazar</p>
          </div>
        </Col>
        <Col lg={9} className={styles.rightCol}>
          <h3>Datos de perfil</h3>
          <form className={styles.formContainer} action="">
            <Row className={styles.formRow}>
              <Col className={styles.formLeftCol}>
                <div className={styles.dFlex}>
                  <input type="text" name="signUpDate" placeholder="Fechas de Alta" />
                  <input type="text" name="rfc" placeholder="RFC" />
                </div>
                <input type="text" name="fiscalName" placeholder="Nombre Fiscal" />
                <input type="text" name="comercialName" placeholder="Nombre Comercial" />
                <input type="text" name="buyer" placeholder="Comprador" />
                <input type="text" name="payments" placeholder="Enc de Pagos" />
                <input type="text" name="street" placeholder="Nombre Calle" />
                <input type="text" name="streetRef" placeholder="Ref. Calle 1" />
                <div className={styles.dFlex}>
                  <input type="text" name="externalNo" placeholder="No. Exterior" />
                  <select name="state" id="state">
                    <option value="label">Estado</option>
                  </select>
                </div>
                <div className={styles.dFlex}>
                  <select name="paymentDay" id="paymentDay">
                    <option value="label">Día de Cobranza</option>
                  </select>
                  <select name="reviewDay" id="reviewDay">
                    <option value="label">Día Revisión</option>
                  </select>
                </div>
              </Col>
              <Col className={styles.formRightCol}>
                <div className={styles.dFlex}>
                  <input type="text" name="contactID" placeholder="ID Contacto" />
                  <input type="text" name="cliKey" placeholder="Cli_clave" />
                </div>
                <input type="text" name="fiscalEmail" placeholder="Email" />
                <input type="text" name="comercialEmail" placeholder="Email" />
                <input type="text" name="buyerEmail" placeholder="Email" />
                <div className={styles.dFlex}>
                  <input type="text" name="fiscalRegime" placeholder="Regimen Fiscal" />
                  <select name="shoppingHistory" id="shoppingHistory">
                    <option value="label">Hr. Compras</option>
                  </select>
                </div>
                <div className={styles.dFlex}>
                  <input type="text" name="neighborhood" placeholder="Colonia" />
                  <select name="type" id="type">
                    <option value="label">Giro</option>
                  </select>
                </div>
                <input type="text" name="streetRef2" placeholder="Ref. Calle 2" />
                <div className={styles.dFlex}>
                  <select name="city" id="city">
                    <option value="label">Ciudad</option>
                  </select>
                  <select name="cp" id="cp">
                    <option value="label">CP</option>
                  </select>
                  <select name="location" id="location">
                    <option value="label">Ubicación</option>
                  </select>
                </div>
                <div className={styles.dFlex}>
                  <input type="text" name="hrPayment" placeholder="Hr. Cobranza" />
                  <input type="text" name="to" placeholder="a" />
                </div>
              </Col>
            </Row>
            <div className={styles.paymentInfo}>
              <div>
                <select name="paymentType" id="paymentType">
                  <option value="label">Forma de pago</option>
                </select>
                <select name="paymentMethod" id="paymentMethod">
                  <option value="label">Método de pago</option>
                </select>
                <select name="cfdi" id="cfdi">
                  <option value="label">Uso de CFDI</option>
                </select>
              </div>
            </div>
            <button type="submit">Guardar ajustes</button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default EditProfile;
