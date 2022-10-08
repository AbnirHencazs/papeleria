import { Routes, Route, useLocation } from 'react-router-dom';
import {
  Cart,
  EditProfile,
  Navbar,
  OrderSuccess,
  Summary,
  Tabs,
  LeftSidebar,
  RightSidebar
} from './components';
import styles from './Profile.module.scss';

const Profile = () => {
  const currentLocation = useLocation().pathname;
  const isRightSidebarRendered = currentLocation !== '/profile/editProfile';

  const profileContentClass = isRightSidebarRendered
    ? styles.profileContent
    : styles.profileContentEditProfile;

  return (
    <div className={styles.root}>
      <LeftSidebar />
      <div className={profileContentClass}>
        <Navbar />
        <Routes>
          <Route path="tabs" element={<Tabs />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orderSuccess" element={<OrderSuccess />} />
          <Route path="summary" element={<Summary />} />
        </Routes>
      </div>
      {isRightSidebarRendered && <RightSidebar />}
    </div>
  );
};

export default Profile;
