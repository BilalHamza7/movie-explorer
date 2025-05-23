import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7090A9',
      light: '#94AFC7',
      dark: '#547DA0',
      contrastText: '#242105',
    },
    secondary: {
      main: '#D6D6D6',
      light: '#D6D6D6',
      dark: '#D6D6D6',
      contrastText: '#242105',
    },
  },
});

export default theme;