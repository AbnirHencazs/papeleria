import logo from '../../assets/icons/logo.svg';
import profile from '../../assets/icons/profile.svg';
import loginBackground from '../../assets/images/loginBackground.png';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.root}>
      <div className={styles.background}>{<img src={loginBackground} alt="background" />}</div>

      <div className={styles.loginFormContainer}>
        <img className={styles.logo} src={logo} alt="logo" />

        <form action="">
          <img className={styles.profile} src={profile} alt="profile" />
          <input type="email" name="" id="" placeholder="Usuario" />
          <input type="password" name="" id="" placeholder="Contraseña" />
          <div className={`d-flex ${styles.formFooter}`}>
            <div className="d-flex align-items-center">
              <input type="checkbox" name="" id="" placeholder="Recordar contraseña" />
              <label htmlFor="">Recordar</label>
            </div>
            <a href="">Olvidaste tu contraseña</a>
          </div>
          <a className={styles.submit} href="/profile/tabs">
            Entrar
          </a>
        </form>

        <div className={styles.footer}>
          <p>Equipos de oficina 2021 - Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
