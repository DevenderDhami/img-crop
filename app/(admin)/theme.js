// theme.js
import { createTheme } from '@mui/material/styles';

// Create a dark theme using MUI's createTheme method
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light Blue
    },
    secondary: {
      main: '#f48fb1', // Light Pink
    },
  },
});

export default darkTheme;
