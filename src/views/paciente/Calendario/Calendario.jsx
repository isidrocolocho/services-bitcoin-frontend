import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Modal, Button, Input, Select, DatePicker } from "antd"; // Usaremos Ant Design para los componentes

const Calendario = () => {
  const referenciaCalendario = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([
    {
      title: "Lección Completada: Introducción al Bitcoin",
      date: "2025-01-20",
      description: "Has completado la lección básica sobre Bitcoin y su tecnología blockchain.",
      type: "Lección",
    },
    {
      title: "Sats Recibidos: Quiz de Criptomonedas",
      date: "2025-01-22",
      description: "Recibiste 0.05 BTC por completar el quiz de criptomonedas.",
      type: "Sats",
      amount: "+0.05 BTC",
    },
    {
      title: "Puntuación Quiz: Seguridad en Criptomonedas",
      date: "2025-01-25",
      description: "Obtuviste un 85% en el quiz sobre seguridad en criptomonedas.",
      type: "Puntuación",
    },
    {
      title: "Movimiento de Quiz: Participación en Bitcoin Basics",
      date: "2025-01-28",
      description: "Te inscribiste y participaste en el quiz sobre fundamentos de Bitcoin.",
      type: "Quiz",
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    type: "",
    date: null,
    amount: "",
  });

  const irAlSiguienteMes = () => {
    const apiCalendario = referenciaCalendario.current.getApi();
    apiCalendario.next();
  };

  const handleEventClick = (info) => {
    setSelectedEvent({
      title: info.event.title,
      description: info.event.extendedProps.description,
      type: info.event.extendedProps.type,
      amount: info.event.extendedProps.amount,
    });
  };

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleAddEvent = () => {
    setEvents([
      ...events,
      {
        title: newEvent.title,
        date: newEvent.date.format("YYYY-MM-DD"),
        description: newEvent.description,
        type: newEvent.type,
        amount: newEvent.amount || "",
      },
    ]);
    handleModalClose();
    setNewEvent({
      title: "",
      description: "",
      type: "",
      date: null,
      amount: "",
    });
  };

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value, name) => {
    setNewEvent({ ...newEvent, [name]: value });
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <button
          onClick={irAlSiguienteMes}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Ir al siguiente mes
        </button>
        <button
          onClick={handleModalOpen}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Agregar Evento
        </button>
      </div>

      <FullCalendar
        ref={referenciaCalendario}
        locale="es"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay",
        }}
        events={events}
        eventClick={handleEventClick}
        eventContent={({ event }) => (
          <div className="bg-green-500 text-white rounded px-2 py-1 text-xs">
            {event.title}
            {event.extendedProps.amount && (
              <div className="text-xs text-yellow-300">
                {event.extendedProps.amount}
              </div>
            )}
          </div>
        )}
        dayCellClassNames="bg-gray-50 border border-gray-200"
      />

      {/* Modal para añadir un nuevo evento */}
      <Modal
        title="Agregar un Nuevo Evento"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="back" onClick={handleModalClose}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={handleAddEvent}>
            Agregar Evento
          </Button>,
        ]}
      >
        <Input
          placeholder="Título del Evento"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          className="mb-2"
        />
        <Input.TextArea
          placeholder="Descripción del Evento"
          name="description"
          value={newEvent.description}
          onChange={handleInputChange}
          className="mb-2"
        />
        <Select
          placeholder="Tipo de Evento"
          name="type"
          value={newEvent.type}
          onChange={(value) => handleSelectChange(value, "type")}
          className="mb-2 w-full"
        >
          <Select.Option value="Lección">Lección</Select.Option>
          <Select.Option value="Sats">Sats</Select.Option>
          <Select.Option value="Puntuación">Puntuación</Select.Option>
          <Select.Option value="Quiz">Quiz</Select.Option>
        </Select>
        <DatePicker
          placeholder="Fecha del Evento"
          name="date"
          value={newEvent.date}
          onChange={(date) => setNewEvent({ ...newEvent, date })}
          className="mb-2 w-full"
        />
        {newEvent.type === "Sats" && (
          <Input
            placeholder="Monto de Sats"
            name="amount"
            value={newEvent.amount}
            onChange={handleInputChange}
            className="mb-2"
          />
        )}
      </Modal>

      {/* Modal flotante para detalles del evento */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 max-w-full shadow-lg">
            <h3 className="text-xl font-bold mb-4">{selectedEvent.title}</h3>
            <p className="mb-2">
              <strong>Descripción:</strong> {selectedEvent.description}
            </p>
            <p className="mb-2">
              <strong>Tipo:</strong> {selectedEvent.type}
            </p>
            {selectedEvent.amount && (
              <p className="mb-2 text-green-600">
                <strong>Monto:</strong> {selectedEvent.amount}
              </p>
            )}
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => setSelectedEvent(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendario;
