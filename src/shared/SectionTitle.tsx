import { Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  titleFontSize?: { xs: number; md: number };
};

export const SectionTitle = ({ eyebrow, title, subtitle, titleFontSize }: SectionTitleProps) => (
  <Stack spacing={1.8} mb={4.5}>
    {eyebrow ? (
      <Typography
        variant="overline"
        color="secondary.main"
        sx={{ fontWeight: 700, fontSize: { xs: 15, md: 17 }, letterSpacing: '0.08em' }}
      >
        {eyebrow}
      </Typography>
    ) : null}
    <Typography variant="h2" fontSize={titleFontSize ?? { xs: 56, md: 84 }} lineHeight={1.02}>
      {title}
    </Typography>
    {subtitle ? (
      <Typography variant="body1" maxWidth={960} color="text.secondary" fontSize={{ xs: 18, md: 22 }}>
        {subtitle}
      </Typography>
    ) : null}
  </Stack>
);
