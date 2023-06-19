import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import AuthContext from "../../context/autenticacion/authContext";

const NavBar = () => {

  const authContext = useContext(AuthContext);
  const { usuario, autenticado, usuarioAutenticado, cerrarSesion } = authContext;

  useEffect(() => {


    usuarioAutenticado();


  }, []);


  return (
    <nav className="navbar navbar-expand-sm bg-danger navbar-dark sticky-top">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand logo"> <img src={logo} alt="" /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          {usuario ?

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <p className="navbar-text text-white usuario-navbar">Bienvenido {usuario.nombre}</p>
              </li>

              <li className="nav-item">
                <Link to={"/menu"} className="nav-link text-white">Menu</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger" data-testid='cerrarsesion' onClick={() => cerrarSesion()}>cerrar sesión</button>
              </li>
            </ul>

            :

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link text-white">Iniciar sesión</Link>
              </li>
              <li className="nav-item">
                <Link to={"/nueva-cuenta"} className="nav-link text-white">Registrarse</Link>
              </li>
            </ul>

          }

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
