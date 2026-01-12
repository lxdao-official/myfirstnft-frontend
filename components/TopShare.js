import { Box, Typography } from '@mui/material';
import { t } from '@lingui/macro';
import shareDialog from './shareDialog.js';
import { telegramLink } from '../common/config';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function TopShare(props) {
  return (
    <Box display="flex" justifyContent="center" sx={props.sx ? props.sx : {}}>
      <Typography
        target="_blank"
        component="a"
        href="https://twitter.com/LXDAO_Official"
        color="primary"
        marginRight={2}
      >
        <Box width="50px" component={'img'} src={'/icons/twitter.svg'} />
      </Typography>
      <Typography
        target="_blank"
        component="a"
        href={telegramLink}
        color="primary"
        marginRight={2}
      >
        <TelegramIcon sx={{ fontSize: '50px', color: '#56CCF2' }} />
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
