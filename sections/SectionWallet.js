import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { t } from '@lingui/macro';
import { Step } from '../components/Stepper';
import LightImage from '../components/LightImage';
import FAQList from '../components/FAQList';

import SectionWrapper from './SectionWrapper';

export default function SectionWallet() {
  return (
    <SectionWrapper
      title={t`sectionWallet-title-10`}
      description={t`sectionWallet-title-11`}
      id="wallet"
      sectionColor="#FBBD78"
    >
      <Box
        marginBottom={{ xs: 4, sm: 6, md: 8 }}
        sx={{ maxWidth: 680, margin: '0 auto' }}
      >
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
          marginBottom={{ xs: 6, sm: 10 }}
        >
          {t`sectionWallet-title-14`}
          <Link color="#377dff" target="_blank" href={'https://metamask.io/'}>
            https://metamask.io/
          </Link>
          {t`sectionWallet-title-15`}
        </Typography>

        <Box>
          <Step index={1} label={t`sectionWallet-content-10`}>
            <Typography sx={{ wordBreak: 'break-all' }} variant="body1">
              {t`sectionWallet-content-11`}
              {` `}
              <Link
                color="#377dff"
                target="_blank"
                href={'https://metamask.io/download/'}
              >
                https://metamask.io/download/
              </Link>
              ，{t`sectionWallet-content-12`}
            </Typography>
            <LightImage src="/images/installmetamask.jpg" />
            <Typography variant="body1">
              {t`sectionWallet-content-13`}
            </Typography>
            <LightImage src="/images/add-to-chrome.jpg" />
          </Step>
          <Step index={2} label={t`sectionWallet-content-14`}>
            <Typography variant="body1">
              {t`sectionWallet-content-15`}
            </Typography>
            <LightImage src="/images/create-a-wallet.jpg" />
            <Typography variant="body1">
              {t`sectionWallet-content-16`}
            </Typography>
            <LightImage maxWidth={400} src="/images/create-password.jpg" />
            <Typography variant="body1">
              {t`sectionWallet-content-17`}
            </Typography>
            <LightImage src="/images/secret-recovery-phrase.jpg" />
            <Typography variant="body1">
              {t`sectionWallet-content-18`}
            </Typography>
          </Step>
          <Step index={3} label={t`sectionWallet-content-19`}>
            <Typography variant="body1">
              {t`sectionWallet-content-20`}
            </Typography>
            <LightImage src="/images/first-wallet.jpg" />
            <Typography variant="body1">
              {t`sectionWallet-content-21`}
            </Typography>
            <LightImage src="/images/get-wallet-address.jpg" />
            <Typography
              variant="body1"
              gutterBottom
              sx={{ wordBreak: 'break-word' }}
            >
              {t`sectionWallet-content-22`}
            </Typography>
            <Typography variant="body1">
              {t`sectionWallet-content-23`}
            </Typography>
          </Step>
          <Step index={4} label={t`sectionWallet-content-24`}>
            <Typography fontWeight="700" variant="body1" gutterBottom>
              {t`sectionWallet-content-25`}
            </Typography>
            <Typography variant="body1">
              {t`sectionWallet-content-26`}
            </Typography>
            <LightImage src="/images/get-private-key.jpg" />
            <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
              {t`sectionWallet-content-27`}
            </Typography>
            <LightImage src="/images/export-private-key.jpg" />
            <LightImage src="/images/private-keys.jpg" />
            <Typography variant="body1" gutterBottom>
              {t`sectionWallet-content-28`}
            </Typography>
          </Step>
        </Box>
        <Typography
          variant="h6"
          textAlign="center"
          marginBottom={{ xs: 3, sm: 6 }}
          component="div"
          sx={{ fontWeight: 900 }}
        >
          {t`sectionWallet-content-29`}
        </Typography>
        <Box>
          <Typography variant="body1" marginBottom={2}>
            {t`sectionWallet-content-30`}
          </Typography>
          <Typography variant="body1" marginBottom={2}>
            {t`sectionWallet-content-31`}
          </Typography>
          <Typography variant="body1" marginBottom={2}>
            {t`sectionWallet-content-32`}
          </Typography>
        </Box>

        <Box marginTop={{ xs: 3, sm: 6 }}>
          <FAQList
            title={'FAQ'}
            items={[
              {
                title: t`sectionWallet-content-111`,
                subtitle: (
                  <Box>
                    {t`sectionWallet-content-112`}
                    <Box
                      maxWidth="100%"
                      component="img"
                      src="/images/words-wallets.png"
                    />
                  </Box>
                ),
              },
              {
                title: t`sectionWallet-content-113`,
                subtitle: (
                  <Box>
                    {t`sectionWallet-content-114`}
                    <Link
                      color="#377dff"
                      target="_blank"
                      href={'https://iancoleman.io/bip39/'}
                    >
                      https://iancoleman.io/bip39/
                    </Link>
                  </Box>
                ),
              },
              {
                title: t`sectionWallet-content-33`,
                subtitle: (
                  <Box>
                    {t`sectionWallet-content-34`}
                    <LightImage
                      noShadow
                      src="/images/difficulty-of-guessing.jpg"
                    />
                  </Box>
                ),
              },
            ]}
          />
        </Box>
      </Box>
    </SectionWrapper>
  );
}
