import React, { useState } from 'react';
import { Typography, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Box from '@mui/material/Box';
import { t } from '@lingui/macro';
import { makeStyles } from '@mui/styles';

export default function Discord() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const useStyles = makeStyles({
    tooltip: {
      background: '#fff',
      border: '4px solid #000',
      borderRadius: '8px',
    },
  });

  const classes = useStyles();

  return (
    <Box marginRight={2} height="48px">
      <Tooltip
        title={
          <Box>
            <Box
              sx={{
                padding: '15px',
                width: '260px',
                background: '#fff',
                color: '#000',
                fontSize: '14px',
              }}
            >
              <Typography variant="body" gutterBottom>
                {t`discord-content-10`}
              </Typography>
              <Typography variant="body" gutterBottom>
                {t`discord-content-11`}{' '}
                <a target="_blank" href="https://discord.gg/ycz5h6A4HQ">
                  Discord
                </a>
              </Typography>
            </Box>
          </Box>
        }
        open={open}
        PopperProps={{
          disablePortal: true,
        }}
        classes={{ tooltip: classes.tooltip }}
        onClose={handleClose}
      >
        <HelpOutlineIcon
          onMouseOver={handleClick}
          sx={{
            color: '#333',
            borderRadius: '50%',
            boxShadow: 4,
            cursor: 'pointer',
            background: '#fff',
            fontSize: '48px',
          }}
        />
      </Tooltip>
    </Box>
  );
}
