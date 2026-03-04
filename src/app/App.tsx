import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../shared/config/theme';
import { LandingPage } from '../widgets/page-layout/LandingPage';

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <LandingPage />
  </ThemeProvider>
);
