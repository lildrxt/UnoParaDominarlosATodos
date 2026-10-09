import React, { useState } from 'react';
import Navbar from './Navbar';
import Formulario from './Formulario';
import TablaEjercito from './TablaEjercito';

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
      <Navbar />

      {/* grillas de boostrap */}
      <div className="container">
        
        <Formulario 
          formData={formData}
          handleChange={handleChange}
          handleSliderChange={handleSliderChange}
          handleRatingChange={handleRatingChange}
          handleSubmit={handleSubmit}
        />

        <TablaEjercito 
          tropas={tropas}
          eliminarGuerrero={eliminarGuerrero}
        />

      </div>
    </>
  );
}