import { Box, Typography, Grid, Avatar } from '@mui/material';
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';

import FAQList from '../components/FAQList';
import SectionWrapper from './SectionWrapper';
import { t } from '@lingui/macro';

export default function SectionBTC() {
  const theme = useTheme();

  return (
    <SectionWrapper
      title={t`sectionBTC-title-10`}
      description={t`sectionBTC-title-11`}
      id="btc"
      sectionColor="#FFFEA6"
    >
      <Box marginBottom={{ xs: 6, sm: 10 }}>
        <Typography
          textAlign="center"
          marginBottom={2}
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
        >
          {t`sectionBTC-title-12`}
        </Typography>
        <Typography
          textAlign="center"
          marginBottom={6}
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
        >
          {t`sectionBTC-title-13`}
          <Typography
            color={'primary'}
            component={'span'}
            variant={'inherit'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3
              )} 0%)`,
              color: '#377dff',
            }}
          >
            {t`sectionBTC-title-14`}
          </Typography>
          !
        </Typography>
      </Box>
      <Box marginBottom={{ xs: 6, sm: 10 }} overflow="hidden">
        <Grid container spacing={{ xs: 6, sm: 16 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box width={1} height={1}>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography
                  variant={'h6'}
                  marginBottom={2}
                  sx={{ fontWeight: 700, textAlign: 'center' }}
                >
                  {t`sectionBTC-content-10`}
                </Typography>
                <Typography marginBottom={2} color="text.secondary">
                  {t`sectionBTC-content-11`}
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Box
                    component="img"
                    src="/images/reward.png"
                    width={{ xs: '50%', sm: '60%' }}
                    marginBottom={4}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box width={1} height={1}>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography
                  variant={'h6'}
                  marginBottom={2}
                  sx={{ fontWeight: 700, textAlign: 'center' }}
                >
                  {t`sectionBTC-content-12`}
                </Typography>
                <Typography marginBottom={2} color="text.secondary">
                  {t`sectionBTC-content-13`}
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Box
                    component="img"
                    src="/images/currency.png"
                    width={{ xs: '50%', sm: '60%' }}
                    marginBottom={4}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        marginLeft={'auto'}
        marginRight={'auto'}
        marginBottom={10}
        sx={{
          width: {
            xs: '100%',
            md: '80%',
            lg: '60%',
          },
        }}
      >
        <FAQList
          title={'FAQ'}
          items={[
            {
              title: t`sectionBTC-FQA-10`,
              subtitle: t`sectionBTC-FQA-11`,
            },
            {
              title: t`sectionBTC-FQA-12`,
              subtitle: t`sectionBTC-FQA-13`,
            },
            {
              title: t`sectionBTC-FQA-14`,
              subtitle: t`sectionBTC-FQA-15`,
            },
            {
              title: t`sectionBTC-FQA-16`,
              subtitle: t`sectionBTC-FQA-17`,
            },
          ]}
        />
      </Box>
    </SectionWrapper>
  );
}
