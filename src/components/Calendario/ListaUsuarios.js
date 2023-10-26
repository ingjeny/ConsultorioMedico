import React from 'react';
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableDataCell,
  CButton,
} from '@coreui/react';
import usuariosData from '../../connections/datausuarios.json'; // Importa los datos desde el archivo JSON

const ListaUsuarios = () => {
  return (
    <CTable striped hover>
      <CTableHead>
        <CTableRow>
          <CTableDataCell>Nombre</CTableDataCell>
          <CTableDataCell>Edad</CTableDataCell>
          <CTableDataCell>Género</CTableDataCell>
          <CTableDataCell>Dirección</CTableDataCell>
          <CTableDataCell>Acciones</CTableDataCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {usuariosData.map((usuario, index) => (
          <CTableRow key={index}>
            <CTableDataCell>{usuario.Nombre}</CTableDataCell>
            <CTableDataCell>{usuario.Edad}</CTableDataCell>
            <CTableDataCell>{usuario.Género}</CTableDataCell>
            <CTableDataCell>{usuario.Dirección}</CTableDataCell>
            <CTableDataCell>
              <CButton color="info" size="sm">
                Editar
              </CButton>{' '}
              <CButton color="danger" size="sm">
                Eliminar
              </CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
};

export default ListaUsuarios;

