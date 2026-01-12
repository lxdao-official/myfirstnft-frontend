import React from 'react';
import { useWindowSize } from 'usehooks-ts';
import { Box, useScrollTrigger } from '@mui/material';
import { ProgressContext } from '../../hooks/useProgress';

import Progress from './Progress';
import Telegram from './Telegram';
import ToTop from './ToTop';

export default function FixedTools() {
  const { stepperExpanded, setStepperExpanded } =
    React.useContext(ProgressContext);
  const { height: windowHeight } = useWindowSize();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: windowHeight / 2,
  });

  React.useEffect(() => {
    if (stepperExpanded) {
      setStepperExpanded(trigger);
    }
  }, [trigger]);

  return (
    <Box
      position="fixed"
      right="20px"
      bottom={trigger ? '20px' : '-200px'}
      zIndex={100}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        // Hide scrollbar for IE and Edge
        msOverflowStyle: 'none',
        transition: 'bottom .5s ease',
      }}
    >
      <ToTop />
      <Telegram />
      <Progress />
    </Box>
  );
}
