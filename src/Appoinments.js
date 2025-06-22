import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

function Appointments() {
  const { Id } = useParams(); // Get the patient ID from the URL
  const [pname, setPName] = useState(''); // State to store the patient name
  const [dname, setDName] = useState(''); // State to store the doctor name
  const [dateAndTime, setDateAndTime] = useState(''); // State for date and time
  const [telephoneNo, setTelephoneNo] = useState(''); // State for telephone number
  const [appointments, setAppointments] = useState([]); // State to store appointments
  const [errors, setErrors] = useState({}); // State to store form validation errors
  const [id, setId] = useState(null); // State for appointment id (used for editing)

  // Fetch the patient name when the component mounts or patient ID changes
  useEffect(() => {
    const fetchPatientDetails = async () => {
      if (!Id) return;  // Check if Id is available
      try {
        const response = await fetch("http://localhost:8080/api/patients/${Id}");
        const data = await response.json();
        if (data) {
          setPName(data.name);  // Set the patient name from backend
        } else {
          console.log('Patient not found');
        }
      } catch (error) {
        console.error('Error fetching patient details:', error);
      }
    };

    fetchPatientDetails();
  }, [Id]); // Fetch data when patient Id changes

  // Function to validate form fields
  const validate = () => {
    const newErrors = {};
    if (!pname.trim()) newErrors.pname = 'Patient Name is required.';
    if (!dname.trim()) newErrors.dname = 'Doctor Name is required.';
    if (!dateAndTime || new Date(dateAndTime) <= new Date()) newErrors.dateAndTime = 'Date and Time must be in the future.';
    const phoneRegex = /^[0-9]{10}$/;
    if (!telephoneNo || !phoneRegex.test(telephoneNo)) newErrors.telephoneNo = 'Telephone No must be a valid 10-digit number.';
    return newErrors;
  };

  // Handle adding an appointment
  const handleAddAppointment = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const appointment = { pname, dname, dateAndTime, telephoneNo, patientId: Id }; // Include Patient ID
    fetch('http://localhost:8080/api/appointments/Save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointment),
    })
      .then(res => res.json())
      .then(newAppointment => {
        setAppointments([...appointments, newAppointment]);
        clearForm();
      });
  };

  // Handle updating an appointment
  const handleUpdateAppointment = (id) => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const appointment = { pname, dname, dateAndTime, telephoneNo, patientId: Id }; // Include Patient ID
    fetch("http://localhost:8080/api/appointments/updateAppoinment/${id}", {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointment),
    })
      .then(() => {
        setAppointments(appointments.map(a => (a.id === id ? { ...a, ...appointment } : a)));
        clearForm();
      });
  };

  // Handle deleting an appointment
  const handleDeleteAppointment = (id) => {
    fetch("http://localhost:8080/api/appointments/deleteReview/${id}", {
      method: 'DELETE',
    })
      .then(() => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
      });
  };

  // Handle edit click
  const handleEditClick = (appointment) => {
    setId(appointment.id);
    setPName(appointment.pname);
    setDName(appointment.dname);
    setDateAndTime(appointment.dateAndTime);
    setTelephoneNo(appointment.telephoneNo);
    setErrors({});
  };

  // Clear form fields
  const clearForm = () => {
    setPName('');
    setDName('');
    setDateAndTime('');
    setTelephoneNo('');
    setErrors({});
  };

  return (
    <div>
      <Container>
        <Paper elevation={2} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
          <h1 style={{
            background: 'linear-gradient(90deg, #3f51b5, #f50057)',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}>
            ADD OR EDIT APPOINTMENT
          </h1>
          <Box component="form" noValidate autoComplete="off">
            {/* Patient Name input (manual entry) */}
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Patient Name"
                variant="outlined"
                value={pname}
                onChange={e => setPName(e.target.value)}
                error={!!errors.pname}
                helperText={errors.pname}
                fullWidth
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Doctor Name"
                variant="outlined"
                value={dname}
                onChange={e => setDName(e.target.value)}
                error={!!errors.dname}
                helperText={errors.dname}
                fullWidth
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Date and Time"
                type="datetime-local"
                variant="outlined"
                value={dateAndTime}
                onChange={e => setDateAndTime(e.target.value)}
                InputLabelProps={{ shrink: true }}
                error={!!errors.dateAndTime}
                helperText={errors.dateAndTime}
                fullWidth
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <TextField
                label="Telephone Number"
                variant="outlined"
                value={telephoneNo}
                onChange={e => setTelephoneNo(e.target.value)}
                error={!!errors.telephoneNo}
                helperText={errors.telephoneNo}
                fullWidth
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => id ? handleUpdateAppointment(id) : handleAddAppointment()}
              fullWidth
            >
              {id ? "Update" : "Submit"}
            </Button>
          </Box>
        </Paper>

        <h1 style={{
          color: "red",
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
          margin: "20px 0",
          letterSpacing: "1px",
        }}>
          APPOINTMENTS
        </h1>

        {appointments.map((appointment) => (
          <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={appointment.id}>
            <h3>Appointment Number: {appointment.ano}</h3>
            <p>Patient Name: {appointment.pname}</p>
            <p>Doctor Name: {appointment.dname}</p>
            <p>Date and Time: {appointment.dateAndTime}</p>
            <p>Telephone No: {appointment.telephoneNo}</p>
            <Button variant="contained" color="secondary" onClick={() => handleEditClick(appointment)}>Edit</Button>
            <Button variant="contained" color="error" onClick={() => handleDeleteAppointment(appointment.id)}>Delete</Button>
          </Paper>
        ))}
      </Container>
    </div>
  );
}

export default Appointments;