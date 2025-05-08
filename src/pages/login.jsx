import { Button, ThemeProvider, TextField } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import theme from '../styles/theme';

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/home');
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col items-center min-h-screen bg-[#CCC9DC]">
                <p className='text-3xl mt-10 font-bold sm:text-4xl'>Movie Explorer</p>
                <div className='flex flex-col mt-12 items-center px-8 py-6 bg-[#D6D6D6] rounded shadow-lg'>
                    <div className="flex flex-col items-center">
                        <p className='text-3xl font-semibold sm:text-2xl md:text-3xl'>Welcome!</p>
                        <p className='text-sm font-light mt-1 md:text-sm text-center'>Glad to see you again.<br />Sign in to start exploring</p>
                    </div>
                    <form action={handleSubmit} className='mt-8 flex flex-col items-center gap-6'>
                        <TextField id="outlined-basic" label="Username" variant="outlined" InputProps={{ sx: { fontSize: { xs: '16px', sm: '18px' } }, }} InputLabelProps={{ sx: { fontSize: { xs: '16px', sm: '18px' } }, }} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" InputProps={{ sx: { fontSize: { xs: '16px', sm: '18px' } }, }} InputLabelProps={{ sx: { fontSize: { xs: '16px', sm: '18px' } }, }} />
                        <Button type='submit' variant='contained' size='medium' color='primary' sx={{ textTransform: 'none', }}>
                            Log In
                        </Button>
                    </form>
                </div>
            </div>
            
        </ThemeProvider >
    )
}

export default Login;