import React from 'react';
import { 
  Card, CardContent, Typography, TextField, RadioGroup, 
  FormControlLabel, Radio, Slider, Select, MenuItem, 
  FormControl, InputLabel, Rating, Button, Box 
} from '@mui/material';

export default function Formulario({ formData, handleChange, handleSliderChange, handleRatingChange, handleSubmit }) {
  return (
    //FOrmulario
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
  );
}