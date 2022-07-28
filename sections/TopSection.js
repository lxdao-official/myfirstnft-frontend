import React from 'react';
import Typed from 'react-typed';
import { Box, Typography } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';

import SmallScreenAlert from '../components/SmallScreenAlert';
import TopShare from '../components/TopShare';
import { t } from '@lingui/macro';

function Home() {
  const theme = useTheme();
  const GridItemHeadlineBlock = () => {
    return (
      <Box
        paddingLeft={{ xs: '12px', sm: '20px' }}
        paddingRight={{ xs: '12px', sm: '20px' }}
      >
        <Typography
          variant="h3"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 900,
          }}
        >
          {t`topSection-title-1`}
          <br />
          <Typography
            color={'primary'}
            component={'span'}
            variant={'inherit'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3
              )} 0%)`,
              color: '#377dff',
            }}
          >
            <Typed
              strings={[
                t`topSection-title-2`,
                t`topSection-title-3`,
                t`topSection-title-4`,
              ]}
              typeSpeed={80}
              loop={true}
            />
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          sx={{
            marginTop: '20px',
            fontWeight: 400,
          }}
        >
          {t`topSection-title-5`}
          <br />
          {t`topSection-title-6`}
        </Typography>
        <TopShare sx={{ marginTop: '20px' }} />
        <SmallScreenAlert />
      </Box>
    );
  };

  return (
    <Box
      minHeight="100vh"
      display={'flex'}
      justifyContent={'center'}
      bgcolor={'alternate.main'}
      position="relative"
      flexDirection="column"
    >
      <Box width="100%" height="100%" display="flex" justifyContent={'center'}>
        <GridItemHeadlineBlock />
      </Box>
    </Box>
  );
}

export default Home;
