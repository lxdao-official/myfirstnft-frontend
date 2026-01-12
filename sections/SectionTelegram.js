import { Link, Box, Typography } from '@mui/material';
import React from 'react';
import { t } from '@lingui/macro';
import { Step } from '../components/Stepper';
import { telegramLink } from '../common/config';
import SectionWrapper from './SectionWrapper';

export default function SectionTelegram() {
    return (
        <SectionWrapper
            title={t`sectionTelegram-title-10`}
            description={t`sectionTelegram-title-11`}
            id="telegram"
            sectionColor="#29B6F6"
        >
            <Box overflow="hidden" sx={{ maxWidth: 680, margin: '0 auto' }}>
                <Step index={1} label={t`sectionTelegram-title-17`}>
                    <Typography variant="body1" gutterBottom>
                        {t`sectionTelegram-title-18`}{' '}
                        <Link color="#377dff" target="_blank" href={telegramLink}>
                            {telegramLink}
                        </Link>
                    </Typography>
                </Step>
            </Box>
        </SectionWrapper>
    );
}
