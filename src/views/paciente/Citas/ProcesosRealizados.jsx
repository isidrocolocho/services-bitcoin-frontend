import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Esta es la correcta
import listPlugin from "@fullcalendar/list"; // Esta es la correcta
import interactionPlugin from "@fullcalendar/interaction";

const ProcesosRealizados = () => {
  const [eventos, setEventos] = useState([]);
  const [detallesEvento, setDetallesEvento] = useState(null);

  useEffect(() => {
    const dataEventos = [
      {
        id: 1,
        title: "Clase Terminada: Blockchain Básico",
        start: "2025-01-05",
        description: "Finalizaste la clase introductoria sobre blockchain.",
        tipo: "Clase",
      },
      {
        id: 2,
        title: "Sats Ganados: Quiz Avanzado",
        start: "2025-01-07",
        description: "Ganaste 0.03 BTC por completar el quiz avanzado.",
        tipo: "Recompensa",
        monto: "+0.03 BTC",
      },
      {
        id: 3,
        title: "Participación en Quiz: Seguridad",
        start: "2025-01-12",
        description: "Participaste en el quiz sobre seguridad en criptomonedas.",
        tipo: "Quiz",
      },
      {
        id: 4,
        title: "Transacción Realizada",
        start: "2025-01-20",
        description: "Transferiste 0.01 BTC a otra cuenta.",
        tipo: "Transacción",
        monto: "-0.01 BTC",
      },
    ];

    setEventos(dataEventos);
  }, []);

  const handleEventoClick = (info) => {
    const eventoSeleccionado = eventos.find((evento) => evento.id === parseInt(info.event.id));
    setDetallesEvento(eventoSeleccionado);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">History of Completed Processes</h1>

      <div className="shadow-lg rounded-lg bg-white p-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={eventos}
          eventClick={handleEventoClick}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek",
          }}
          eventClassNames={(info) =>
            info.event.extendedProps.tipo === "Recompensa"
              ? "bg-green-500 text-white"
              : info.event.extendedProps.tipo === "Transacción"
              ? "bg-red-500 text-white"
              : "bg-blue-500 text-white"
          }
        />
      </div>

      {detallesEvento && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">{detallesEvento.title}</h2>
            <p className="mb-2">{detallesEvento.description}</p>
            {detallesEvento.monto && (
              <p className="mb-2 font-semibold text-green-600">
                Monto: {detallesEvento.monto}
              </p>
            )}
            <p className="text-sm text-gray-500">Tipo: {detallesEvento.tipo}</p>
            <button
              onClick={() => setDetallesEvento(null)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcesosRealizados;
