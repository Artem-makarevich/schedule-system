import React, { createContext, useState } from 'react';

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
    const [schedule, setSchedule] = useState([]);

    const updateSchedule = (newEntry) => {
        setSchedule((prevSchedule) => [...prevSchedule, newEntry]);
    };

    const removeScheduleEntry = (index) => {
        setSchedule((prevSchedule) => prevSchedule.filter((_, i) => i !== index));
    };

    return (
        <ScheduleContext.Provider value={{ schedule, updateSchedule, removeScheduleEntry }}>
            {children}
        </ScheduleContext.Provider>
    );
};
