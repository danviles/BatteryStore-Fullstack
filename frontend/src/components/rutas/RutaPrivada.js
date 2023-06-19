import React, { useContext} from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';
import { Outlet } from 'react-router-dom';

const RutaPrivada = ({ children }) => {
    
    const authContext = useContext(AuthContext);
    const {autenticado, usuarioAutenticado} = authContext;
    //const navigate = Navigate();

    return (
        autenticado ? <Outlet/> : <Navigate to="/login" />
    );
}


export default RutaPrivada;

// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import AuthContext from '../../context/autenticacion/authContext';
 
// const RutaPrivada = ({ children }) => {
    
//     const authContext = useContext(AuthContext);
//     const { autenticado } = authContext;
    
 
//     return autenticado ? children : <Navigate to="/" />
        
// }
 
// export default RutaPrivada;
