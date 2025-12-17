import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './shared/styles/css-global.css';

import Home from './modules/Home/pages/Home';
import Admin from './modules/Admin/pages/Admin';
import Cadastro from './modules/Auth/pages/Cadastro';
import Atividade3 from './modules/Atividades/pages/Atividade3';
import Atividade4 from './modules/Atividades/pages/Atividade4';
import CreateTour from './modules/Tours/pages/CreateTour';
import AdministracaoUsuarios from './modules/Admin/pages/AdministracaoUsuarios';
import SejaParceiro from './modules/Tours/pages/SejaParceiro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/admin/usuarios" element={<AdministracaoUsuarios />} />

        <Route path="/seja-parceiro" element={<SejaParceiro />} />

        <Route path="/CreateTours" element={<CreateTour />} />

        <Route path="/atividade-3" element={<Atividade3 />} />

        <Route path="/atividade-4" element={<Atividade4 />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;