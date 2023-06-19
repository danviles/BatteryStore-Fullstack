import React from "react";
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col">
          <h6>Universidad de la Laguna</h6>
          <p>Sistemas y tecnologías web</p>
        </div>
        <div className="col">
          <h6>Prototipo web para la app Batteries Reciclyng</h6>
          <p>Creada por:</p>
          <h6>Elvis David Nogueiras Gonzalez</h6>
          <h6>José Daniel Fuentes Marra</h6>
          <h6>Carla Fernanda Flores Gonzales</h6>
        </div>
        <div className="col">
          <h6>Contacto</h6>
          <p>alu0101281308@ull.edu.es</p>
          <p>alu0101166247@ull.edu.es</p>
          <p>alu0101278353@ull.edu.es</p>
        </div>
      </div>
      <div className="aviso">
        <p>
          Esta página es un prototipo de aplicación, no tiene relación con ninguna marca.
        </p>
      </div>
    </div>
  );
};

export default Footer;
