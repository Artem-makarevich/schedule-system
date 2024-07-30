// UpdateSchedule.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, TextField, Container, Box, Paper, Grid } from '@mui/material';
import { ScheduleContext } from '../../contexts/ScheduleContext';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

const UpdateSchedule = () => {
    const [date, setDate] = useState(dayjs());
    const [note, setNote] = useState('');
    const { updateSchedule } = useContext(ScheduleContext);
    const navigate = useNavigate();

    const handleUpdate = () => {
        const newEntry = { date: date.format('YYYY-MM-DD'), note };
        updateSchedule(newEntry);
        navigate('/');
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h4" gutterBottom>Оновити розклад</Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <DatePicker
                                        label="Дата"
                                        value={date}
                                        onChange={(newDate) => setDate(newDate)}
                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Нотатка"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        fullWidth
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" onClick={handleUpdate} fullWidth>
                                        Зберегти
                                    </Button>
                                </Grid>
                            </Grid>
                        </LocalizationProvider>
                    </Paper>
                </motion.div>
            </Box>
        </Container>
    );
};

export default UpdateSchedule;
