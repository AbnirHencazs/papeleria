import profileGrey from '../../../../assets/icons/profileGrey.svg';
import check from '../../../../assets/icons/check.svg';
import trash from '../../../../assets/icons/trash.svg';
import plus from '../../../../assets/icons/plus.svg';
import cartBlue from '../../../../assets/icons/cartBlue.svg';
import styles from './RightSidebar.module.scss';

const RightSidebar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.userInfo}>
        <div className={styles.profile}>
          <img src={profileGrey} alt="" />
          <p>
            Arturo S.
            <a href="">Editar</a>
          </p>
        </div>

        <a className={styles.logout} href="/">
          Salir
        </a>
      </div>

      <div className={styles.userOptions}>
        <p>
          Cargar Consumos
          <img src={plus} />
        </p>
        <a href="">
          <img src={check} />
          Guardar
        </a>
        <a href="">
          <img src={trash} />
          Eliminar contacto
        </a>
      </div>

      <div className={styles.cart}>
        <a href="">
          <img src={cartBlue} />
          Finalizar compra
        </a>
        <div className={styles.cartTotal}>
          <p>Sub Total</p>
          <p>15% IVA</p>
          <p>Total</p>
        </div>
      </div>

      <p className={styles.footer}>Equipos de Oficina 2021 - Todos los derechos reservados.</p>
    </div>
  );
};

export default RightSidebar;
