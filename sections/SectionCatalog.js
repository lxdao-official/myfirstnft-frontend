import { Box, Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { t } from '@lingui/macro';

import { scrollToSection } from '../common/utils';

import Container from '../components/Container';

function CatalogItem(props) {
  return (
    <Box
      sx={{
        borderWidth: { xs: '3px', md: '6px' },
        borderColor: '#2B2A35',
        borderStyle: 'solid',
      }}
      borderRadius={10}
      backgroundColor="#ffffff"
      textAlign="center"
      color="#424446"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box sx={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <Typography
          variant={'h5'}
          fontWeight={700}
          backgroundColor={props.titleBgColor}
          borderRadius="100px"
          color="#000000"
          paddingY={1}
          paddingX={5}
          display="inline-block"
          marginTop={{ xs: 4, sm: 6 }}
          marginBottom={4}
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            scrollToSection(props.catalogId);
          }}
        >
          {props.title}
        </Typography>
        <Box>{props.children}</Box>
      </Box>
      <Box
        component={'img'}
        width="100%"
        src={props.image}
        marginBottom="48px"
      />
    </Box>
  );
}

function SectionSubtitle({ title, isLastSubtitle = false, id, color }) {
  return (
    <Typography
      variant="h6"
      fontWeight={550}
      sx={{
        marginBottom: isLastSubtitle ? '' : '15px',
        cursor: 'pointer',
        textAlign: 'left',
        textDecoration: 'underline',
        textDecorationColor: color,
        textDecorationThickness: '5px',
      }}
      onClick={() => {
        scrollToSection(id);
      }}
    >
      {title}
    </Typography>
  );
}

export default function SectionCatalog() {
  return (
    <Box bgcolor={'alternate.main'} id="catalog-section">
      <Container>
        <Box
          bgcolor="#eff1f7"
          position="relative"
          borderRadius={10}
          margin="0 auto"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            left="50%"
            backgroundColor="#fff"
            borderRadius="50%"
            borderColor="#2B2A35"
            borderStyle="solid"
            sx={{
              borderWidth: { xs: '3px', md: '6px' },
              borderColor: '#2B2A35',
              borderStyle: 'solid',
            }}
            width={{ xs: '60px', sm: '80px', md: '100px', lg: '150px' }}
            height={{ xs: '60px', sm: '80px', md: '100px', lg: '150px' }}
            top={{ xs: '-30px', sm: '-40px', md: '-50px', lg: '-75px' }}
            marginLeft={{ xs: '-30px', sm: '-40px', md: '-50px', lg: '-75px' }}
          >
            <Box
              width={{ xs: '45px', sm: '60px', md: '80px', lg: '100px' }}
              component={'img'}
              src={'/icons/logo.svg'}
            />
          </Box>
          <Box
            paddingY={{ xs: 6, sm: 8, md: 16 }}
            paddingX={{ xs: 2, sm: 4, md: 4 }}
            display="flex"
          >
            <Grid
              sx={{ flexGrow: 1, alignItems: 'stretch' }}
              container
              direction="row"
              spacing={4}
            >
              <Grid item sm={12} md={6} lg={4}>
                <CatalogItem
                  titleBgColor="#FFFEA6"
                  title={t`sectiontitle-10`}
                  image="/images/catalog-1.png"
                  catalogId="catalog1"
                >
                  <SectionSubtitle
                    title={t`sectionBlockchain-title-1`}
                    id="section/blockchain"
                    color="#FFFEA6"
                  />
                  <SectionSubtitle
                    title={t`sectionBTC-title-10`}
                    id="section/btc"
                    color="#FFFEA6"
                  />
                  <SectionSubtitle
                    title={t`sectionComponents-title-10`}
                    id="section/components"
                    color="#FFFEA6"
                  />
                  <SectionSubtitle
                    title={t`sectionETH-title-10`}
                    isLastSubtitle
                    id="section/ethereum"
                    color="#FFFEA6"
                  />
                </CatalogItem>
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <CatalogItem
                  titleBgColor="#CBCDFB"
                  title={t`sectiontitle-11`}
                  image="/images/catalog-2.png"
                  catalogId="catalog2"
                >
                  <SectionSubtitle
                    title={t`sectionNFT-title-10`}
                    id="section/nft"
                    color="#CBCDFB"
                  />
                  <SectionSubtitle
                    title={t`sectionNFTValue-title-22`}
                    id="section/nftvalues"
                    color="#CBCDFB"
                  />
                  <SectionSubtitle
                    title={t`sectionDYOR-title-10`}
                    isLastSubtitle
                    id="section/dyor"
                    color="#CBCDFB"
                  />
                </CatalogItem>
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <CatalogItem
                  titleBgColor="#FBBD78"
                  title={t`sectiontitle-12`}
                  titleVariant={'h6'}
                  image="/images/catalog-3.png"
                  catalogId="catalog3"
                >
                  <SectionSubtitle
                    title={t`sectionWallet-title-10`}
                    id="section/wallet"
                    color="#FBBD78"
                  />
                  <SectionSubtitle
                    title={t`sectionSecurity-title-10`}
                    id="section/security"
                    color="#FBBD78"
                  />
                  <SectionSubtitle
                    title={t`sectionGetETH-content-34`}
                    id="section/get-eth"
                    color="#FBBD78"
                  />
                  <SectionSubtitle
                    title={t`sectionConnectWallet-title-10`}
                    id="section/connect-wallet"
                    color="#FBBD78"
                  />
                  <SectionSubtitle
                    title={t`mintRecord-content-16`}
                    id="section/mint"
                    color="#FBBD78"
                  />
                  <SectionSubtitle
                    title={t`sectionDiscord-title-10`}
                    id="section/discord"
                    color="#FBBD78"
                  />
                </CatalogItem>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
