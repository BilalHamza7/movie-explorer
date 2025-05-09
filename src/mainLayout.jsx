import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ThemeProvider,
    Toolbar,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import theme from './styles/theme';

const drawerWidth = 240;
const navItems = [{ text: 'Explore', path: '/home' }, { text: 'Trending', path: '/trending' }, { text: 'Log Out', path: '/login' }];

const MainLayout = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const navigate = useNavigate();

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Movie Explorer
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.path)}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <AppBar component="nav" position="static" color='primary'>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                textAlign: { xs: 'center', sm: 'left' }
                            }}
                        >
                            Movie Explorer
                        </Typography>

                        {/* Menu icon when on mobile screens */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' }, ml: 'auto' }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Nav Items when in desktop screen */}
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                            {navItems.map((item) => (
                                <Button key={item.text} sx={{ color: '#fff' }} onClick={() => navigate(item.path)}>
                                    {item.text}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* Drawer */}
                <nav>
                    <Drawer
                        anchor='right'
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: drawerWidth,
                                backgroundColor: '#D6D6D6', // 🎨 Change this to your preferred color
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>

                {/* Page Content */}
                <Outlet />
            </Box>
        </ThemeProvider >
    );
};

export default MainLayout;
