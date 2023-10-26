import React, { useState } from 'react';
import { Container, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';

const HistoriasClinicas = () => {
  const [open, setOpen] = useState(false);
  const [historiaClinica, setHistoriaClinica] = useState({
    nombrePaciente: '',
    fecha: '',
    sintomas: '',
    diagnostico: '',
    tratamiento: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHistoriaClinica({
      ...historiaClinica,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Aquí puedes realizar acciones con los datos de la historia clínica.
    // Por ejemplo, puedes mostrarlos en la consola.
    console.log('Datos de la Historia Clínica:', historiaClinica);
    setOpen(false);
  };

  return (
    <Container>
      <h1>Historia Clínica</h1>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Crear Historia Clínica
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Historia Clínica</DialogTitle>
        <DialogContent>
          <TextField
            name="nombrePaciente"
            label="Nombre del Paciente"
            fullWidth
            value={historiaClinica.nombrePaciente}
            onChange={handleChange}
          />
          <TextField
            name="fecha"
            label="Fecha"
            fullWidth
            value={historiaClinica.fecha}
            onChange={handleChange}
          />
          <TextField
            name="sintomas"
            label="Síntomas"
            fullWidth
            multiline
            rows={4}
            value={historiaClinica.sintomas}
            onChange={handleChange}
          />
          <TextField
            name="diagnostico"
            label="Diagnóstico"
            fullWidth
            multiline
            rows={4}
            value={historiaClinica.diagnostico}
            onChange={handleChange}
          />
          <TextField
            name="tratamiento"
            label="Tratamiento"
            fullWidth
            multiline
            rows={4}
            value={historiaClinica.tratamiento}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default HistoriasClinicas;
