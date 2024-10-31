// src/pages/resumen_academico.jsx
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const asignaturas = [
    {
      nombre: 'Economía I-A',
      calificaciones: [
        { nombre: 'Certamen 1', nota: 4.8, ponderacion: 0.15 },
        { nombre: 'Certamen 2', nota: 5.2, ponderacion: 0.15 },
        { nombre: 'Tarea 1', nota: 5.5, ponderacion: 0.1 },
        { nombre: 'Tarea 2', nota: 5.0, ponderacion: 0.1 },
        { nombre: 'Tarea 3', nota: 4.7, ponderacion: 0.1 },
        { nombre: 'Control 1', nota: 4.9, ponderacion: 0.1 },
        { nombre: 'Control 2', nota: 5.1, ponderacion: 0.1 },
        { nombre: 'Control 3', nota: 4.8, ponderacion: 0.1 },
      ],
    },
    {
      nombre: 'Tenis',
      calificaciones: [
        { nombre: 'Certamen 1', nota: 6.0, ponderacion: 0.15 },
        { nombre: 'Certamen 2', nota: 5.8, ponderacion: 0.15 },
        { nombre: 'Tarea 1', nota: 5.9, ponderacion: 0.1 },
        { nombre: 'Tarea 2', nota: 6.1, ponderacion: 0.1 },
        { nombre: 'Tarea 3', nota: 5.7, ponderacion: 0.1 },
        { nombre: 'Control 1', nota: 5.8, ponderacion: 0.1 },
        { nombre: 'Control 2', nota: 6.0, ponderacion: 0.1 },
        { nombre: 'Control 3', nota: 5.9, ponderacion: 0.1 },
      ],
    },
    {
      nombre: 'Investigación de Operaciones',
      calificaciones: [
        { nombre: 'Certamen 1', nota: 4.3, ponderacion: 0.15 },
        { nombre: 'Certamen 2', nota: 4.7, ponderacion: 0.15 },
        { nombre: 'Tarea 1', nota: 5.2, ponderacion: 0.1 },
        { nombre: 'Tarea 2', nota: 4.8, ponderacion: 0.1 },
        { nombre: 'Tarea 3', nota: 5.0, ponderacion: 0.1 },
        { nombre: 'Control 1', nota: 4.9, ponderacion: 0.1 },
        { nombre: 'Control 2', nota: 5.1, ponderacion: 0.1 },
        { nombre: 'Control 3', nota: 4.6, ponderacion: 0.1 },
      ],
    },
    {
      nombre: 'Información y Matemáticas Financieras',
      calificaciones: [
        { nombre: 'Certamen 1', nota: 5.0, ponderacion: 0.15 },
        { nombre: 'Certamen 2', nota: 4.9, ponderacion: 0.15 },
        { nombre: 'Tarea 1', nota: 5.5, ponderacion: 0.1 },
        { nombre: 'Tarea 2', nota: 5.3, ponderacion: 0.1 },
        { nombre: 'Tarea 3', nota: 4.8, ponderacion: 0.1 },
        { nombre: 'Control 1', nota: 5.1, ponderacion: 0.1 },
        { nombre: 'Control 2', nota: 4.9, ponderacion: 0.1 },
        { nombre: 'Control 3', nota: 5.2, ponderacion: 0.1 },
      ],
    },
  ];

const calcularNotaFinal = (calificaciones) => {
  return calificaciones.reduce(
    (total, item) => total + item.nota * item.ponderacion,
    0
  ).toFixed(2); // Redondea a 2 decimales
};

const ResumenAcademico = () => {
  return (
    <div className="resumen-academico">
      <Typography variant="h4" gutterBottom>
        Resumen Académico
      </Typography>
      {asignaturas.map((asignatura, index) => (
        <Accordion key={index} sx={{ backgroundColor: '#f5f5f5', color: '#333', borderRadius: '8px', marginBottom: '1rem' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#007bff' }} />}>
            <Typography>{asignatura.nombre}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="subtitle1" fontWeight="bold">Nombre de la Calificación</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" fontWeight="bold">Calificación</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1" fontWeight="bold">Ponderación</Typography>
              </Grid>

              {asignatura.calificaciones.map((calificacion, idx) => (
                <React.Fragment key={idx}>
                  <Grid item xs={4}>
                    <Typography>{calificacion.nombre}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>{calificacion.nota}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography>{(calificacion.ponderacion * 100).toFixed(0)}%</Typography>
                  </Grid>
                </React.Fragment>
              ))}

              <Grid item xs={8}>
                <Typography fontWeight="bold">Nota Final</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography fontWeight="bold">
                  {calcularNotaFinal(asignatura.calificaciones)}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ResumenAcademico;
