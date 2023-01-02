import React from 'react';
import Head from 'next/head';
import { t } from '@lingui/macro';
import Main from '../layouts/Main';
import useProgress, { ProgressContext } from '../hooks/useProgress';
import useWallet, { WalletContext } from '../hooks/useWallet';
import useMintData, { MintDataContext } from '../hooks/useMintData';
import FixedTools from '../components/FixedTools';

import SectionTitle from '../sections/SectionTitle';
import TopSection from '../sections/TopSection';
import SectionCatalog from '../sections/SectionCatalog';
import SectionBlockchain from '../sections/SectionBlockchain';
import SectionComponents from '../sections/SectionComponents';
import SectionETH from '../sections/SectionETH';
import SectionBTC from '../sections/SectionBTC';
import SectionWallet from '../sections/SectionWallet';
import SectionSecurity from '../sections/SectionSecurity';
import SectionGetETH from '../sections/SectionGetETH';
import SectionConnectWallet from '../sections/SectionConnectWallet';
import SectionMint from '../sections/SectionMint';
import SectionNFT from '../sections/SectionNFT';
import SectionNFTValue from '../sections/SectionNFTValue';
import SectionNext from '../sections/SectionNext';
import SectionPartners from '../sections/SectionPartners';
import SectionTeam from '../sections/SectionTeam';
import SectionDiscord from '../sections/SectionDiscord';
import SectionDYOR from '../sections/SectionDYOR';
import SectionFooter from '../sections/SectionFooter';
import { LXDAOIntroduction } from 'lxdao-ui';
import { Box } from '@mui/system';

export default function Home() {
  const progress = useProgress();
  const wallet = useWallet();
  const mintData = useMintData();

  return (
    <MintDataContext.Provider value={mintData}>
      <WalletContext.Provider value={wallet}>
        <ProgressContext.Provider value={progress}>
          <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.png" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>
              My First NFT | A non-profit instructional project for Web3
              newbies. Get a FREE NFT while learning about Web3, underlying
              values of NFT, and security principles.
            </title>
            <meta
              name="description"
              content="My First NFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying
              values of NFT, and security principles."
            />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/banner.png" />
            <meta
              property="og:title"
              content="My First NFT | A non-profit instructional project for Web3
              newbies."
            />
            <meta
              property="og:description"
              content="My First NFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying
              values of NFT, and security principles."
            />
            <meta property="og:url" content="https://myfirstnft.info/" />

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
              rel="stylesheet"
            />

            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
      `,
              }}
            />
          </Head>
          <Main>
            <TopSection />
            <SectionCatalog />
            <SectionTitle
              bgcolor="#FFFEA6"
              title={t`sectiontitle-10`}
              id="catalog1"
            >
              <SectionBlockchain />
              <SectionBTC />
              <SectionComponents />
              <SectionETH />
            </SectionTitle>
            <SectionTitle
              bgcolor="#CBCDFB"
              title={t`sectiontitle-11`}
              id="catalog2"
            >
              <SectionNFT />
              <SectionNFTValue />
              <SectionDYOR />
            </SectionTitle>
            <SectionTitle
              bgcolor="#FBBD78"
              title={t`sectiontitle-12`}
              id="catalog3"
            >
              <SectionWallet />
              <SectionSecurity />
              <SectionGetETH />
              <SectionConnectWallet />
              <SectionMint />
              <SectionDiscord />
            </SectionTitle>
            <SectionNext />
            <SectionPartners />
            <SectionTeam />
            <Box marginBottom={4} paddingX={5}>
              <LXDAOIntroduction maxWidth="1240px" xsWidth="326px" />
            </Box>

            <SectionFooter />
            <FixedTools />
          </Main>
        </ProgressContext.Provider>
      </WalletContext.Provider>
    </MintDataContext.Provider>
  );
}
