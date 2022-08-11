import { Routes, Route } from 'react-router-dom';
import { Cart, Dashboard, OrderSuccess, Summary, Tabs } from './components';
import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={styles.root}>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="tabs" element={<Tabs />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orderSuccess" element={<OrderSuccess />} />
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Profile;
