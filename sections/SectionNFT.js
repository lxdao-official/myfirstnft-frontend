import { Box, Typography } from '@mui/material';
import SectionWrapper from './SectionWrapper';
import { t } from '@lingui/macro';

export default function SectionNFT() {
  return (
    <SectionWrapper
      title={t`sectionNFT-title-10`}
      description={t`sectionNFT-title-11`}
      id="nft"
      sectionColor="#CBCDFB"
    >
      <Box>
        <Typography
          textAlign="center"
          marginBottom={2}
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
        >
          {t`sectionNFT-title-12`}
        </Typography>
        <Typography
          textAlign="center"
          marginBottom={10}
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
        >
          {t`sectionNFT-title-13`}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          sx={{ width: { xs: '100%', md: '75%' } }}
          component="img"
          src="/images/ft-nft.png"
          marginBottom={4}
        ></Box>
      </Box>
    </SectionWrapper>
  );
}
