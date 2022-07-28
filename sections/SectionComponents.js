import { Button, Box, Typography, Grid, Avatar } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { t } from '@lingui/macro';
import List from '@mui/material/List';

import ListItem from '../components/ListItem';
import SectionWrapper from './SectionWrapper';

export default function SectionComponents() {
  const theme = useTheme();

  return (
    <SectionWrapper
      title={t`sectionComponents-title-10`}
      description={t`sectionComponents-title-11`}
      id="components"
    >
      <Box>
        <Typography
          textAlign="center"
          marginBottom={6}
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
        >
          {t`sectionComponents-title-12`}
        </Typography>
      </Box>
      <Box marginBottom={10} overflow="hidden">
        <Grid container spacing={4}>
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
                  {t`sectionComponents-content-10`}
                </Typography>
                <List sx={{ padding: 0, color: '#525f6c' }}>
                  <ListItem
                    text={t`sectionComponents-content-11`}
                    color="#FFFEA6"
                  />
                  <ListItem
                    text={t`sectionComponents-content-12`}
                    color="#FFFEA6"
                  />
                </List>
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
                maxWidth={{ xs: '100%', md: '80%' }}
              />
            </Grid>
          </Grid>
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
                  {t`sectionComponents-content-13`}
                </Typography>
                <List sx={{ padding: 0, color: '#525f6c' }}>
                  <ListItem
                    text={t`sectionComponents-content-14`}
                    color="#FFFEA6"
                  />
                  <ListItem
                    text={t`sectionComponents-content-15`}
                    color="#FFFEA6"
                  />
                </List>
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
                src="/images/tokenlist.png"
                width={1}
                maxWidth={'70%'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Typography
        textAlign="center"
        marginBottom={6}
        variant="h5"
        sx={{ fontWeight: 900 }}
      >
        {t`sectionComponents-content-16`}
      </Typography>
      <Box marginBottom={4} display="flex" justifyContent="center">
        <Box
          component={'img'}
          src="/images/ecosystem.png"
          width={1}
          maxWidth={'70%'}
        />
      </Box>
      <Typography
        component={'p'}
        color={'text.secondary'}
        align={'center'}
        marginBottom={{ xs: 6, sm: 10 }}
      >
        {t`sectionComponents-content-17`}
      </Typography>
    </SectionWrapper>
  );
}
