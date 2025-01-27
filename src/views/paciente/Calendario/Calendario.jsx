import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendario = () => {
  const referenciaCalendario = useRef(null);

  const irAlSiguienteMes = () => {
    const apiCalendario = referenciaCalendario.current.getApi();
    apiCalendario.next();
  };

  return (
    <div className="p-4">
      <button 
        onClick={irAlSiguienteMes} 
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700 transition duration-300">
        Ir al siguiente mes
      </button>

      <FullCalendar
        ref={referenciaCalendario}
        locale="es"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        events={[
          { title: 'Consulta médica', date: '2025-01-20' },
          { title: 'Reunión con especialista', date: '2025-01-22' },
        ]}
        eventContent={({ event }) => (
          <div className="bg-blue-500 text-white rounded px-2 py-1 text-xs">
            {event.title}
          </div>
        )}
        dayCellClassNames="bg-gray-50 border border-gray-200"
        dateClick={(info) => alert(`¡Haz clic en la fecha: ${info.dateStr}!`)}
        eventsSet={(eventos) => console.log('Eventos actuales:', eventos)}
      />
    </div>
  );
};

export default Calendario;
