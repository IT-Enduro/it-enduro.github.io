import { Box, Container, Link, Typography } from '@mui/material';
import { SectionTitle } from '../../shared/SectionTitle';

export const ContactsSection = () => (
  <Box id="contacts" component="section" sx={{ py: { xs: 8, md: 10 } }}>
    <Container>
      <SectionTitle
        title="Контакты"
        subtitle="IT Enduro — курсы, интенсивы и услуги для ИТ-специалистов и команд"
        titleFontSize={{ xs: 38, md: 52 }}
      />
      <Typography color="text.secondary" maxWidth={860}>
        По вопросам обучения, консультаций по проектам и корпоративного образования свяжитесь с нами по почте{' '}
        <Link href="mailto:course@it-enduro.com" underline="hover">
          course@it-enduro.com
        </Link>{' '}
        или в Telegram{' '}
        <Link href="https://t.me/it_enduro" target="_blank" rel="noreferrer" underline="hover">
          @it_enduro
        </Link>
        .
      </Typography>
    </Container>
  </Box>
);
