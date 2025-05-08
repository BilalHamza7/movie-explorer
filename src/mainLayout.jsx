import { Button, ThemeProvider } from '@mui/material'
import { Link, Outlet, useLocation } from 'react-router-dom'
import React from 'react'
import theme from './styles/theme';

const MainLayout = () => {

    const location = useLocation();
    const isActive = location.pathname;

    return (
        <ThemeProvider theme={theme}>
            <nav className='flex justify-between items-center p-3 md:p-4 bg-[#EBEBEB]'>
                <p className='text-lg md:text-xl font-bold'>Movie Explorer</p>
                <ul className='flex gap-3 md:gap-6'>
                    <Button variant={isActive === '/home' ? 'contained' : 'outlined'} color='primary' sx={{ textTransform: 'none', fontSize: { xs: '12px', sm: '12px' }, px: { xs: 2, sm: 3 } }}>
                        <Link to="/home" className='text-black'>Explore</Link>
                    </Button>
                    <Button variant={isActive === '/trending' ? 'contained' : 'outlined'} color='primary' sx={{ textTransform: 'none', fontSize: { xs: '12px', sm: '12px' }, px: { xs: 2, sm: 3 } }}>
                        <Link to="/trending" className='text-black'>Trending</Link>
                    </Button>
                </ul>
            </nav>

            <Outlet />
        </ThemeProvider>
    )
}

export default MainLayout