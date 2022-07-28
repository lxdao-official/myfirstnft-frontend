import React from 'react';
import {
  Box,
  Typography,
  Grid,
} from '@mui/material';
import { t } from '@lingui/macro';
import List from '@mui/material/List';
import ListItem from '../components/ListItem';
import LightImage from '../components/LightImage';
import ConnectWallet from '../components/ConnectWallet';
import SectionWrapper from './SectionWrapper';

export default function SectionConnectWallet() {
  return (
    <SectionWrapper
      title={t`sectionConnectWallet-title-10`}
      description={t`sectionConnectWallet-title-11`}
      id="connect-wallet"
      sectionColor="#FBBD78"
    >
      <Typography
        variant={'h6'}
        component={'p'}
        color={'text.secondary'}
        align={'center'}
        marginBottom={4}
      >
        {t`sectionConnectWallet-content-10`}
      </Typography>
      <Box
        marginBottom={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ConnectWallet />
      </Box>
      <Typography
        variant={'h6'}
        component={'p'}
        align={'center'}
        marginTop={4}
        marginBottom={4}
        sx={{ fontWeight: 900 }}
      >
        {t`sectionConnectWallet-content-11`}
      </Typography>
      <Box marginBottom={{ xs: 6, sm: 10 }} overflow="hidden">
        <Grid container spacing={4}>
          <Grid item container xs={12} spacing={4} direction="row">
            <Grid item container alignItems={'center'} xs={12} sm={6}>
              <Box>
                <Typography
                  variant={'h6'}
                  marginBottom={2}
                  sx={{
                    fontWeight: 700,
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  {t`sectionConnectWallet-content-12`}
                </Typography>
                <List sx={{ padding: 0, color: '#525f6c' }}>
                  <ListItem
                    text={t`sectionConnectWallet-content-13`}
                    color="#FBBD78"
                  ></ListItem>
                  <ListItem
                    text={t`sectionConnectWallet-content-14`}
                    color="#FBBD78"
                  ></ListItem>
                  <ListItem
                    text={t`sectionConnectWallet-content-15`}
                    color="#FBBD78"
                  ></ListItem>
                  <ListItem
                    text={t`sectionConnectWallet-content-16`}
                    color="#FBBD78"
                  ></ListItem>
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
              <LightImage maxWidth={400} src="/images/connectwallet.jpg" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </SectionWrapper>
  );
}
