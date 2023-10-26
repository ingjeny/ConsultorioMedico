import React, { useState } from 'react';
import { Container, Paper, TextField,  Grid } from '@mui/material';

const AgregarUsuario = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    cedula: '',
    edad: '',
    direccion: '',
    telefono: '',
    observaciones: '',
    files: [],
  });

  const [formVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'files' ? files : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserAdded(formData);
    setFormData({
      nombres: '',
      apellidos: '',
      cedula: '',
      edad: '',
      direccion: '',
      telefono: '',
      observaciones: '',
      files: [],
    });
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: 20 }}>
        {formVisible ? (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nombres"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Apellidos"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Cédula"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Edad"
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Dirección"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Teléfono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Observaciones"
                  name="observaciones"
                  multiline
                  rows={4}
                  value={formData.observaciones}
                  onChange={handleChange}
                />
              </Grid>
              {/* Resto del código sin cambios */}
            </Grid>
          </form>
        ) : null}
      </Paper>
    </Container>
  );
};

export default AgregarUsuario;