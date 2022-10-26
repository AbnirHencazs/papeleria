import { useReducer, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { setAuthToken } from './hooks/api';
import { Home, Login, Profile } from './components';
export const AppContext = createContext({});
import { reducer } from './providers/reducer';

const App = () => {
  const [appContext, setAppContext] = useReducer(reducer, {
    products: [],
    user: {}
  });
  const token = localStorage.getItem('token');
  if (token) {
    setAuthToken(token);
  }
  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="profile/*" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
