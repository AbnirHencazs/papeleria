import { Outlet } from 'react-router-dom';
import { Form, LeftSidebar, Navbar, RightSidebar } from '../../components';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.root}>
      <LeftSidebar />
      <div className={styles.profileContent}>
        <Navbar />
        <Form />
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
