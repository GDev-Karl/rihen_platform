import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import EventModal from './EventModal';
import { fetchMockEvents } from './mockData'; // Fonction simulant une base de données

const Planning = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(fetchMockEvents());
  const [currentView, setCurrentView] = useState('month'); // Options: 'day', 'week', 'month'
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Ajouter un nouvel événement
  const addEvent = (event) => setEvents([...events, event]);

  // Mettre à jour un événement existant
  const updateEvent = (updatedEvent) =>
    setEvents(events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt)));

  // Supprimer un événement
  const deleteEvent = (eventId) =>
    setEvents(events.filter((evt) => evt.id !== eventId));

  // Changer le mois
  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  return (
    <div>
      <CalendarHeader
        currentDate={currentDate}
        currentView={currentView}
        setCurrentView={setCurrentView}
        changeMonth={changeMonth}
      />
      <CalendarGrid
        events={events}
        currentDate={currentDate}
        currentView={currentView}
        setSelectedEvent={setSelectedEvent}
      />
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          updateEvent={updateEvent}
          deleteEvent={deleteEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Planning;
