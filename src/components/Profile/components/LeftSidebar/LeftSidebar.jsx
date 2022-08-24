import logo from '../../../../assets/icons/logo.svg';
import starGrey from '../../../../assets/icons/starGrey.svg';
import percentGrey from '../../../../assets/icons/percentGrey.svg';
import tableGrey from '../../../../assets/icons/tableGrey.svg';
import chairGrey from '../../../../assets/icons/chairGrey.svg';
import pencilGrey from '../../../../assets/icons/pencilGrey.svg';
import foodGrey from '../../../../assets/icons/foodGrey.svg';
import styles from './LeftSidebar.module.scss';

const LeftSidebar = () => {
  const list = [
    {
      icon: tableGrey,
      label: 'MUEBLES'
    },
    {
      icon: chairGrey,
      label: 'SILLAS'
    },
    {
      icon: pencilGrey,
      label: 'PAPELERÍA'
    },
    {
      icon: foodGrey,
      label: 'RESTAURANTE'
    }
  ];
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <a href="tabs">
          <img src={starGrey} alt="star" />
          FAVORITOS
        </a>
        <a href="summary">
          <img src={percentGrey} alt="percent" />
          COTIZAR
        </a>
        <p>PRODUCTOS</p>
        {list.map((item, index) => (
          <a key={index} href="tabs">
            <img src={item.icon} alt={index} />
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
