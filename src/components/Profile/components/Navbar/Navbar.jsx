import { useContext } from 'react';
import { AppContext } from '../../../../App';
import bell from '../../../../assets/icons/bell.svg';
import search from '../../../../assets/icons/search.svg';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { appContext } = useContext(AppContext);
  const currentDate = new Date();

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  };

  const formatDate = (date) => {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear()
    ].join('/');
  };

  return (
    <div className={styles.root}>
      <h2>
        Hola {appContext.user.Nombre_Comercial} <span>{formatDate(currentDate)}</span>
      </h2>
      <div className={styles.search}>
        <img src={bell} alt="bell" />
        <form action="">
          <img src={search} alt="search" />
          <input type="search" name="" id="" />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
