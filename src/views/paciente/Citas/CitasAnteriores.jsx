import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // Importamos FullCalendar
import dayGridPlugin from "@fullcalendar/daygrid"; // Plugin para la vista de calendario de días
import interactionPlugin from "@fullcalendar/interaction"; // Plugin para interacción como click, drag & drop

const CitasAnteriores = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulamos que estas son las citas atendidas previamente, puedes obtenerlas desde tu backend
    const citas = [
      {
        title: "Cita con Dr. Mario Argueta - Cardiología",
        start: "2025-01-05T10:00:00",
        end: "2025-01-05T11:00:00",
        description: "Consulta de seguimiento para problemas cardíacos.",
      },
      {
        title: "Cita con Dra. Jessica Moran - Nutrición",
        start: "2025-01-07T15:00:00",
        end: "2025-01-07T16:00:00",
        description: "Asesoría nutricional personalizada.",
      },
      {
        title: "Cita con Dr. Luis López - Dermatología",
        start: "2025-01-10T09:00:00",
        end: "2025-01-10T10:00:00",
        description: "Revisión de piel y salud dermatológica.",
      },
    ];

    // Aquí podrías hacer una llamada a tu API para obtener las citas previas
    setEvents(citas);
  }, []);

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Citas Anteriores</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={(info) => {
          alert(`Cita: ${info.event.title}\nDescripción: ${info.event.extendedProps.description}`);
        }}
        eventColor="#378006"
        eventTextColor="#fff"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
      />
    </div>
  );
};

export default CitasAnteriores;
