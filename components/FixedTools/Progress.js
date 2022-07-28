import React, { useState } from 'react';
import { t } from '@lingui/macro';
import { Box, Typography, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { scrollToSection } from '../../common/utils';
import { ProgressContext } from '../../hooks/useProgress';
import Spinner from '../Spinner';

export default function ProgressSummary() {
  const [open, setOpen] = useState(false);
  const {
    completedPercentile,
  } = React.useContext(ProgressContext);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles({
    tooltip: {
      background: '#fff',
      border: '4px solid #000',
      borderRadius: '8px',
    },
  });

  const CatalogItem = ({ color, title, isLastItem = false, catelogId }) => {
    return (
      <Box display="flex" marginBottom={isLastItem ? 0 : 4} alignItems="center">
        <Box
          width="20px"
          height="20px"
          borderRadius="50%"
          bgcolor={color}
          marginRight={2}
        />
        <Typography
          color="#000"
          sx={{
            cursor: 'pointer',
            ':hover': {
              textDecoration: 'underline',
            },
          }}
          onClick={() => {
            scrollToSection(catelogId);
            handleTooltipClose();
          }}
        >
          {title}
        </Typography>
      </Box>
    );
  };
  const classes = useStyles();
  return (
    <Box
      paddingY={1}
      paddingX={2}
      sx={{
        background: '#fff',
        borderRadius: 2,
        boxShadow: 4,
      }}
    >
      <Tooltip
        title={
          <Box
            bgcolor="#fff"
            paddingX={1}
            paddingY={2}
            display="flex"
            flexDirection="column"
            width="220px"
          >
            <CatalogItem
              color="#FFFEA6"
              title={t`sectiontitle-10`}
              catelogId="catalog1"
            />
            <CatalogItem
              color="#CBCDFB"
              title={t`sectiontitle-11`}
              catelogId="catalog2"
            />
            <CatalogItem
              color="#FBBD78"
              title={t`sectiontitle-12`}
              catelogId="catalog3"
              isLastItem
            />
          </Box>
        }
        open={open}
        PopperProps={{
          disablePortal: true,
        }}
        classes={{ tooltip: classes.tooltip }}
        onClose={handleTooltipClose}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            cursor: 'pointer',
          }}
          onMouseOver={() => setOpen(true)}
        >
          <Box marginRight={2}>
            <Spinner value={completedPercentile} />
          </Box>
          <Box>
            <Typography variant="h6">{completedPercentile}%</Typography>
          </Box>
        </Box>
      </Tooltip>
    </Box>
  );
}
