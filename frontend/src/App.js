import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Tienda from './components/tienda/Tienda';
import Footer from './components/layouts/Footer';
import NavBar from './components/layouts/NavBar';
import RutaPrivada from './components/rutas/RutaPrivada';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/token';
import Menu from './components/usuarios/Menu';
import Baterias from './components/baterias/Baterias';
import BateriaState from './context/baterias/bateriaState';
import TiendaState from './context/tienda/tiendaState';
import BateriaCompra from './components/tienda/BateriaCompra';

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL)
  const token = localStorage.getItem('token');
  if (token) {
    tokenAuth(token);
  }

  return (

    <AuthState>
      <AlertaState>
        <BateriaState>
          <TiendaState>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="*" element={<h2>Error 404 - Pagina no encontrada</h2>} />
                <Route path="/" element={<Tienda />} />
                <Route path="/login" element={<Login />} />
                <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
                <Route path="/tienda/item/:id" element={<BateriaCompra />} />
                <Route path="/menu" element={<RutaPrivada />} >
                  <Route index element={<Menu />} />
                  <Route path="baterias" element={<Baterias />} />
                </Route>
              </Routes>
              <Footer />
            </BrowserRouter>
          </TiendaState>
        </BateriaState>
      </AlertaState>
    </AuthState>

  );
}

export default App;


// links de estar registrado
// - al comprar la bateria
// - menu usuario
// - agregar bateria

