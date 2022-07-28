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
        <CssBaseline />
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default MyApp;
