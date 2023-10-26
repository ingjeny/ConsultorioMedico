import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from '@coreui/react';
import Agregarusuarios from '../../../components/Calendario/agregarusuarios';
import ListaUsuarios from '../../../components/Calendario/ListaUsuarios';

const Accordion = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Supongamos que tienes una lista de usuarios como "usuarios" (importada o generada).
  const usuarios = [
    // Aquí puedes cargar tus datos de usuario
  ];

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
  };

  const handleCerrarFormulario = () => {
    setMostrarFormulario(false);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>USUARIOS</strong>
            <CButton
              color="primary"
              className="ms-2"
              onClick={mostrarFormulario ? handleCerrarFormulario : handleMostrarFormulario}
            >
              {mostrarFormulario ? 'Cerrar Formulario' : 'Agregar Nuevo Usuario'}
            </CButton>
          </CCardHeader>
          <CCardBody>
            {mostrarFormulario && <Agregarusuarios />}
            <ListaUsuarios usuarios={usuarios} />
            {/* ... contenido del formulario */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Accordion;