import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Card, CardContent, Chip, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { SectionTitle } from '../../shared/SectionTitle';

type ServiceItem = {
  title: string;
  price: string;
  details: string[];
};

const services: ServiceItem[] = [
  {
    title: 'Консультации по рабочим проектам и аудит решений',
    price: 'от 7000 RUR/час',
    details: ['Погружение в ваш проект или в задачу и предложения по их реализации.']
  },
  {
    title: 'Консультации и индивидуальное обучение по Java',
    price: 'от 5000 RUR/час',
    details: ['Индивидуальные консультации с Software Архитектором.']
  },
  {
    title: 'Подготовка к собеседованиям (со стороны кандидата)',
    price: 'от 5000 RUR/час',
    details: [
      'Пробное техническое интервью для оценки текущего уровня (длительность 30-60 мин).',
      'Подготовка к собеседованиям на рынке РФ.',
      'Составление плана профессионального развития компетенций, необходимых в работе.'
    ]
  },
  {
    title: 'Менторство и карьерные консультации',
    price: 'от 5000 RUR/час',
    details: [
      'Составление плана профессионального развития компетенций для специалистов middle+ (T-shape developer).',
      'Обучение новым технологиям через реализацию pet-проектов.',
      'Помощь в обучении (начиная с junior+).'
    ]
  },
  {
    title: 'ИТ коучинг',
    price: 'от 5000 RUR/час',
    details: [
      'Развитие Soft Skills и навыков самопрезентации.',
      'Подготовка к публичным выступлениям и собеседованиям, работа с уверенностью и мотивацией.',
      'Работа с выгоранием.'
    ]
  }
];

export const ServicesSection = () => (
  <Box id="services" component="section" sx={{ py: { xs: 8, md: 10 } }}>
    <Container>
      <SectionTitle
        eyebrow="Услуги"
        title="Наши услуги для ИТ-специалистов помимо обучения"
        titleFontSize={{ xs: 38, md: 52 }}
      />

      <Grid container spacing={2.5}>
        {services.map((item) => (
          <Grid key={item.title} size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 18px 36px rgba(13, 96, 198, 0.18)'
                }
              }}
            >
              <CardContent
                sx={{ p: 3, display: 'grid', gridTemplateRows: 'auto auto 1fr', gap: 1.4, position: 'relative' }}
              >
                <Chip
                  label={item.price}
                  color="primary"
                  size="medium"
                  sx={{
                    position: 'absolute',
                    top: 26,
                    right: 24,
                    fontWeight: 700,
                    minWidth: 132,
                    height: 32,
                    fontSize: 13
                  }}
                />
                <Typography
                  variant="h5"
                  fontSize={{ xs: 24, md: 28 }}
                  sx={{ minHeight: { xs: 0, md: 74 }, pr: { xs: 0, md: 14 } }}
                >
                  {item.title}
                </Typography>

                <Box sx={{ minHeight: { xs: 0, md: 38 } }}>
                  <Typography color="text.secondary">Формат: индивидуально или в малой группе.</Typography>
                </Box>

                <Stack spacing={1}>
                  {item.details.map((detail) => (
                    <Stack key={detail} direction="row" spacing={1} alignItems="center">
                      <Typography
                        component="span"
                        sx={{ color: 'secondary.main', fontSize: 11, lineHeight: 1, flexShrink: 0 }}
                      >
                        ■
                      </Typography>
                      <Typography color="text.secondary">{detail}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography color="text.secondary" mt={3} fontSize={{ xs: 17, md: 19 }}>
        Какая помощь вам нужна?{' '}
        <Link href="https://t.me/it_enduro" target="_blank" rel="noreferrer" underline="hover">
          <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
            <TelegramIcon sx={{ color: '#229ED9', fontSize: 18, verticalAlign: '-3px', mr: 0.4 }} />
            @it_enduro
          </Box>
        </Link>
      </Typography>
    </Container>
  </Box>
);
