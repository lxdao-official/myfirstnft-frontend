import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  useScrollTrigger,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { t } from '@lingui/macro';
import { useWindowSize } from 'usehooks-ts';

import Container from '../../components/Container';
import Language from '../../components/Language';
import TopShare from '../../components/TopShare';

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
  const theme = useTheme();
  const { height: windowHeight } = useWindowSize();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: windowHeight,
  });
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Box
        id="fixed-header"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: trigger ? 10 : -10,
          transition: 'all .5s',
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
          boxShadow: trigger ? theme.shadows[1] : 'none',
        }}
      >
        <Container
          paddingY={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={smallScreen ? 'column' : 'row'}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            sx={{ color: theme.palette.common.black, textDecoration: 'none' }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                transition: 'all .5s',
                opacity: trigger ? 1 : 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box width="35px" component={'img'} src={'/icons/logo.svg'} />
              {t`My First NFT`}
            </Typography>
          </Box>
          <TopShare
            sx={{
              transition: 'all .5s',
              opacity: trigger ? 1 : 0,
              height: '50px',
            }}
          />
        </Container>
      </Box>
      <Box bgcolor={'alternate.main'} component="main" id="main">
        {children}
      </Box>
      <Box
        position="absolute"
        top="20px"
        right={{ xs: '12px', sm: '32px' }}
        zIndex={10}
      >
        <Language />
      </Box>
    </Box>
  );
};

export default Main;
