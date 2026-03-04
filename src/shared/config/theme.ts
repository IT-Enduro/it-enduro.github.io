import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0D60C6'
    },
    secondary: {
      main: '#57C187'
    },
    text: {
      primary: '#4C4D58',
      secondary: '#4C4D58'
    },
    background: {
      default: 'rgb(242, 242, 242)',
      paper: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: '"Exo 2", sans-serif',
    h1: {
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      fontSize: '4rem'
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.15,
      fontSize: '3rem'
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.25,
      fontSize: '2rem'
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem'
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: {
          margin: 0,
          backgroundColor: 'rgb(242, 242, 242)',
          color: '#4C4D58'
        },
        a: {
          color: 'inherit',
          textDecoration: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 46,
          borderRadius: 12,
          paddingInline: 20
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid rgba(76, 77, 88, 0.08)',
          boxShadow: '0 12px 24px rgba(13, 96, 198, 0.08)'
        }
      }
    }
  }
});
