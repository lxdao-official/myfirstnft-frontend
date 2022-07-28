import { Tabs, Tab, Box, Typography, Link, Grid, Avatar } from '@mui/material';
import React from 'react';
import { t } from '@lingui/macro';
import SectionWrapper from './SectionWrapper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: 3 }}>{children}</Box>}
    </div>
  );
}

export default function SectionNFTValue() {
  const [value, setValue] = React.useState(0);
  const values = [
    {
      title: t`sectionNFTValue-title-10`,
      subtitle: t`sectionNFTValue-title-11`,
      icon: (
        <Box
          component="img"
          src="/images/unique.png"
          sx={{ width: '30%' }}
          marginBottom={2}
        ></Box>
      ),
    },
    {
      title: t`sectionNFTValue-title-12`,
      subtitle: t`sectionNFTValue-title-13`,
      icon: (
        <Box
          component="img"
          src="/images/transparency.png"
          sx={{ width: '30%' }}
          marginBottom={2}
        ></Box>
      ),
    },
    {
      title: t`sectionNFTValue-title-18`,
      subtitle: t`sectionNFTValue-title-19`,
      icon: (
        <Box
          component="img"
          src="/images/everything.png"
          sx={{ width: '30%' }}
          marginBottom={2}
        ></Box>
      ),
    },
    {
      title: t`sectionNFTValue-title-14`,
      subtitle: t`sectionNFTValue-title-15`,
      icon: (
        <Box
          component="img"
          src="/images/control.png"
          sx={{ width: '30%' }}
          marginBottom={2}
        ></Box>
      ),
    },
    {
      title: t`sectionNFTValue-title-16`,
      subtitle: t`sectionNFTValue-title-17`,
      icon: (
        <Box
          component="img"
          src="/images/rights.png"
          sx={{ width: '30%' }}
          marginBottom={2}
        ></Box>
      ),
    },

    {
      title: t`sectionNFTValue-title-20`,
      subtitle: t`sectionNFTValue-title-21`,
      icon: (
        <Box
          component="img"
          src="/images/unlimited.png"
          sx={{ width: '30%' }}
          marginBottom={2}
        ></Box>
      ),
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SectionWrapper
      title={t`sectionNFTValue-title-22`}
      description={t`sectionNFTValue-title-23`}
      id="nftvalues"
      sectionColor="#CBCDFB"
    >
      <Typography
        textAlign="center"
        marginBottom={6}
        variant={'h6'}
        component={'p'}
        color={'text.secondary'}
      >
        {t`sectionNFTValue-subtitle-1`}
      </Typography>
      <Box marginTop={4}>
        <Grid container spacing={4}>
          {values.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
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
                  alignItems={'center'}
                >
                  {item.icon}
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography
        textAlign="center"
        marginBottom={{ xs: 3, sm: 6 }}
        marginTop={{ xs: 6, sm: 12 }}
        variant="h5"
        sx={{ fontWeight: 900 }}
      >
        {t`sectionNFTValue-content-10`}
      </Typography>
      <Box
        sx={{
          bgcolor: 'background.paper',
          margin: '0 auto',
          height: 'auto',
          width: {
            sm: '100%',
            md: '80%',
            lg: '60%',
          },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="NFT in the future"
          scrollButtons
          allowScrollButtonsMobile
          variant="scrollable"
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            flexShrink: 0,
          }}
        >
          <Tab
            sx={{
              paddingX: 3,
              paddingY: 1,
            }}
            label={
              <Typography
                marginY={1}
                variant="h6"
              >{t`sectionNFTValue-content-46`}</Typography>
            }
          />
          <Tab
            sx={{
              paddingX: 3,
              paddingY: 1,
            }}
            label={
              <Typography
                marginY={1}
                variant="h6"
              >{t`sectionNFTValue-content-11`}</Typography>
            }
          />
          <Tab
            sx={{
              paddingX: 3,
              paddingY: 1,
            }}
            label={
              <Typography
                marginY={1}
                variant="h6"
              >{t`sectionNFTValue-content-12`}</Typography>
            }
          />
          <Tab
            sx={{
              paddingX: 3,
              paddingY: 1,
            }}
            label={
              <Typography
                marginY={1}
                variant="h6"
              >{t`sectionNFTValue-content-13`}</Typography>
            }
          />
          <Tab
            sx={{
              paddingX: 3,
              paddingY: 1,
            }}
            label={
              <Typography
                marginY={1}
                variant="h6"
              >{t`sectionNFTValue-content-14`}</Typography>
            }
          />
          <Tab
            sx={{
              paddingX: 3,
              paddingY: 1,
            }}
            label={
              <Typography
                marginY={1}
                variant="h6"
              >{t`sectionNFTValue-content-15`}</Typography>
            }
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box>
            <Typography gutterBottom variant={'h6'}>
              {t`sectionNFTValue-content-47`}
            </Typography>
            <Typography variant={'body1'} component="p">
              {t`sectionNFTValue-content-48`}
            </Typography>

            <Typography gutterBottom marginTop={4} variant={'h6'}>
              {t`sectionNFTValue-content-49`}
            </Typography>
            <Typography gutterBottom variant={'body1'} component="p">
              {t`sectionNFTValue-content-50`}
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box>
            <Typography gutterBottom variant={'h6'}>
              {t`sectionNFTValue-content-16`}
            </Typography>
            <Typography variant={'body1'} component="p">
              {t`sectionNFTValue-content-17`}
            </Typography>

            <Typography gutterBottom marginTop={4} variant={'h6'}>
              {t`sectionNFTValue-content-18`}
            </Typography>
            <Typography gutterBottom variant={'body1'} component="p">
              {t`sectionNFTValue-content-19`}
            </Typography>
            <Typography gutterBottom variant={'body1'} component="p">
              {t`sectionNFTValue-content-20`}
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box>
            <Typography gutterBottom variant={'h6'}>
              {t`sectionNFTValue-content-21`}
            </Typography>
            <Typography variant={'body1'} component="p">
              {t`sectionNFTValue-content-22`}
            </Typography>

            <Typography gutterBottom marginTop={4} variant={'h6'}>
              {t`sectionNFTValue-content-23`}
            </Typography>
            <Typography gutterBottom variant={'body1'} component="p">
              {t`sectionNFTValue-content-24`}
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box>
            <Typography gutterBottom variant={'h6'}>
              {t`sectionNFTValue-content-25`}
            </Typography>
            <Typography variant={'body1'} component="p">
              {t`sectionNFTValue-content-26`}
            </Typography>

            <Typography gutterBottom marginTop={4} variant={'h6'}>
              {t`sectionNFTValue-content-27`}
            </Typography>
            <Typography gutterBottom variant={'body1'} component="p">
              {t`sectionNFTValue-content-28`}
            </Typography>
            <Typography
              gutterBottom
              variant={'body1'}
              component="p"
              sx={{ wordBreak: 'break-word' }}
            >
              {t`sectionNFTValue-content-29`}{' '}
              <Link
                marginRight={2}
                color="#377dff"
                href={'https://oncyber.io/6529om'}
                target="_blank"
              >
                https://oncyber.io/6529om
              </Link>
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Box>
            <Typography gutterBottom variant={'h6'}>
              {t`sectionNFTValue-content-30`}
            </Typography>
            <Typography variant={'body1'} component="p">
              {t`sectionNFTValue-content-31`}
            </Typography>

            <Typography gutterBottom marginTop={4} variant={'h6'}>
              {t`sectionNFTValue-content-32`}
            </Typography>
            <Typography gutterBottom variant={'body1'} component="p">
              {t`sectionNFTValue-content-33`}
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Box>
            <Typography gutterBottom variant={'h6'}>
              {t`sectionNFTValue-content-34`}
            </Typography>
            <Typography variant={'body1'} component="p">
              {t`sectionNFTValue-content-35`}
            </Typography>

            <Typography gutterBottom marginTop={4} variant={'h6'}>
              {t`sectionNFTValue-content-36`}
            </Typography>
            <Typography gutterBottom variant={'body1'} component="p">
              {t`sectionNFTValue-content-37`}
            </Typography>
          </Box>
        </TabPanel>
      </Box>
      <Typography
        textAlign="center"
        marginBottom={{ xs: 4, sm: 10 }}
        marginTop={{ xs: 4, sm: 12 }}
        variant="h5"
        sx={{ fontWeight: 900 }}
      >
        {t`sectionNFTValue-content-38`}
      </Typography>
      <Box marginBottom={10} overflow="hidden">
        <Grid container spacing={4}>
          <Grid
            item
            container
            xs={12}
            spacing={4}
            direction="row"
            marginBottom={4}
          >
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
                  {t`sectionNFTValue-content-39`}
                </Typography>
                <Typography gutterBottom color="text.secondary">
                  {t`sectionNFTValue-content-40`} (
                  <Link
                    color="#377dff"
                    target="_blank"
                    href={
                      'https://www.researchandmarkets.com/reports/5522321/non-fungible-token-global-market-report-2022-by'
                    }
                  >
                    Data source
                  </Link>
                  )
                </Typography>
                <Typography gutterBottom color="text.secondary">
                  {t`sectionNFTValue-content-41`}
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
                src="/images/nft-trade-volume-by-chain.png"
                width={1}
                maxWidth={{ xs: '100%', md: '80%' }}
              />
              <span>
                Data from{' '}
                <Link
                  color="#377dff"
                  target="_blank"
                  href={
                    'https://www.theblockcrypto.com/data/nft-non-fungible-tokens/nft-overview'
                  }
                >
                  The Block Crypto Data
                </Link>
                .
              </span>
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
                  {t`sectionNFTValue-content-42`}
                </Typography>
                <Typography gutterBottom color="text.secondary">
                  {t`sectionNFTValue-content-43`}
                </Typography>
                <Typography gutterBottom color="text.secondary">
                  {t`sectionNFTValue-content-44`}
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
                src="/images/nft-pfp.png"
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
        marginBottom={10}
      >
        {t`sectionNFTValue-content-45`}
      </Typography>
    </SectionWrapper>
  );
}
