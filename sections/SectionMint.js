import React, { useContext } from 'react';

import {
  Box,
  Button,
  Typography,
  Link,
  Tooltip,
  Grid,
  TextField,
  Icon,
  useMediaQuery,
  useTheme,
  Alert,
  AlertTitle,
} from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { MintDataContext } from '../hooks/useMintData';
import { t } from '@lingui/macro';
import { Step } from '../components/Stepper';
import LightImage from '../components/LightImage';
import SectionWrapper from './SectionWrapper';
import PFPMaker from '../components/PFPMaker/PFPMaker';
import { getEtherScanDomain, getOpenSeaDomain } from '../common/utils';

function generateShareMsg() {
  return t`mintRecord-content-10`;
}

function MintRecordItem(props) {
  const shareMsg = generateShareMsg();
  const mintData = props.mintData;

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      display="flex"
      flexDirection={smallScreen ? 'column' : 'row'}
      marginTop={4}
    >
      <Box width={1} maxWidth="300px" flexShrink={0}>
        <Box
          width="100%"
          border="2px solid #000"
          component="img"
          src={mintData.image}
        ></Box>
      </Box>
      <Box marginLeft={smallScreen ? 0 : 4} width="100%">
        <Box marginBottom={2}>
          <Typography
            fontWeight={700}
            variant="h6"
            component="p"
            marginBottom={1}
          >
            {t`mintRecord-content-11`}
          </Typography>
          <Link
            marginRight={2}
            color={'inherit'}
            download="mfnft.png"
            href={mintData.image}
          >
            {t`mintRecord-content-12`}
          </Link>
          <Link
            marginRight={2}
            color={'inherit'}
            target="_blank"
            href={`https://${getEtherScanDomain()}/tx/${mintData.tx}`}
          >
            {t`mintRecord-content-13`}
          </Link>
          <Link
            target="_blank"
            color={'inherit'}
            href={`https://${getOpenSeaDomain()}/account`}
          >
            {t`mintRecord-content-14`}
          </Link>
        </Box>
        <Box>
          <Typography
            fontWeight={700}
            marginBottom={1}
            variant="h6"
            component="p"
          >
            {t`mintRecord-content-15`}
          </Typography>
          <TextField
            sx={{
              width: '100%',
            }}
            multiline
            rows={4}
            value={shareMsg}
          />
          <Box paddingY={{ xs: 1, sm: 2 }} display={'flex'}>
            <CopyToClipboard text={shareMsg}>
              <Button
                size={'small'}
                variant={'contained'}
                sx={{ marginRight: { xs: 2, mr: 10 } }}
              >
                Copy
              </Button>
            </CopyToClipboard>
            <Button
              size={'small'}
              variant={'contained'}
              target="_blank"
              href={
                'https://twitter.com/share?text=' +
                shareMsg +
                '&url=https://myfirstnft.info/'
              }
              startIcon={<Icon sx={{ color: '#fff' }}>add_circle</Icon>}
            >
              Tweet
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function MintRecord() {
  const { mintData } = useContext(MintDataContext);

  if (mintData && mintData.length === 0) {
    return (
      <Alert severity="info">
        <AlertTitle>{t`mint-record-not-found`}</AlertTitle>
        {t`mint-record-not-found-tip1`}{' '}
        <Link
          target="_blank"
          color={'inherit'}
          href={`https://${getOpenSeaDomain()}/account`}
        >
          OpenSea
        </Link>{' '}
        {t`mint-record-not-found-tip2`}
      </Alert>
    );
  }

  return (
    mintData &&
    mintData.map((mint, index) => {
      return <MintRecordItem mintData={mint} key={index} />;
    })
  );
}

export default function SectionMint() {
  return (
    <SectionWrapper
      title={t`mintRecord-content-16`}
      description={t`mintRecord-content-17`}
      id="mint"
      sectionColor="#FBBD78"
    >
      <Typography
        variant={'h6'}
        component={'p'}
        color={'text.secondary'}
        align={'center'}
        marginBottom={{ xs: 6, sm: 10 }}
      >
        {t`mintRecord-content-20`}
      </Typography>
      <Box margin="0 auto" maxWidth={920}>
        <Step index={1} label={t`mintRecord-content-21`}>
          <Typography variant="body1" marginBottom={4}>
            {t`mintRecord-content-22`}（
            <Tooltip
              placement="top"
              title={
                <Typography sx={{ padding: '6px', fontSize: '12px' }}>
                  {t`mintRecord-content-23`}
                  <Link
                    color={'inherit'}
                    target="_blank"
                    href={
                      'https://creativecommons.org/share-your-work/public-domain/cc0/'
                    }
                  >
                    {t`mintRecord-content-24`}
                  </Link>
                </Typography>
              }
            >
              <span
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >{t`mintRecord-content-25`}</span>
            </Tooltip>
            ）
          </Typography>
          <PFPMaker />
          <Typography variant="body1" color="text.secondary" marginTop={1}>
            {t`mintRecord-content-26`}{' '}
            <Link
              color="#377dff"
              target="_blank"
              href={'https://twitter.com/muxin_eth'}
            >
              @muxin_eth
            </Link>
          </Typography>
        </Step>
        <Step index={2} label={t`mintRecord-content-27`}>
          <Box marginBottom={2} overflow="hidden">
            <Grid container spacing={4}>
              <Grid item container xs={12} spacing={4} direction="row">
                <Grid item container alignItems={'center'} xs={12} sm={6}>
                  <Box width="100%">
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      sx={{ fontWeight: 700 }}
                      marginBottom={4}
                    >
                      {t`mintRecord-content-28`}
                    </Typography>
                    <Typography gutterBottom color="text.secondary">
                      {t`mintRecord-content-29`}
                    </Typography>
                    <Typography
                      gutterBottom
                      color="text.secondary"
                      marginBottom={4}
                    >
                      {t`mintRecord-content-30`}
                    </Typography>
                    <Typography gutterBottom color="text.secondary">
                      {t`mintRecord-content-31`}
                      <strong>{t`mintRecord-content-32`}</strong>
                      {t`mintRecord-content-33`}
                    </Typography>
                    <Typography gutterBottom color="text.secondary">
                      {t`mintRecord-content-34`}
                      <strong>{t`mintRecord-content-35`}</strong>
                    </Typography>
                    <Typography
                      marginTop={4}
                      gutterBottom
                      color="text.secondary"
                    >
                      {t`mintRecord-content-36`}
                      <strong>{t`mintRecord-content-37`}</strong>，
                      {t`mintRecord-content-38`}{' '}
                      <Link
                        color="#377dff"
                        target="_blank"
                        href={'https://sepolia.etherscan.io/gastracker'}
                      >
                        https://sepolia.etherscan.io/gastracker
                      </Link>{' '}
                      {t`mintRecord-content-39`}
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
                  <LightImage maxWidth={300} src="/images/gas-fee.jpg" />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Step>
        <Step index={3} label={t`mintRecord-content-40`}>
          <Box overflow="hidden">
            <MintRecord />
          </Box>
        </Step>
      </Box>
    </SectionWrapper>
  );
}
