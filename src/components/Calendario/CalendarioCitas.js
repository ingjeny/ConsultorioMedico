import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from '@mui/material';

const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const hoursOfDay = [
  '8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am',
  '12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm', '3:30 pm',
  '4:00 pm', '4:30 pm', '5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm'
];


const CalendarioCitas = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [formData, setFormData] = useState({ nombre: '', cedula: '' });

  const handleCellClick = (day, hour) => {
    setSelectedCell({ day, hour });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario con los datos ingresados.
    console.log('Datos del formulario:', formData);
    // Limpia el formulario
    setFormData({ nombre: '', cedula: '' });
    // Deselecciona la celda
    setSelectedCell(null);
  };

  return (
    <div className="container mt-4">
      <TableContainer component={Paper}>
        <Table className="table table-bordered">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {daysOfWeek.map((day, index) => (
                <TableCell key={index}>{day}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {hoursOfDay.map((hour, hourIndex) => (
              <TableRow key={hourIndex}>
                <TableCell>{hour}</TableCell>
                {daysOfWeek.map((day, dayIndex) => (
                  <TableCell
                    key={dayIndex}
                    className="p-0"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleCellClick(day, hour)}
                  >
                    {selectedCell && selectedCell.day === day && selectedCell.hour === hour ? (
                      <form onSubmit={handleFormSubmit} className="p-2">
                        <TextField
                          className="mb-2"
                          label="Nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        />
                        <TextField
                          className="mb-2"
                          label="Cédula"
                          name="cedula"
                          value={formData.cedula}
                          onChange={(e) => setFormData({ ...formData, cedula: e.target.value })}
                        />
                        <Button type="submit" variant="primary">
                          Agregar Cita
                        </Button>
                      </form>
                    ) : null}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CalendarioCitas;
