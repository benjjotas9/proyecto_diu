// src/pages/calendario.jsx
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Typography } from '@mui/material';
import '../stylesheets/calendario/index.scss';

const Calendario = () => {
  const [events, setEvents] = useState([]);

  // Función para manejar la adición de eventos al hacer clic en una fecha
  const handleDateClick = (info) => {
    const title = prompt('Introduce el título del evento:');
    if (title) {
      setEvents([
        ...events,
        {
          title,
          start: info.date,
          end: info.date,
          allDay: info.allDay,
        },
      ]);
    }
  };

  return (
    <Box className="calendario-container">
      <Typography variant="h4" align="center" gutterBottom>
        Calendario USM
      </Typography>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        dateClick={handleDateClick} // Permite añadir eventos haciendo clic
        editable={true}
        selectable={true}
        height="auto" // Permite ajustar la altura del calendario al contenido
      />
    </Box>
  );
};

export default Calendario;
