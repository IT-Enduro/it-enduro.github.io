import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Card, CardContent, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { SectionTitle } from '../../shared/SectionTitle';

const blocks = [
  {
    title: 'Обучение команд',
    text: 'Все наши курсы и интенсивы могут быть адаптированы под задачи вашего бизнеса.',
    points: [
      'Микросервисная Архитектура',
      'BPMN и Camunda',
      'Kubernetes',
      'Docker',
      'Java и Kotlin',
      'Advanced Spring Boot',
      'Spring Cloud',
      'Курс по прикладному SQL',
      'Тестирование Микросервисов на Java',
      'И другие направления по вашему запросу.'
    ]
  },
  {
    title: 'Технический аудит компаний',
    text: 'Погружение в процессы вашей компании и составление рекомендаций по их улучшению с точки зрения разработки.',
    points: [
      'Поиск возможных проблем.',
      'Предложения по решению текущих проблем с учетом уровня команды, финансовых возможностей и сложности доработок.',
      'Описание возможных путей архитектурного развития.',
      'Предложения по развитию и оптимизации инфраструктуры.',
      'Подписываем NDA.'
    ]
  },
  {
    title: 'Подготовка к собеседованиям (со стороны бизнеса)',
    text: 'Помогаем компаниям выстроить качественный процесс оценки кандидатов.',
    points: [
      'Проведение технических интервью (Java Developer, Team Lead, Аналитик, QA/QA automation, DevOps).',
      'Помощь в составлении требований к позициям и тестовых заданий.',
      'Помощь в обучении сотрудников для проведения технических интервью.',
      'Составление психологического портрета кандидата по технологиям цифрового профайлинга.'
    ]
  }
];

export const BusinessSection = () => (
  <Box id="business" component="section" sx={{ py: { xs: 8, md: 10 } }}>
    <Container>
      <SectionTitle
        eyebrow="Бизнесу"
        title="Наши услуги для корпоративных клиентов"
        titleFontSize={{ xs: 38, md: 52 }}
      />

      <Grid container spacing={2.5}>
        {blocks.map((block) => (
          <Grid key={block.title} size={{ xs: 12, md: 4 }}>
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
              <CardContent sx={{ p: 3, display: 'grid', gridTemplateRows: 'auto auto 1fr', gap: 1.2 }}>
                <Typography variant="h5" fontSize={{ xs: 24, md: 28 }} sx={{ minHeight: { xs: 0, md: 108 } }}>
                  {block.title}
                </Typography>
                <Typography color="text.secondary" sx={{ minHeight: { xs: 0, md: 92 } }}>
                  {block.text}
                </Typography>
                <Stack spacing={1}>
                  {block.points.map((point) => (
                    <Stack key={point} direction="row" spacing={1} alignItems="center">
                      <Typography
                        component="span"
                        sx={{ color: 'secondary.main', fontSize: 11, lineHeight: 1, flexShrink: 0 }}
                      >
                        ■
                      </Typography>
                      <Typography color="text.secondary">{point}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography color="text.secondary" mt={3} fontSize={{ xs: 17, md: 19 }}>
        Свяжитесь с нами, если хотите презентацию для бизнеса.{' '}
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
