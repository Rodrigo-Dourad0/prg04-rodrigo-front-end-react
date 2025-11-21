import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/css-global.css'; // CSS Global importa aqui

import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Atividade3 from './pages/Atividade3';
import Atividade4 from './pages/Atividade4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/atividade-3" element={<Atividade3 />} />
        <Route path="/atividade-4" element={<Atividade4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;