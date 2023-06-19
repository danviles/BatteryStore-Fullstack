import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import ImgBaterias from "../../images/menu/comprar.png";
import ImgTienda from "../../images/menu/vender.png";


const Menu = () => {

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-sm-6">
          <div className="menu-usuario">
            <img className="card-img-top mx-auto" src={ImgBaterias} alt="Card image" />

            <div className="card-body">
              <h4 className="card-title">Compra una bateria</h4>
              <p className="card-text">Busca en nuestra tienda la bateria que buscas al mejor precio.</p>
              <Link to={"/"} className="btn botones">Comprar</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="menu-usuario">
            <img className="card-img-top mx-auto" src={ImgTienda} alt="Card image" />

            <div className="card-body">
              <h4 className="card-title">Vende una bateria</h4>
              <p className="card-text">Publica tu bateria para poder venderla en nuestra tienda.</p>
              <Link to={"baterias"} className="btn botones">Vender</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;



