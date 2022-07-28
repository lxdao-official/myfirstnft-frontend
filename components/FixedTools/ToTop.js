import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { scrollToSection } from '../../common/utils';

export default function ToTop() {
  const handleClick = () => {
    scrollToSection('catalog-section', 30);
  };

  return (
    <Box marginRight={2} height="48px">
      <ArrowUpwardIcon
        onClick={handleClick}
        sx={{
          color: '#333',
          borderRadius: '50%',
          boxShadow: 4,
          cursor: 'pointer',
          background: '#fff',
          fontSize: '48px',
        }}
      />
    </Box>
  );
}
