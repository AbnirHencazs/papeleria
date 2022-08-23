import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, Profile } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile/*" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
