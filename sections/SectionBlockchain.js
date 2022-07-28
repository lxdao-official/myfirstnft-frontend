import { Box, Typography, Grid, Avatar } from '@mui/material';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { alpha, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';

import ListItem from '../components/ListItem';
import SectionWrapper from './SectionWrapper';
import { t } from '@lingui/macro';

export default function SectionBlockchain() {
  const theme = useTheme();

  return (
    <SectionWrapper
      title={t`sectionBlockchain-title-1`}
      description={t`sectionBlockchain-title-2`}
      id="blockchain"
      sectionColor="#FFFEA6"
    >
      <Typography
        textAlign="center"
        marginBottom={10}
        variant={'h6'}
        component={'p'}
        color={'text.secondary'}
      >
        {t`sectionBlockchain-subtitle-1`}
      </Typography>
      <Box marginBottom={{ xs: 6, sm: 16 }}>
        <Grid container spacing={{ xs: 6, sm: 12 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box width={1} height={1}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box textAlign="center" width="100%">
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {t`sectionBlockchain-content-1`}
                  </Typography>
                </Box>
                <List
                  width={{ xs: '100%', sm: '75%' }}
                  sx={{ padding: 0, color: '#525f6c' }}
                >
                  <ListItem
                    text={t`sectionBlockchain-content-2`}
                    color="#FFFEA6"
                  />
                  <ListItem
                    text={t`sectionBlockchain-content-3`}
                    color="#FFFEA6"
                  />
                  <ListItem
                    text={t`sectionBlockchain-content-4`}
                    color="#FFFEA6"
                  />
                </List>
                <Box display="flex" justifyContent="center">
                  <Box
                    component="img"
                    src="/images/block.png"
                    sx={{ width: '60%' }}
                    marginBottom={4}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box width={1} height={1}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box textAlign="center" width="100%">
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {t`sectionBlockchain-content-5`}
                  </Typography>
                </Box>
                <List
                  width={{ xs: '100%', sm: '75%' }}
                  sx={{ padding: 0, color: '#525f6c' }}
                >
                  <ListItem
                    text={t`sectionBlockchain-content-6`}
                    color="#FFFEA6"
                  />
                  <ListItem
                    text={t`sectionBlockchain-content-7`}
                    color="#FFFEA6"
                  />
                  <ListItem
                    text={t`sectionBlockchain-content-8`}
                    color="#FFFEA6"
                  />
                </List>
                <Box display="flex" justifyContent="center">
                  <Box
                    component="img"
                    src="/images/chain.png"
                    sx={{ width: '60%' }}
                    marginBottom={4}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom={{ xs: 6, sm: 8 }}>
        <Typography
          textAlign="center"
          marginBottom={10}
          variant="h6"
          sx={{ fontWeight: 900 }}
        >
          {t`sectionBlockchain-content-9`}
          {` `}
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
            {t`sectionBlockchain-content-10`}
          </Typography>
        </Typography>
        <Box overflow="hidden">
          <Parallax translateX={[0, -100]}>
            <Box
              width="100000px"
              component="div"
              sx={{
                background: 'url("/images/blockchain.png")',
                height: '240px',
                backgroundSize: 'auto 240px',
              }}
            ></Box>
          </Parallax>
        </Box>
      </Box>
      <Box marginBottom={{ xs: 6, sm: 12 }}>
        <Typography
          textAlign="center"
          marginBottom={6}
          variant="h5"
          sx={{ fontWeight: 900 }}
        >
          {t`sectionBlockchain-content-11`}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              width={1}
              height={1}
              backgroundColor="#f8f8f8"
              padding="15px"
              borderRadius="8px"
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
              >
                <Box
                  display="flex"
                  justifyContent={{ xs: 'center', sm: 'flex-start' }}
                >
                  <Box
                    component="img"
                    src="/images/nochange.png"
                    sx={{ width: '30%' }}
                    marginBottom={2}
                  ></Box>
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {t`sectionBlockchain-content-12`}
                </Typography>
                <Typography color="text.secondary">
                  {t`sectionBlockchain-content-13`}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              width={1}
              height={1}
              backgroundColor="#f8f8f8"
              padding="15px"
              borderRadius="8px"
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
              >
                <Box
                  display="flex"
                  justifyContent={{ xs: 'center', sm: 'flex-start' }}
                >
                  <Box
                    component="img"
                    src="/images/anonymous.png"
                    sx={{ width: '30%' }}
                    marginBottom={2}
                  ></Box>
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {t`sectionBlockchain-content-14`}
                </Typography>
                <Typography color="text.secondary">
                  {t`sectionBlockchain-content-15`}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              width={1}
              height={1}
              backgroundColor="#f8f8f8"
              padding="15px"
              borderRadius="8px"
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
              >
                <Box
                  display="flex"
                  justifyContent={{ xs: 'center', sm: 'flex-start' }}
                >
                  <Box
                    component="img"
                    src="/images/fast-trading.png"
                    sx={{ width: '30%' }}
                    marginBottom={2}
                  ></Box>
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {t`sectionBlockchain-content-16`}
                </Typography>
                <Typography color="text.secondary">
                  {t`sectionBlockchain-content-17`}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom={10}>
        <Typography textAlign="center" marginBottom={4} variant="h6">
          {t`sectionBlockchain-content-18`}
        </Typography>
        <Typography
          textAlign="center"
          marginBottom={6}
          variant="h5"
          sx={{ fontWeight: 900 }}
        >
          {t`sectionBlockchain-content-19`}
        </Typography>
        <Box display="flex" justifyContent="center">
          <Box
            component="img"
            src="/images/decentralize.png"
            sx={{ width: '70%' }}
            marginBottom={4}
          ></Box>
        </Box>
        <Typography
          component={'p'}
          color={'text.secondary'}
          align={'center'}
          marginBottom={8}
        >
          {t`sectionBlockchain-content-20`}
        </Typography>
        <Typography
          textAlign="center"
          marginBottom={6}
          variant="h6"
          sx={{ fontWeight: 900 }}
        >
          {t`sectionBlockchain-content-21`}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box
              width={1}
              height={1}
              backgroundColor="#f8f8f8"
              padding="15px"
              borderRadius="8px"
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
              >
                <Box
                  display="flex"
                  justifyContent={{ xs: 'center', sm: 'flex-start' }}
                >
                  <Box
                    component="img"
                    src="/images/decentralization-icon.png"
                    sx={{ width: '30%' }}
                    marginBottom={2}
                  ></Box>
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {t`sectionBlockchain-content-22`}
                </Typography>
                <Typography color="text.secondary">
                  {t`sectionBlockchain-content-23`}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              width={1}
              height={1}
              backgroundColor="#f8f8f8"
              padding="15px"
              borderRadius="8px"
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
              >
                <Box
                  display="flex"
                  justifyContent={{ xs: 'center', sm: 'flex-start' }}
                >
                  <Box
                    component="img"
                    src="/images/nochange.png"
                    sx={{ width: '30%' }}
                    marginBottom={2}
                  ></Box>
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {t`sectionBlockchain-content-24`}
                </Typography>
                <Typography color="text.secondary">
                  {t`sectionBlockchain-content-25`}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </SectionWrapper>
  );
}
