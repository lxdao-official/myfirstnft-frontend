import { useEffect } from 'react';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';
import getTheme from '../common/theme';
import { activatei18n } from '../i18n';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-image-lightbox/style.css';
import 'animate.css';

import '../common/global.css';

import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { optimism, optimismGoerli, optimismSepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [optimism, optimismGoerli, optimismSepolia],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'MyFirstNFT',
  projectId: '2123785b6e056583fbe923f8201d067b',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const localeLang = localStorage.getItem('locale');
    const navigatorLang = navigator.language || navigator.userLanguage;
    const navigatorLanguage = navigatorLang.substr(0, 2);
    activatei18n(
      localeLang ? localeLang : navigatorLanguage === 'zh' ? 'zh' : 'en'
    );
  }, []);

  return (
    <ThemeProvider theme={getTheme('light')}>
      <I18nProvider i18n={i18n}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <CssBaseline />
            <ParallaxProvider>
              <Component {...pageProps} />
            </ParallaxProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default MyApp;
