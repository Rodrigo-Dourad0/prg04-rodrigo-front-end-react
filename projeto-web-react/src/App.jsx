import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import './shared/styles/css-global.css';

import { AuthProvider, AuthContext } from './context/AuthContext';
import Navbar from './shared/components/Navbar';

import Home from './modules/Home/pages/Home';
import Admin from './modules/Admin/pages/Admin';
import Cadastro from './modules/Auth/pages/Cadastro';
import Atividade3 from './modules/Atividades/pages/Atividade3';
import Atividade4 from './modules/Atividades/pages/Atividade4';
import CreateTour from './modules/Tours/pages/CreateTour';
import AdministracaoUsuarios from './modules/Admin/pages/AdministracaoUsuarios';
import SejaParceiro from './modules/Tours/pages/SejaParceiro';
import Perfil from './modules/User/pages/Perfil';
import GerirRoteiros from './modules/Tours/pages/GerirRoteiros';
import MinhasViagens from './modules/Tours/pages/MinhasViagens';
import MinhasReservas from './modules/Reservas/pages/MinhasReservas';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) return <div>Carregando...</div>;

  return authenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} /> 
          
          <Route 
            path="/perfil" 
            element={
              <PrivateRoute>
                <Perfil />
              </PrivateRoute>
            } 
          />

          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/usuarios" element={<AdministracaoUsuarios />} />
          <Route path="/seja-parceiro" element={<SejaParceiro />} />
          <Route path="/CreateTours" element={<CreateTour />} />
          <Route path="/atividade-3" element={<Atividade3 />} />
          <Route path="/atividade-4" element={<Atividade4 />} />
          <Route path="/gerir-roteiros" element={<GerirRoteiros />} />
          
          <Route 
            path="/minhas-viagens" 
            element={
              <PrivateRoute>
                <MinhasViagens />
              </PrivateRoute>
            } 
          />

          <Route 
            path="/minhas-reservas" 
            element={
              <PrivateRoute>
                <MinhasReservas />
              </PrivateRoute>
            } 
          />
        </Routes>

        <ToastContainer 
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;