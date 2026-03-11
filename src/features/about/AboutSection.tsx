import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SlideshowRoundedIcon from '@mui/icons-material/SlideshowRounded';
import { Box, Card, CardContent, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { SectionTitle } from '../../shared/SectionTitle';

const teachers = [
  {
    name: 'Алексей Романов',
    image: '/assets/romanov.png',
    manifest: 'Создаю решения, ориентированные на масштабируемость и отказоустойчивость.',
    skills: [
      '15+ лет опыт в IT.',
      '8+ лет в роли Software Architect.',
      '9+ лет опыт DevOps.',
      '9 лет преподавательского опыта в МГТУ им. Н.Э.Баумана, курс «Распределенные Системы Обработки Информации» на каф. ИУ7.',
      'Регулярные выступления на ИТ-конференциях.'
    ],
    links: [
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
    ]
  },
  {
    name: 'Пинчук Александр',
    image: '/assets/pinchuk.jpg',
    manifest: 'Кроссплатформенная отказоустойчивая архитектура как залог стабильности вашего бизнеса.',
    skills: [
      '20+ лет профессионального опыта с JavaScript, HTML, CSS и frontend приложениями.',
      '10+ лет создания production-систем на React/Next.js и Vue/Nuxt.js.',
      '10+ лет в мобильной frontend-разработке (web и hybrid).',
      '7+ лет разработки гибридных мобильных приложений.',
      '10+ лет руководства командами в роли TechLead / Architect.',
      'Сильная экспертиза в сотрудничестве с UI/UX, дизайн-системах и масштабных редизайнах.',
      'Подтвержденный опыт модернизации legacy-приложений и проведения команд через сложные технические переходы.'
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/frontenddeveloping',
        icon: <GitHubIcon sx={{ color: '#171515' }} />
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/frontenddeveloping/',
        icon: <LinkedInIcon sx={{ color: '#0A66C2' }} />
      },
      {
        label: 'StackOverflow',
        href: 'https://stackoverflow.com/users/2525067/alex',
        icon: <LanguageIcon sx={{ color: '#F48024' }} />
      }
    ]
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

      <Stack spacing={4} divider={<Divider flexItem />}>
        {teachers.map((teacher, index) => (
          <Stack key={teacher.name} spacing={3}>
            <SectionTitle
              eyebrow={index === 0 ? 'наша команда' : ''}
              title={teacher.name}
              titleFontSize={{ xs: 38, md: 52 }}
            />
            <Grid container spacing={3} alignItems="stretch">
              <Grid size={{ xs: 12, md: 4 }}>
                <Card sx={{ height: '100%' }}>
                  <Box
                    component="img"
                    src={teacher.image}
                    alt={teacher.name}
                    sx={{ width: '100%', height: '100%', minHeight: { xs: 340, md: 520 }, objectFit: 'cover' }}
                  />
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" fontSize={{ xs: 22, md: 26 }} mb={1}>
                      {teacher.manifest}
                    </Typography>
                    <Stack spacing={0.8} mb={2}>
                      {teacher.skills.map((item) => (
                        <Typography key={item} color="text.secondary">
                          • {item}
                        </Typography>
                      ))}
                    </Stack>

                    <Stack spacing={1}>
                      {teacher.links.map((item) => (
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
          </Stack>
        ))}
      </Stack>
    </Container>
  </Box>
);
