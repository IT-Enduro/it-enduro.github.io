import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { markdownToHtml } from '../../shared/markdownToHtml';
import { SectionTitle } from '../../shared/SectionTitle';

type Course = {
  id: string;
  title: string;
  badge: string;
  shortDescription: string;
  markdownPath: string;
};

const courses: Course[] = [
  {
    id: 'microservices',
    title: 'Курс "Микросервисная архитектура"',
    badge: '5 недель',
    shortDescription:
      'Практический курс, ориентированный на разработчиков, аналитиков и архитекторов с акцентом на прикладные архитектурные решения.',
    markdownPath: '/assets/microservices.md'
  },
  {
    id: 'docker',
    title: 'Интенсив по Docker',
    badge: '3 часа',
    shortDescription:
      'Трехчасовое практическое занятие для разработчиков, QA инженеров, системных администраторов и DevOps.',
    markdownPath: '/assets/docker.md'
  }
];

const markdownHtmlSx = {
  '& h1': { fontSize: { xs: 28, md: 34 }, lineHeight: 1.2, mt: 0, mb: 1.5 },
  '& h2': { fontSize: { xs: 22, md: 28 }, lineHeight: 1.2, mt: 2.2, mb: 1.1 },
  '& h3': { fontSize: { xs: 18, md: 22 }, lineHeight: 1.3, mt: 1.8, mb: 1 },
  '& p': { color: 'text.secondary', lineHeight: 1.6, mb: 1.2 },
  '& ul, & ol': { pl: 3, mb: 1.4 },
  '& li': { color: 'text.secondary', mb: 0.5, lineHeight: 1.55 },
  '& a': { color: 'primary.main' },
  '& code': {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    bgcolor: 'rgba(13, 96, 198, 0.08)',
    px: 0.6,
    borderRadius: 0.8
  }
};

export const CoursesSection = () => {
  const [openedId, setOpenedId] = useState<string | null>(null);
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(false);

  const activeCourse = useMemo(() => courses.find((course) => course.id === openedId) ?? null, [openedId]);

  useEffect(() => {
    if (!activeCourse) return;

    let ignore = false;
    setLoading(true);

    fetch(activeCourse.markdownPath)
      .then((response) => response.text())
      .then((markdown) => {
        if (!ignore) setHtmlContent(markdownToHtml(markdown));
      })
      .catch(() => {
        if (!ignore) setHtmlContent('<h2>Ошибка</h2><p>Не удалось загрузить описание курса.</p>');
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [activeCourse]);

  return (
    <Box id="courses" component="section" sx={{ py: { xs: 8, md: 11 } }}>
      <Container>
        <SectionTitle eyebrow="Курсы" title="Курсы и интенсивы" titleFontSize={{ xs: 38, md: 52 }} />
        <Grid container spacing={2.5}>
          {courses.map((course) => (
            <Grid key={course.id} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 18px 36px rgba(13, 96, 198, 0.18)'
                  }
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    position: 'relative',
                    display: 'grid',
                    gridTemplateRows: 'auto auto',
                    gap: 1.2
                  }}
                >
                  <Chip
                    label={course.badge}
                    color="primary"
                    size="small"
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
                    fontSize={{ xs: 24, md: 30 }}
                    sx={{ minHeight: { xs: 0, md: 108 }, pr: { xs: 0, md: 14 } }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    fontSize={{ xs: 16, md: 18 }}
                    sx={{ minHeight: { xs: 0, md: 92 } }}
                  >
                    {course.shortDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ px: 3, pb: 3 }}>
                  <Button variant="contained" onClick={() => setOpenedId(course.id)}>
                    Описание курса
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog open={Boolean(activeCourse)} onClose={() => setOpenedId(null)} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontSize: { xs: 26, md: 34 }, fontWeight: 700, pb: 1 }}>{activeCourse?.title}</DialogTitle>
        <DialogContent dividers sx={{ maxHeight: '80vh' }}>
          {loading ? (
            <Stack direction="row" spacing={1} alignItems="center">
              <CircularProgress size={20} />
              <Typography>Загрузка описания курса...</Typography>
            </Stack>
          ) : activeCourse ? (
            <Box sx={markdownHtmlSx} dangerouslySetInnerHTML={{ __html: htmlContent }} />
          ) : null}
        </DialogContent>
      </Dialog>
    </Box>
  );
};
