// src/pages/calendario.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../stylesheets/calendario/index.scss';

const CalendarioPage = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventDescription, setEventDescription] = useState('');

  // Maneja la selección de fecha
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  // Maneja el cambio en el input de descripción del evento
  const handleInputChange = (e) => {
    setEventDescription(e.target.value);
  };

  // Agrega un nuevo evento
  const addEvent = () => {
    setEvents([...events, { date, description: eventDescription }]);
    setEventDescription(''); // Limpia el campo de descripción
  };

  return (
    <div className="calendario-page">
      <h2>Calendario Interactivo</h2>
      <Calendar onChange={handleDateChange} value={date} />

      <div className="event-form">
        <input
          type="text"
          value={eventDescription}
          onChange={handleInputChange}
          placeholder="Descripción del evento (Prueba, Tarea, etc.)"
        />
        <button onClick={addEvent}>Agregar Evento</button>
      </div>

      <div className="events-list">
        <h3>Eventos del día:</h3>
        <ul>
          {events
            .filter((event) => event.date.toDateString() === date.toDateString())
            .map((event, index) => (
              <li key={index}>{event.description}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarioPage;
