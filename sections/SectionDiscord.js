import { Link, Box, Typography } from '@mui/material';
import React from 'react';
import { t } from '@lingui/macro';
import { Step } from '../components/Stepper';
import LightImage from '../components/LightImage';
import { discordLink } from '../common/config';
import SectionWrapper from './SectionWrapper';

export default function SectionDiscord() {
  return (
    <SectionWrapper
      title={t`sectionDiscord-title-10`}
      description={t`sectionDiscord-title-11`}
      id="discord"
      sectionColor="#FBBD78"
    >
      <Box>
        <Typography
          textAlign="center"
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
        >
          {t`sectionDiscord-title-15`}
        </Typography>
        <Typography
          textAlign="center"
          marginBottom={{ xs: 6, sm: 10 }}
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
        >
          {t`sectionDiscord-title-16`}
        </Typography>
      </Box>
      <Box overflow="hidden" sx={{ maxWidth: 680, margin: '0 auto' }}>
        <Step index={1} label={t`sectionDiscord-title-17`}>
          <Typography variant="body1" gutterBottom>
            {t`sectionDiscord-title-18`}{' '}
            <Link color="#377dff" target="_blank" href={discordLink}>
              {discordLink}
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {t`sectionDiscord-title-19`}
          </Typography>
        </Step>
        <Step index={2} label={t`sectionDiscord-title-20`}>
          <Typography variant="body1" gutterBottom>
            {t`sectionDiscord-title-21`}
          </Typography>
          <LightImage src="/images/verify-wallet.jpg" />
          <Typography variant="body1" gutterBottom>
            {t`sectionDiscord-title-22`}
          </Typography>
          <LightImage src="/images/callab-land.jpg" />
          <Typography variant="body1" gutterBottom>
            {t`sectionDiscord-title-23`}
          </Typography>
          <LightImage maxWidth={300} src="/images/sign-message.jpg" />
          <Typography variant="body1" gutterBottom>
            {t`sectionDiscord-title-24`}
          </Typography>
        </Step>
      </Box>
    </SectionWrapper>
  );
}
