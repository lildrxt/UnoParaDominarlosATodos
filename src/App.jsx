import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Card, CardContent, TextField,
  RadioGroup, FormControlLabel, Radio, Slider, Select, MenuItem,
  FormControl, InputLabel, Rating, Button, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Box
} from '@mui/material';

export default function EjercitoSauron() {
  // lista vacia
  const [tropas, setTropas] = useState([]);
  // Formulario
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: 'Orco',
    nivel: 50,
    categoria: '',
    amenaza: 1
  });
  // manejador de inputs y demas
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // slider para la fuerza
  const handleSliderChange = (event, newValue) => {
    setFormData({
      ...formData,
      nivel: newValue
    });
  };
  // estrellas
  const handleRatingChange = (event, newValue) => {
    // minimo 1 estrella
    setFormData({
      ...formData,
      amenaza: newValue < 1 ? 1 : newValue
    });
  };
  //registro de guerrero
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoGuerrero = {
      ...formData,
      id: Date.now() //id para cada guerrero
    };

    setTropas([...tropas, nuevoGuerrero]);
    // reseteamos el formulario
    setFormData({
      nombre: '',
      tipo: 'Orco',
      nivel: 50,
      categoria: '',
      amenaza: 1
    });
  };
  //Funcion para eliminar
  const eliminarGuerrero = (id) => {
    const tropasActualizadas = tropas.filter(guerrero => guerrero.id !== id);
    setTropas(tropasActualizadas);
  };

  return (
    <>
      {/* Texto superior */}
      <AppBar position="static" sx={{ mb: 4, bgcolor: '#1a1a1a' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            Anillo Único
          </Typography>
          <Typography variant="h6">
            Uno para dominarlos a todos
          </Typography>
        </Toolbar>
      </AppBar>

      {/* grillas de boostrap */}
      <div className="container">
        
        {/* FOrmulario*/}
        <div className="row mb-5">
          <div className="col-12">
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  Reclutar Nuevo Guerrero
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
                  
                  <TextField 
                    label="Nombre del Guerrero" 
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handleChange} 
                    fullWidth 
                    required
                  />

                  <FormControl>
                    <Typography variant="subtitle2" color="textSecondary">Tipo de Guerrero</Typography>
                    <RadioGroup row name="tipo" value={formData.tipo} onChange={handleChange}>
                      <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
                      <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
                    </RadioGroup>
                  </FormControl>

                  <FormControl fullWidth required>
                    <InputLabel id="categoria-label">Categoría / Rango</InputLabel>
                    <Select
                      labelId="categoria-label"
                      name="categoria"
                      value={formData.categoria}
                      label="Categoría / Rango"
                      onChange={handleChange}
                    >
                      <MenuItem value="Capitán">Capitán</MenuItem>
                      <MenuItem value="Berserker">Berserker</MenuItem>
                      <MenuItem value="Explorador">Explorador</MenuItem>
                      <MenuItem value="Asediador">Asediador</MenuItem>
                    </Select>
                  </FormControl>

                  <Box>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                      Nivel de Combate: {formData.nivel}
                    </Typography>
                    <Slider 
                      name="nivel"
                      value={formData.nivel} 
                      onChange={handleSliderChange} 
                      min={1} 
                      max={100} 
                      valueLabelDisplay="auto"
                    />
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" color="textSecondary" component="legend">
                      Nivel de Amenaza / Furia
                    </Typography>
                    <Rating 
                      name="amenaza" 
                      value={formData.amenaza} 
                      onChange={handleRatingChange} 
                      min={1}
                      max={5}
                    />
                  </Box>

                  <Button type="submit" variant="contained" color="error" size="large">
                    Registrar Guerrero
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* lista */}
        <div className="row">
          <div className="col-12">
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Despliegue del Ejército ({tropas.length})
            </Typography>
            
            <TableContainer component={Paper} elevation={3}>
              <Table>
                <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell><strong>Nombre</strong></TableCell>
                    <TableCell><strong>Tipo</strong></TableCell>
                    <TableCell><strong>Categoría</strong></TableCell>
                    <TableCell align="center"><strong>Nivel</strong></TableCell>
                    <TableCell align="center"><strong>Clasificación</strong></TableCell>
                    <TableCell align="center"><strong>Acción</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tropas.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                        No hay tropas desplegadas actualmente.
                      </TableCell>
                    </TableRow>
                  ) : (
                    tropas.map((guerrero) => (
                      <TableRow key={guerrero.id}>
                        <TableCell>{guerrero.nombre}</TableCell>
                        <TableCell>{guerrero.tipo}</TableCell>
                        <TableCell>{guerrero.categoria}</TableCell>
                        <TableCell align="center">{guerrero.nivel}</TableCell>
                        <TableCell align="center">
                          <Chip 
                            label={guerrero.tipo} 
                            color={guerrero.tipo === 'Orco' ? 'success' : 'error'} 
                            variant="filled"
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Button 
                            variant="outlined" 
                            color="inherit" 
                            size="small"
                            onClick={() => eliminarGuerrero(guerrero.id)}
                          >
                            Asesinado por la aparición
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

      </div>
    </>
  );
}