import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { t } from '@lingui/macro';

import List from '@mui/material/List';

import ListItem from '../components/ListItem';
import LightImage from '../components/LightImage';
import FAQList from '../components/FAQList';

import SectionWrapper from './SectionWrapper';

export default function SectionSecurity() {
  return (
    <SectionWrapper
      title={t`sectionSecurity-title-10`}
      description={t`sectionSecurity-title-11`}
      id="security"
      sectionColor="#FBBD78"
    >
      <Typography
        variant={'h6'}
        component={'p'}
        color={'text.secondary'}
        align={'center'}
        marginBottom={{ xs: 6, sm: 10 }}
      >
        {t`sectionSecurity-title-14`}
      </Typography>

      <Box
        marginLeft={'auto'}
        marginRight={'auto'}
        marginBottom={{ xs: 6, sm: 10 }}
        sx={{
          width: {
            xs: '100%',
            md: '80%',
            lg: '60%',
          },
        }}
      >
        <FAQList
          title={t`sectionSecurity-content-10`}
          items={[
            {
              title: t`sectionSecurity-content-11`,
              subtitle: (
                <>
                  <Typography variant="body1" component="p" gutterBottom>
                    {t`sectionSecurity-content-12`}
                  </Typography>
                  <Typography
                    variant="h7"
                    component="p"
                    gutterBottom
                    marginTop={2}
                    sx={{ fontWeight: 700 }}
                  >
                    {t`sectionSecurity-content-13`}
                  </Typography>
                  <List sx={{ padding: 0 }}>
                    <ListItem
                      text={t`sectionSecurity-content-14`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-15`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-16`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-17`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-18`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-19`}
                      color="#FBBD78"
                    />
                  </List>
                  <Typography
                    variant="h7"
                    component="p"
                    gutterBottom
                    marginTop={2}
                    sx={{ fontWeight: 700 }}
                  >
                    {t`sectionSecurity-content-20`}：
                  </Typography>
                  <List sx={{ padding: 0 }}>
                    <ListItem
                      text={
                        <Typography component="p">
                          {t`sectionSecurity-content-21`}（
                          <Link
                            color="#377dff"
                            target="_blank"
                            href={
                              'https://www.bankrate.com/investing/how-to-recover-lost-bitcoins-and-other-crypto/#:~:text=A%202017%20report%20from%20Chainalysis,when%20Bitcoin%20is%20fully%20mined.'
                            }
                          >
                            {t`sectionSecurity-content-22`}
                          </Link>
                          )
                        </Typography>
                      }
                      color="#FBBD78"
                    />
                    <ListItem
                      text={
                        <Typography component="p">
                          {t`sectionSecurity-content-23`}（
                          <Link
                            color="#377dff"
                            href={'https://hacked.slowmist.io/'}
                          >
                            {t`sectionSecurity-content-24`}
                          </Link>
                          ）
                        </Typography>
                      }
                      color="#FBBD78"
                    />
                  </List>
                  <Typography
                    variant="h7"
                    component="p"
                    gutterBottom
                    marginTop={2}
                    sx={{ fontWeight: 700 }}
                  >
                    {t`sectionSecurity-content-25`}：
                  </Typography>
                  <List sx={{ padding: 0 }}>
                    <ListItem
                      text={
                        <Typography component="p">
                          {t`sectionSecurity-content-26`}{' '}
                          <Link
                            target="_blank"
                            color="#377dff"
                            href={'https://bitwarden.com/'}
                          >
                            BitWarden
                          </Link>{' '}
                          {t`sectionSecurity-content-27`}{' '}
                          <Link
                            target="_blank"
                            color="#377dff"
                            href={'https://1password.com/'}
                          >
                            1Password
                          </Link>
                          。
                        </Typography>
                      }
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-28`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-29`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-30`}
                      color="#FBBD78"
                    />
                  </List>
                </>
              ),
            },
            {
              title: t`sectionSecurity-content-31`,
              subtitle: (
                <>
                  <Typography variant="body1" component="p" gutterBottom>
                    {t`sectionSecurity-content-32`}
                  </Typography>
                  <Typography
                    variant="h7"
                    component="p"
                    gutterBottom
                    marginTop={2}
                    sx={{ fontWeight: 700 }}
                  >
                    {t`sectionSecurity-content-33`}
                  </Typography>
                  <List sx={{ padding: 0 }}>
                    <ListItem
                      text={t`sectionSecurity-content-34`}
                      color="#FBBD78"
                    />

                    <Box paddingLeft={3}>
                      <LightImage
                        maxWidth={300}
                        src="/images/metamask_sign.jpeg"
                      />
                    </Box>
                    <ListItem
                      text={t`sectionSecurity-content-35`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-36`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-37`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-38`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-dc`}
                      color="#FBBD78"
                    />
                  </List>

                  <Typography
                    variant="h7"
                    component="p"
                    gutterBottom
                    marginTop={2}
                    sx={{ fontWeight: 700 }}
                  >
                    {t`sectionSecurity-content-39`}：
                  </Typography>
                  <List sx={{ padding: 0 }}>
                    <ListItem
                      text={
                        <Typography component="p">
                          {t`sectionSecurity-content-40`}（
                          <Link
                            target="_blank"
                            color="#377dff"
                            href={
                              'https://www.theverge.com/2022/2/20/22943228/opensea-phishing-hack-smart-contract-bug-stolen-nft'
                            }
                          >
                            {t`sectionSecurity-content-41`}
                          </Link>
                          ）
                        </Typography>
                      }
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-42`}
                      color="#FBBD78"
                    />
                  </List>
                  <Typography
                    variant="h7"
                    component="p"
                    gutterBottom
                    marginTop={2}
                    sx={{ fontWeight: 700 }}
                  >
                    {t`sectionSecurity-other-examples-title`}：
                  </Typography>
                  <List sx={{ padding: 0 }}>
                    <ListItem
                      text={
                        <Typography component="p">
                          {t`sectionSecurity-other-example-1`}
                          <Link
                            color="#377dff"
                            target="_blank"
                            href={
                              'https://mirror.xyz/yofine.eth/lHk2R_wawgmWltAirWWLgLlWIO4RzV7o_Qipf9C4z08'
                            }
                          >
                            {t`sectionSecurity-other-example-1-link`}
                          </Link>
                        </Typography>
                      }
                      color="#FBBD78"
                    />
                  </List>
                  <Typography
                    variant="h7"
                    component="p"
                    gutterBottom
                    marginTop={2}
                    sx={{ fontWeight: 700 }}
                  >
                    {t`sectionSecurity-content-43`}：
                  </Typography>
                  <List sx={{ padding: 0 }}>
                    <ListItem
                      text={t`sectionSecurity-content-44`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-45`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-46`}
                      color="#FBBD78"
                    />
                    <ListItem
                      text={t`sectionSecurity-content-47`}
                      color="#FBBD78"
                    />
                  </List>
                </>
              ),
            },
            {
              title: t`sectionSecurity-content-48`,
              subtitle: (
                <>
                  <Typography variant="body1" component="p" gutterBottom>
                    {t`sectionSecurity-content-49`}
                  </Typography>

                  <Typography
                    variant="h7"
                    component="p"
                    gutterBottom
                    marginTop={2}
                    sx={{ fontWeight: 700 }}
                  >
                    {t`sectionSecurity-content-50`}：
                  </Typography>
                  <List sx={{ padding: 0 }}>
                    <ListItem
                      text={t`sectionSecurity-content-51`}
                      color="#FBBD78"
                    />
                  </List>
                  <Typography
                    variant="h7"
                    component="p"
                    gutterBottom
                    marginTop={2}
                    sx={{ fontWeight: 700 }}
                  >
                    {t`sectionSecurity-content-52`}：
                  </Typography>
                  <List sx={{ padding: 0 }}>
                    <ListItem
                      text={
                        <Typography component="p">
                          {t`sectionSecurity-content-53`}
                          <Link
                            target="_blank"
                            color="#377dff"
                            href={
                              'https://support.google.com/chrome/answer/2364824'
                            }
                          >
                            Share Chrome with others
                          </Link>
                        </Typography>
                      }
                      color="#FBBD78"
                    />
                  </List>
                </>
              ),
            },
          ]}
        />
      </Box>
      <Typography
        variant={'h5'}
        component={'p'}
        align={'center'}
        marginBottom={{ xs: 6, sm: 10 }}
        sx={{ fontWeight: 900 }}
      >
        {t`sectionSecurity-content-54`}
      </Typography>
      <Box marginBottom={{ xs: 6, sm: 10 }} overflow="hidden">
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
                  {t`sectionSecurity-content-55`}
                </Typography>
                <List sx={{ padding: 0, color: '#525f6c' }}>
                  <ListItem
                    text={t`sectionSecurity-content-56`}
                    color="#FBBD78"
                  />
                  <ListItem
                    text={t`sectionSecurity-content-57`}
                    color="#FBBD78"
                  />
                  <ListItem
                    text={t`sectionSecurity-content-58`}
                    color="#FBBD78"
                  />
                </List>
                <Typography color="text.secondary" marginTop={2}>
                  {t`sectionSecurity-content-59`}
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
                src="/images/hot-cold-wallets.png"
                width={1}
                maxWidth={{ xs: '100%', md: '80%' }}
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
                  {t`sectionSecurity-content-60`}
                </Typography>
                <List sx={{ padding: 0, color: '#525f6c' }}>
                  <ListItem
                    text={t`sectionSecurity-content-61`}
                    color="#FBBD78"
                  />
                  <ListItem
                    text={t`sectionSecurity-content-62`}
                    color="#FBBD78"
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
                src="/images/fishing-websites.png"
                width={1}
                maxWidth={{ xs: '100%', md: '80%' }}
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
        {t`sectionSecurity-content-63`}
        <br />
        {t`sectionSecurity-content-64`}{' '}
        <Link
          target="_blank"
          color="#377dff"
          href={
            'https://github.com/slowmist/Blockchain-dark-forest-selfguard-handbook'
          }
        >
          {t`sectionSecurity-content-65`}
        </Link>
        、
        <Link
          target="_blank"
          color="#377dff"
          href={
            'https://e7qjl676i8.feishu.cn/docs/doccn2rvEMHefBYKvyTVRGwe7Pf#'
          }
        >
          {t`sectionSecurity-content-66`}
        </Link>
        。
      </Typography>
    </SectionWrapper>
  );
}
