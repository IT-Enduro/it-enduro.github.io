import { Box, Container, Grid, Stack, Typography } from '@mui/material';

export const HeroSection = () => (
  <Container component="section" sx={{ pt: { xs: 7, md: 10 }, pb: { xs: 8, md: 11 } }}>
    <Grid container spacing={4} alignItems="center">
      <Grid size={{ xs: 12, md: 5 }}>
        <Stack spacing={2.2}>
          <Typography component="h1" variant="h1" fontSize={{ xs: 34, md: 64 }} sx={{ color: '#57C187' }}>
            IT Enduro
          </Typography>
          <Typography variant="h5" fontSize={{ xs: 20, md: 30 }} color="text.secondary">
            Востребованные практические знания для ИТ-специалистов и команд
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box
          component="img"
          src="/assets/mountains.png"
          alt="Горы"
          sx={{
            width: '100%',
            borderRadius: '5px',
            boxShadow: '0 22px 36px rgba(13, 96, 198, 0.22)'
          }}
        />
      </Grid>
    </Grid>
  </Container>
);
