import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
import { Box, Card, CardContent, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { SectionTitle } from '../../shared/SectionTitle';

const teacherLinks = [
  {
    label: 'Домашняя страница',
    href: 'https://romanow-alex.ru',
    icon: <LanguageIcon sx={{ color: '#0D60C6' }} />
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Romanow',
    icon: <GitHubIcon sx={{ color: '#171515' }} />
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/romanowalex/',
    icon: <LinkedInIcon sx={{ color: '#0A66C2' }} />
  },
  {
    label: 'SpeakerDeck',
    href: 'https://speakerdeck.com/romanowalex',
    icon: <SlideshowRoundedIcon sx={{ color: '#009287' }} />
  }
];

export const AboutSection = () => (
  <Box id="about" component="section" sx={{ py: { xs: 8, md: 10 } }}>
    <Container>
      <SectionTitle eyebrow="О проекте" title="IT Enduro" titleFontSize={{ xs: 38, md: 52 }} />

      <Grid container spacing={3} mb={4} alignItems="center">
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={1.4}>
            <Typography fontSize={{ xs: 18, md: 20 }}>
              Наша миссия — обогащать актуальными навыками разработчиков, DevOps, QA, аналитиков и других специалистов в
              области ИТ.
            </Typography>
            <Typography color="text.secondary">
              Команда IT Enduro проводит практические курсы и митапы, предназначенные для тех, кто уже имеет опыт в
              индустрии и стремится расширить свой технический кругозор и карьерные горизонты.
            </Typography>
            <Typography color="text.secondary">
              Мы верим, что истинное развитие достигается через преодоление сложностей, и поэтому выбираем темы, которые
              требуют глубокого погружения.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="img"
            src="/assets/logo_full.svg"
            alt="IT Enduro"
            sx={{ width: '100%', maxWidth: 430, display: 'block', ml: { xs: 0, md: 'auto' } }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <SectionTitle eyebrow="Преподаватели" title="Алексей Романов" titleFontSize={{ xs: 38, md: 52 }} />
      <Grid container spacing={3} alignItems="stretch">
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <Box
              component="img"
              src="/assets/profile.png"
              alt="Алексей Романов"
              sx={{ width: '100%', height: '100%', minHeight: { xs: 340, md: 520 }, objectFit: 'cover' }}
            />
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" fontSize={{ xs: 24, md: 28 }} mb={1}>
                Создаю решения, ориентированные на масштабируемость и отказоустойчивость.
              </Typography>
              <Stack spacing={0.8} mb={2}>
                <Typography color="text.secondary">• 15+ лет опыт в IT.</Typography>
                <Typography color="text.secondary">• 8+ лет в роли Software Architect.</Typography>
                <Typography color="text.secondary">• 9+ лет опыт DevOps.</Typography>
                <Typography color="text.secondary">
                  • 9 лет преподавательского опыта в МГТУ им. Н.Э.Баумана, курс «Распределенные Системы Обработки
                  Информации» на каф. ИУ7.
                </Typography>
                <Typography color="text.secondary">• Регулярные выступления на ИТ-конференциях.</Typography>
              </Stack>

              <Stack spacing={1}>
                {teacherLinks.map((item) => (
                  <Stack key={item.href} direction="row" spacing={1} alignItems="center">
                    {item.icon}
                    <Link href={item.href} target="_blank" rel="noreferrer" underline="hover">
                      {item.label}
                    </Link>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
