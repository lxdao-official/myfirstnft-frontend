import React, { useState } from 'react';
import {
  Box,
  Typography,
  Link,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { t } from '@lingui/macro';
import { Step } from '../components/Stepper';
import LightImage from '../components/LightImage';

import SectionWrapper from './SectionWrapper';

export default function SectionGetETH() {
  const [hasEth, setHasEth] = useState();
  const [hasFrens, setHasFrens] = useState();

  let instructions = null;

  if (hasEth === 'true') {
    instructions = (
      <>
        <Step index={1} label={t`sectionGetETH-content-10`}>
          <Typography variant="body1">{t`sectionGetETH-content-11`}</Typography>
          <LightImage src="/images/withdrawal.jpg" />
          <Typography variant="body1">{t`sectionGetETH-content-12`}</Typography>
        </Step>
        <Step index={2} label={t`sectionGetETH-content-13`}>
          <Typography variant="body1">{t`sectionGetETH-content-14`}</Typography>
          <LightImage src="/images/withdrawal-verification.jpg" />
          <Typography variant="body1">{t`sectionGetETH-content-15`}</Typography>
          <LightImage src="/images/withdrawal-records.jpg" />
          <Typography variant="body1">{t`sectionGetETH-content-16`}</Typography>
          <LightImage maxWidth={300} src="/images/received.jpg" />
        </Step>
      </>
    );
  }

  if (hasFrens === 'true') {
    instructions = (
      <>
        <Step index={1} label={t`sectionGetETH-content-17`}>
          <Typography variant="body1">{t`sectionGetETH-content-18`}</Typography>
        </Step>
        <Step index={2} label={t`sectionGetETH-content-19`}>
          <Typography variant="body1" marginBottom={2}>
            {t`sectionGetETH-content-20`}{' '}
            <Link
              target="_blank"
              color={'inherit'}
              href={'https://etherscan.io/chart/etherprice'}
            >
              https://etherscan.io/chart/etherprice
            </Link>{' '}
            {t`sectionGetETH-content-21`}
          </Typography>
          <Typography variant="body1">{t`sectionGetETH-content-22`}</Typography>
        </Step>
      </>
    );
  } else if (hasFrens === 'false') {
    instructions = (
      <>
        <Typography variant="h6" marginBottom={4}>
          {t`sectionGetETH-content-23`}
        </Typography>
        <Step index={1} label={t`sectionGetETH-content-24`}>
          <Typography variant="body1">{t`sectionGetETH-content-25`}</Typography>
          <LightImage src="/images/buy-eth.jpg" />
          <Typography variant="body1">{t`sectionGetETH-content-26`}</Typography>
        </Step>
        <Step index={2} label={t`sectionGetETH-new-content-1`}>
          <Typography variant="body1" marginBottom={2}>
            {t`sectionGetETH-content-27`}
          </Typography>
          <Typography variant="body1">{t`sectionGetETH-content-28`}</Typography>
          <Typography variant="body1">
            - {t`sectionGetETH-content-29`}{' '}
            <Link
              target="_blank"
              color={'inherit'}
              href={'https://www.binance.com/'}
            >
              https://www.binance.com/
            </Link>
          </Typography>
          <Typography variant="body1">
            - FTX{' '}
            <Link target="_blank" color={'inherit'} href={'https://ftx.com/'}>
              https://ftx.com/
            </Link>
          </Typography>
          <Typography variant="body1">
            - Huobi{' '}
            <Link
              target="_blank"
              color={'inherit'}
              href={'https://www.huobi.com/'}
            >
              https://www.huobi.com/
            </Link>
          </Typography>
          <Typography variant="body1">
            - OKX{' '}
            <Link
              target="_blank"
              color={'inherit'}
              href={'https://www.okx.com/'}
            >
              https://www.okx.com/
            </Link>
          </Typography>

          <Typography marginTop={2} variant="body1">
            {t`sectionGetETH-content-30`}
            <br />
            1. {t`sectionGetETH-content-31`}
            <br />
            2. {t`sectionGetETH-content-32`}
          </Typography>

          <Typography marginTop={2} variant="body1">
            {t`sectionGetETH-content-33`}{' '}
            <Link
              target="_blank"
              color={'inherit'}
              href={'https://ethereum.org/'}
            >
              https://ethereum.org/
            </Link>
          </Typography>
        </Step>
      </>
    );
  }

  return (
    <SectionWrapper
      title={t`sectionGetETH-content-34`}
      description={t`sectionGetETH-content-35`}
      id="get-eth"
      sectionColor="#FBBD78"
    >
      <Typography
        variant={'h6'}
        component={'p'}
        color={'text.secondary'}
        align={'center'}
      >
        {t`sectionGetETH-content-36`}
      </Typography>
      <Typography
        component={'p'}
        align={'center'}
        marginBottom={4}
        fontWeight={700}
      >
        {t`sectionGetETH-legal-notice`}
      </Typography>

      <Box marginBottom={10} overflow="hidden" margin="0 auto" maxWidth={680}>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <FormControl sx={{ marginRight: 3 }}>
            <FormLabel>{t`sectionGetETH-content-37`}</FormLabel>
            <RadioGroup
              row
              value={hasEth}
              onChange={(event) => {
                event.preventDefault();
                setHasEth(event.target.value);
                setHasFrens(undefined);
              }}
            >
              <FormControlLabel
                value="true"
                control={<Radio />}
                label={t`sectionGetETH-content-38`}
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label={t`sectionGetETH-content-39`}
              />
            </RadioGroup>
          </FormControl>
          {hasEth === 'false' && (
            <FormControl>
              <FormLabel>{t`sectionGetETH-content-40`}</FormLabel>
              <RadioGroup
                row
                value={hasFrens}
                onChange={(event) => {
                  event.preventDefault();
                  setHasFrens(event.target.value);
                }}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label={t`sectionGetETH-content-41`}
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label={t`sectionGetETH-content-42`}
                />
              </RadioGroup>
            </FormControl>
          )}
        </Box>
        <Box marginTop={4} width="100%">
          {instructions}
        </Box>
      </Box>
    </SectionWrapper>
  );
}
