import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ScheduleProvider } from './contexts/ScheduleContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { ThemeProvider as MUIThemeProvider, CssBaseline, IconButton, Box } from '@mui/material';
import { lightTheme, darkTheme } from './themes/theme';
import Home from './components/Schedule/Schedule';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UpdateSchedule from './components/Schedule/UpdateSchedule';
import Navbar from './components/NavBar';
import { WbSunny, DarkMode } from '@mui/icons-material';

const AppContent = () => {
    const { mode, toggleTheme } = useTheme();
    const theme = mode === 'light' ? lightTheme : darkTheme;

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/update-schedule" element={<UpdateSchedule />} />
                </Routes>
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 16,
                        right: 16,
                        zIndex: 1200,
                    }}
                >
                    <IconButton onClick={toggleTheme} color="inherit">
                        {mode === 'light' ? <DarkMode /> : <WbSunny />}
                    </IconButton>
                </Box>
            </Router>
        </MUIThemeProvider>
    );
};

function App() {
    return (
        <AuthProvider>
            <ScheduleProvider>
                <ThemeProvider>
                    <AppContent />
                </ThemeProvider>
            </ScheduleProvider>
        </AuthProvider>
    );
}

export default App;
