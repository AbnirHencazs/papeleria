import { Table } from 'reactstrap';
import brandsLogos from '../../../../assets/icons/brandsLogos.svg';
import styles from './Summary.module.scss';

const Summary = () => {
  return (
    <div className={styles.root}>
      <div className={styles.summaryDetails}>
        <h2>COTIZACIÓN</h2>
        <p>
          COMERCIOS UNIDOS S.A. DE C.V. RAFAEL BUENA No. 546 OTE. , COL. CENTRO CP 80000
          CUALIACAN,SIN TEL 667 712 4780 Y 667 713 4780 Internet: www.equiposdeoficina.mx correo:
          ventas@equipodeoficna.mx
        </p>

        <div className={styles.userDetails}>
          <div>
            <p>Nombre:</p>
            <p>Domicilio:</p>
            <p>Población:</p>
            <p>Atención:</p>
          </div>
          <div>
            <p>Cotización:</p>
            <p>Fecha:</p>
            <p>Cliente:</p>
          </div>
        </div>
        <p>Sometemos a su amable consideración nuestro presupuesto por los siguientes artículos:</p>
      </div>
      <Table className={styles.table}>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Descripción</th>
            <th>Precio Unitario</th>
            <th>Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>1</b>
            </td>
            <td>
              Cubiertas de melamina de 25 mm. Con canto termo-adherido de 2 mm al mismo color de la
              cubierta.
            </td>
            <td>
              <b>$19,600</b>
            </td>
            <td>
              <b>$19,600</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>4</b>
            </td>
            <td>Silla operativa</td>
            <td>
              <b>$9,900</b>
            </td>
            <td>
              <b>$39,600</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>200</b>
            </td>
            <td>Tijera sabonis</td>
            <td>
              <b>$22.5</b>
            </td>
            <td>
              <b>$4,500</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className={styles.footer}>
        <h4>OBSERVACIONES:</h4>
        <p>
          C: SUPERVISOR <br />
          Precios sujetos a cambio, sin previo aviso. <br />
          PAPELERIA Y MUEBLES PARA OFICINA.
        </p>
        <img src={brandsLogos} alt="logos" />
      </div>
    </div>
  );
};

export default Summary;
