import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { Auth } from '../context/Auth';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import {AddNewProduct} from './ShopComponent/AddNewProduct';
const pages = ['movies', 'rickAndMorty', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navbar = () => {
  const navigate = useNavigate()
  const {token, setToken} = useContext(Auth)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return (
        // <AppBar position="static">
        //     <Container maxWidth="xl">
        //         <Toolbar disableGutters>
        //             <Box sx={{ flexGrow: 1, display: 'flex' }}>
        //                 <Button
        //                     onClick={() => navigate('/')}
        //                     sx={{ my: 2, color: 'white', display: 'block' }}
        //                 >
        //                     Movies
        //                 </Button>
        //                 <Button
        //                     onClick={() => navigate('/rickAndMorty')}
        //                     sx={{ my: 2, color: 'white', display: 'block' }}
        //                 >
        //                     Rick and Morty
        //                 </Button>
                        
        //                 <Button
        //                     onClick={() => navigate('/counter')}
        //                     sx={{ my: 2, color: 'white', display: 'block' }}
        //                 >
        //                     Counter
        //                 </Button>
        //                 <Button
        //                     onClick={() => navigate('/functionalCounter')}
        //                     sx={{ my: 2, color: 'white', display: 'block' }}
        //                 >
        //                     functionalCounter
        //                 </Button>
        //                 <Button
        //                     onClick={() => navigate('/BinarySearch')}
        //                     sx={{ my: 2, color: 'white', display: 'block' }}
        //                 >
        //                     BinarySearch
        //                 </Button>
        //                 <Button
        //                     onClick={() => navigate('/todo')}
        //                     sx={{ my: 2, color: 'white', display: 'block' }}
        //                 >
        //                     ToDo
        //                 </Button>

        //                 <Button
        //                     onClick={() => navigate('/shop')}
        //                     sx={{ my: 2, color: 'white', display: 'block' }}
        //                 >
        //                    Online Shop
        //                 </Button>


                        
        //             </Box>
        //             {/* {token?
        //             (
        //                 <div style={{display:'flex', alignItems:'center'}}>
                            
        //                     <AddNewProduct/>  

        //                     <Button 
        //                         onClick={() => {setToken(false)}}
        //                         sx={{ my: 2, color: 'white', display: 'block' }}
        //                     >
        //                         Выйти
        //                     </Button>
        //                 </div>
        //             )
        //             :(
        //             <>
        //                 <Button
        //                     onClick={() => navigate('/signIn')}
        //                     sx={{ my: 2, color: 'white', display: 'block' }}
        //                 >
        //                     Sign In
        //                 </Button>
        //                 <Button
        //                     onClick={() => navigate('/signUp')}
        //                     sx={{ my: 2, color: 'white', display: 'block' }}
        //                 >
        //                     Sign Up
        //                 </Button>
        //             </>
        //             )
        //             } */}
                    
        //         </Toolbar>
        //     </Container>
        // </AppBar>

    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Site
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem>
                <Button
                    onClick={() => navigate('/')}
                    sx={{ my: 2, color: 'blue', display: 'block' }}
                >
                    Movies
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                    onClick={() => navigate('/rickAndMorty')}
                    sx={{ my: 2, color: 'blue', display: 'block' }}
                >
                    Rick and Morty
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                    onClick={() => navigate('/shop')}
                    sx={{ my: 2, color: 'blue', display: 'block' }}
                >
                    Online Shop
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
            <Button
                onClick={() => navigate('/BinarySearch')}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                BinarySearch
            </Button>
            <Button
                onClick={() => navigate('/todo')}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                ToDo
            </Button>

            <Button
                onClick={() => navigate('/shop')}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                Online Shop
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color='blue'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>


    );
};