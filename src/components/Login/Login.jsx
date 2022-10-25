import { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import profile from '../../assets/icons/profile.svg';
import loginBackground from '../../assets/images/loginBackground.png';
import { login } from '../../hooks/api';
import styles from './Login.module.scss';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  // useEffect(() => {
  //   loginUser();
  // }, []);

  const loginUser = () => {
    login(user).then((window.location.href = '/profile/tabs'));
  };

  const onSumbit = () => {
    //{ username: '21231', password: '2022usuario#' }
    loginUser();
  };

  return (
    <div className={styles.root}>
      <div className={styles.background}>{<img src={loginBackground} alt="background" />}</div>

      <div className={styles.loginFormContainer}>
        <img className={styles.logo} src={logo} alt="logo" />

        <form>
          <img className={styles.profile} src={profile} alt="profile" />
          <input
            type="text"
            onChange={(event) => {
              setUser({ ...user, username: event.target.value });
            }}
            placeholder="Usuario"
          />
          <input
            type="password"
            onChange={(event) => {
              setUser({ ...user, password: event.target.value });
            }}
            placeholder="Contraseña"
          />
          <div className={`d-flex ${styles.formFooter}`}>
            <div className="d-flex align-items-center">
              <input type="checkbox" name="" id="" placeholder="Recordar contraseña" />
              <label htmlFor="">Recordar</label>
            </div>
            <a href="">Olvidaste tu contraseña</a>
          </div>
          <a onClick={onSumbit} className={styles.submit}>
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
