import {
  Box,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Link,
  Stack,
  Typography
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { markdownToHtml } from '../../shared/markdownToHtml';

type LegalDocType = 'offer' | 'policy' | null;

const docsMeta = {
  offer: {
    title: 'Публичная Оферта',
    path: '/assets/public.md'
  },
  policy: {
    title: 'Политика в отношении персональных данных',
    path: '/assets/policy.md'
  }
};

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

export const Footer = () => {
  const [openedDoc, setOpenedDoc] = useState<LegalDocType>(null);
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(false);

  const activeMeta = useMemo(() => (openedDoc ? docsMeta[openedDoc] : null), [openedDoc]);

  useEffect(() => {
    if (!activeMeta) return;

    let ignore = false;
    setLoading(true);

    fetch(activeMeta.path)
      .then((response) => response.text())
      .then((markdown) => {
        if (!ignore) setHtmlContent(markdownToHtml(markdown));
      })
      .catch(() => {
        if (!ignore) setHtmlContent('<h2>Ошибка</h2><p>Не удалось загрузить документ.</p>');
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [activeMeta]);

  return (
    <>
      <Box component="footer" sx={{ py: 4, borderTop: '1px solid rgba(76, 77, 88, 0.12)' }}>
        <Container>
          <Stack spacing={1.2}>
            <Typography variant="body2">© 2026. IT Enduro. Все права защищены</Typography>
            <Typography variant="body2" color="text.secondary">
              ИП Романова Екатерина Валерьевна
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ИНН 505397899657 ОГРНИП 323508100295911
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Link
                href="#"
                underline="hover"
                sx={{ width: 'fit-content' }}
                onClick={(event) => {
                  event.preventDefault();
                  setOpenedDoc('offer');
                }}
              >
                Публичная Оферта
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ width: 'fit-content' }}
                onClick={(event) => {
                  event.preventDefault();
                  setOpenedDoc('policy');
                }}
              >
                Политика в отношении персональных данных
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Dialog open={Boolean(activeMeta)} onClose={() => setOpenedDoc(null)} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 700 }}>{activeMeta?.title}</DialogTitle>
        <DialogContent dividers sx={{ maxHeight: '80vh' }}>
          {loading ? (
            <Stack direction="row" spacing={1} alignItems="center">
              <CircularProgress size={20} />
              <Typography>Загрузка документа...</Typography>
            </Stack>
          ) : activeMeta ? (
            <Box sx={markdownHtmlSx} dangerouslySetInnerHTML={{ __html: htmlContent }} />
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
};
