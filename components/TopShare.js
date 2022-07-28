import { Box, Typography } from '@mui/material';
import { t } from '@lingui/macro';
import shareDialog from './shareDialog.js';
import { discordLink } from '../common/config';

export default function TopShare(props) {
  return (
    <Box display="flex" justifyContent="center" sx={props.sx ? props.sx : {}}>
      <Typography
        target="_blank"
        component="a"
        href="https://twitter.com/mfnft_official"
        color="primary"
        marginRight={2}
      >
        <Box width="50px" component={'img'} src={'/icons/twitter.svg'} />
      </Typography>
      <Typography
        target="_blank"
        component="a"
        href={discordLink}
        color="primary"
        marginRight={2}
      >
        <Box width="50px" component={'img'} src={'/icons/discord.svg'} />
      </Typography>
      <Typography
        target="_blank"
        component="a"
        href="https://opensea.io/collection/mfnft-official"
        color="primary"
        marginRight={2}
      >
        <Box width="50px" component={'img'} src={'/icons/opensea.svg'} />
      </Typography>
      <Typography
        sx={{
          cursor: 'pointer',
        }}
        onClick={() => {
          shareDialog({
            text: t`share-body`,
          });
        }}
        color="primary"
      >
        <Box width="50px" component={'img'} src={'/icons/share.svg'} />
      </Typography>
    </Box>
  );
}
