import { useState, useEffect, useContext } from 'react';
import { actions } from '../../../../providers/reducer';
import { AppContext } from '../../../../App';
import { getProducts } from '../../../../hooks/api';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { ProductGrid, ProductList } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCells, faTableList } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import styles from './Tabs.module.scss';

const Tabs = () => {
  const { setAppContext } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('1');

  const setProducts = () => {
    return getProducts().then((response) => {
      setAppContext({ type: actions.SET_PRODUCTS, payload: response.data });
    });
  };

  useEffect(() => {
    setProducts();
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className={styles.root}>
      <Nav className={styles.nav} tabs>
        <NavItem className={styles.links}>
          <a href="">Pedidos</a>
          <a href="">Comprar de Nuevo</a>
          <a href="">Pendiente de envío</a>
          <a href="">Pedidos cancelados</a>
          <select defaultValue="option1" name="" id="">
            <option name="option1" value="option1">
              Ultimos 30 días
            </option>
          </select>
        </NavItem>
        <NavItem className={styles.grid}>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}>
            <FontAwesomeIcon icon={faTableCells} />
          </NavLink>
        </NavItem>
        <NavItem className={styles.list}>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}>
            <FontAwesomeIcon icon={faTableList} />
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <ProductGrid />
        </TabPane>
        <TabPane tabId="2">
          <ProductList />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
