import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { AppBar, Box, Button, Container, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';

const links = [
  { label: 'Курсы', href: '#courses' },
  { label: 'Услуги', href: '#services' },
  { label: 'Бизнесу', href: '#business' },
  { label: 'О проекте', href: '#about' },
  { label: 'Контакты', href: '#contacts' }
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      sx={{
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(76,77,88,0.12)'
      }}
    >
      <Container>
        <Toolbar sx={{ px: '0 !important', minHeight: { xs: 72, md: 84 } }}>
          <Stack direction="row" alignItems="center" spacing={1.6} sx={{ flexGrow: 1 }}>
            <Box component="img" src="/assets/logo.png" alt="IT Enduro" sx={{ width: 50, height: 50 }} />
            <Typography sx={{ fontWeight: 700, fontSize: { xs: 18, md: 24 }, lineHeight: 1.2 }}>
              IT Enduro / курсы и интенсивы
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2.2} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {links.map((link) => (
              <Button key={link.label} color="inherit" href={link.href}>
                {link.label}
              </Button>
            ))}
          </Stack>

          <IconButton
            aria-label="Открыть меню"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Stack sx={{ width: 280, p: 2 }} spacing={1}>
          {links.map((link) => (
            <Button key={link.label} href={link.href} onClick={() => setOpen(false)} color="inherit">
              {link.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </AppBar>
  );
};
