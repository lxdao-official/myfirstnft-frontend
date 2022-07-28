import React from 'react';
import { Alert, IconButton, useMediaQuery, useTheme, Box } from '@mui/material';
import { detect } from 'detect-browser';

export default function SmallScreenAlert() {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down('sm'));
  const isNotChrome = React.useMemo(() => {
    const result = detect();
    return !result || result.name !== 'chrome';
  }, []);
  const [folded, setFolded] = React.useState(false);
  const shouldShowAlert = isSM || isNotChrome;

  return (
    shouldShowAlert &&
    !folded && (
      <Alert
        severity="warning"
        action={
          <IconButton size="small" onClick={() => setFolded(!folded)}>
            <Box
              width="20px"
              component={'img'}
              flexShrink={0}
              src={'/icons/close.svg'}
            />
          </IconButton>
        }
        sx={{ marginTop: '10px' }}
      >
        Please use Chrome with PC/Laptop to access this tutorial for better
        experience.
      </Alert>
    )
  );
}
