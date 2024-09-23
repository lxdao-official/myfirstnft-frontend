import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { t } from '@lingui/macro';
import SectionWrapper from './SectionWrapper';

export default function SectionETH() {
  return (
    <SectionWrapper
      title={t`sectionETH-title-10`}
      description={t`sectionETH-title-11`}
      id="ethereum"
      sectionColor="#FFFEA6"
    >
      <Box>
        <Box
          component={'img'}
          src="https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero.94a1ecc4.png&w=1920&q=75"
          width={1}
        />
        <Typography
          textAlign="center"
          marginTop={4}
          marginBottom={{ xs: 6, sm: 10 }}
          variant="h6"
          sx={{ fontWeight: 900 }}
        >
          {t`sectionETH-title-12`}
        </Typography>
      </Box>
      <Box marginBottom={10} overflow="hidden">
        <Grid container spacing={4}>
          <Grid item container xs={12} spacing={4} direction="row">
            <Grid item container alignItems={'center'} xs={12} sm={6}>
              <Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  {t`sectionETH-content-10`}
                </Typography>
                <Typography color="text.secondary">
                  {t`sectionETH-content-11`}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              alignItems={'center'}
              xs={12}
              sm={6}
            >
              <Box
                component={'img'}
                src="/images/decentralize.png"
                width={1}
                maxWidth={'65%'}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={4} direction="row-reverse">
            <Grid item container alignItems={'center'} xs={12} sm={6}>
              <Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  {t`sectionETH-content-12`}
                </Typography>
                <Typography color="text.secondary">
                  {t`sectionETH-content-13`}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              alignItems={'center'}
              xs={12}
              sm={6}
            >
              <Box
                component={'img'}
                src="/images/ethereum.png"
                width={1}
                maxWidth={'45%'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Typography
        component={'p'}
        color={'text.secondary'}
        align={'center'}
        marginBottom={{ xs: 6, sm: 10 }}
      >
        {t`sectionETH-content-14`}
        <br />
        {t`sectionETH-content-15`}
      </Typography>
    </SectionWrapper>
  );
}
