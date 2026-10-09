import React from 'react';
import { 
  Typography, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Chip, Button 
} from '@mui/material';

export default function TablaEjercito({ tropas, eliminarGuerrero }) {
  return (
    //lista
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
  );
}