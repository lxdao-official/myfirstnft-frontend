import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner(props) {
  return (
    <Box sx={{ position: 'relative', height: 40 }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#000' : '#fff'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}
