import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/icons/logo.svg';
import searchWhite from '../../../../assets/icons/searchWhite.svg';
import cart from '../../../../assets/icons/cart.svg';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [state] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.length) {
      navigate('/');
    }
  }, []);

  const goToProfile = () => {
    navigate('/profile/tabs');
  };

  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo" />

        <div className={styles.contact}>
          <p>
            <span>Culiacán</span>
            663 713 0100
          </p>
          <p>
            <span>Mazatlán</span>
            669 982 4350
          </p>
        </div>
      </div>

      <div className={styles.search}>
        <img src={searchWhite} alt="search" />
        <input type="search" name="search" id="search" placeholder="Busca aquí lo que necesitas" />
      </div>

      <div className={styles.profile}>
        <button onClick={goToProfile}>Mi cuenta</button>
        <a href="">
          <img src={cart} alt="cart" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
