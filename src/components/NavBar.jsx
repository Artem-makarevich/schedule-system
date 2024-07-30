
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    {user ? (
                    <Button color="inherit" component={Link} to="/">
                    Система Розкладу
                    </Button>
                    ) : (
                        <Button color="inherit" component={Link} to="/login">
                            Система Розкладу
                        </Button>)}
                </Typography>
                {user ? (
                    <>
                        <Button color="inherit" component={Link} to="/">
                            Головна
                        </Button>
                        <Button color="inherit" component={Link} to="/update-schedule">
                            Оновити Розклад
                        </Button>
                        <Button color="inherit" onClick={logout} component={Link} to="/login">
                            Вийти
                        </Button>

                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/login">
                            Увійти
                        </Button>
                        <Button color="inherit" component={Link} to="/register">
                            Зареєструватись
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
