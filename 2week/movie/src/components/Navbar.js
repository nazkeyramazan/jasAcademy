import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
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
                        
                        
                    </Box>
                    {token?
                    (
                    // <Box sx={{ flexGrow: 0 }}>
                    //     <Tooltip title="Open settings">
                    //         <IconButton sx={{ p: 0 }}>
                    //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    //         </IconButton>
                    //     </Tooltip>
                    // </Box>
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