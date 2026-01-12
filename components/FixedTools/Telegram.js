import React, { useState } from 'react';
import { Typography, Tooltip } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import Box from '@mui/material/Box';
import { t } from '@lingui/macro';
import { makeStyles } from '@mui/styles';
import { telegramLink } from '../../common/config';

export default function Telegram() {
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
                                {t`telegram-content-10`}
                            </Typography>
                            <Typography variant="body" gutterBottom>
                                {t`telegram-content-11`}{' '}
                                <a target="_blank" href={telegramLink}>
                                    Telegram
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
                <TelegramIcon
                    onMouseOver={handleClick}
                    sx={{
                        color: '#333',
                        borderRadius: '50%',
                        boxShadow: 4,
                        cursor: 'pointer',
                        background: '#fff',
                        fontSize: '48px',
                        padding: '8px',
                    }}
                />
            </Tooltip>
        </Box>
    );
}
