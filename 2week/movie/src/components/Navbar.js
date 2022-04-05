import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { Auth } from '../context/Auth';
export const Navbar = () => {
    const navigate = useNavigate()
    const {token, setToken} = useContext(Auth)

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        <Button
                            onClick={() => navigate('/')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Movies
                        </Button>
                        <Button
                            onClick={() => navigate('/rickAndMorty')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Rick and Morty
                        </Button>
                        
                        <Button
                            onClick={() => navigate('/counter')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Counter
                        </Button>
                        <Button
                            onClick={() => navigate('/functionalCounter')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            functionalCounter
                        </Button>
                        
                    </Box>
                    {token?
                    (
                        <Button 
                            onClick={() => {setToken(false)}}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Выйти
                        </Button>
                    )
                    :(
                    <>
                        <Button
                            onClick={() => navigate('/signIn')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sign In
                        </Button>
                        <Button
                            onClick={() => navigate('/signUp')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sign Up
                        </Button>
                    </>
                    )
                    }
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
};