import React from 'react';
import { Box, Typography } from '@mui/material';

function Step(props) {
  return (
    <Box paddingBottom={{ xs: 3, sm: 6 }}>
      <Box display="flex">
        <Box
          sx={{
            flex: '0 0 30px',
            marginRight: '10px',
            borderRadius: '50%',
            bgcolor: '#000',
            color: '#fff',
            width: '30px',
            height: '30px',
            lineHeight: '30px',
            textAlign: 'center',
          }}
        >
          {props.index}
        </Box>
        <Typography variant="h6">{props.label}</Typography>
      </Box>
      <Box sx={{ marginLeft: 5, marginTop: 2 }}>{props.children}</Box>
    </Box>
  );
}

export { Step };
