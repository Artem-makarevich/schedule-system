import React, { useContext } from 'react';
import { Container, Typography, Paper, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { ScheduleContext } from '../../contexts/ScheduleContext';
import DeleteIcon from '@mui/icons-material/Delete';

const Schedule = () => {
    const { schedule, removeScheduleEntry } = useContext(ScheduleContext);

    return (
        <Container maxWidth="md">
            <Box mt={5}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom>Розклад</Typography>
                    {Array.isArray(schedule) && schedule.length > 0 ? (
                        <List>
                            {schedule.map((entry, index) => (
                                <ListItem key={index} secondaryAction={
                                    <IconButton edge="end" aria-label="delete" onClick={() => removeScheduleEntry(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                }>
                                    <ListItemText primary={entry.date} secondary={entry.note} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <Typography variant="body1">Розклад порожній</Typography>
                    )}
                </Paper>
            </Box>
        </Container>
    );
};

export default Schedule;
