import React from 'react';
import { CRow, CCard, CCardHeader, CCardBody, CTable, CTableBody, CTableHead, CTableRow, CTableHeaderCell, CTableDataCell } from '@coreui/react';

const Colors = () => {
  const horas = [];
  for (let hora = 8; hora <= 20; hora++) {
    for (let minuto = 0; minuto < 60; minuto += 30) {
      const horaFormato12h = hora > 12 ? hora - 12 : hora;
      const amPm = hora >= 12 ? 'PM' : 'AM';
      horas.push(`${horaFormato12h}:${minuto === 0 ? '00' : minuto} ${amPm}`);
    }
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Horario del Día
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Hora</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {horas.map((hora, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{hora}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
}

export default Colors;
