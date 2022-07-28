import React from 'react';
import { Box } from '@mui/material';

export default function SectionArrowDown({ ...rest }) {
  return (
    <Box display="flex" justifyContent="center" {...rest}>
      <Box
        width="60px"
        component={'img'}
        flexShrink={0}
        marginBottom={2}
        src={'/images/arrow-down.png'}
      />
    </Box>
  );
}
