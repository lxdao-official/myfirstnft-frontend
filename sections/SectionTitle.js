import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import Container from '../components/Container';
import SectionArrowDown from './SectionArrowDown';

export default function SectionTitle(props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container>
      <Box marginTop={20} borderRadius={10} bgcolor="#fff">
        <Box
          position="relative"
          top={{ xs: '-100px', sm: '-118px' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <SectionArrowDown />
          <Typography
            paddingY={{ xs: 1, sm: 2 }}
            paddingX={{ xs: 4, sm: 8 }}
            borderRadius="200px"
            bgcolor={props.bgcolor}
            variant={smallScreen ? 'h6' : 'h4'}
            component="div"
            textAlign="center"
            sx={{
              borderWidth: { xs: '3px', md: '6px' },
              borderColor: '#2B2A35',
              borderStyle: 'solid',
            }}
            fontWeight={500}
            id={props.id}
          >
            {props.title}
          </Typography>
        </Box>
        <Box marginTop="-80px">{props.children}</Box>
      </Box>
    </Container>
  );
}
