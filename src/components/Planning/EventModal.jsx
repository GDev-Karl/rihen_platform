import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const EventModal = ({ event, updateEvent, deleteEvent, onClose }) => {
  const [title, setTitle] = useState(event.title);

  const handleUpdate = () => {
    updateEvent({ ...event, title });
    onClose();
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Edit Event</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => deleteEvent(event.id)} color="error">
          Delete
        </Button>
        <Button onClick={handleUpdate} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventModal;
