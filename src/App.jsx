import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Profile, Register } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
