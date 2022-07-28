import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icon from '@mui/material/Icon';
import { purple } from '@mui/material/colors';
import { t } from '@lingui/macro';

const PurpleButton = styled(Button)({
  backgroundColor: purple[500],
});

function SimpleModal(props) {
  const { visible, text, onClose } = props;
  const [shareMsg, setShareMsg] = useState(text);
  const [copied, setCopied] = useState(false);
  return (
    <Dialog onClose={onClose} open={visible} fullWidth={true} maxWidth="sm">
      <DialogTitle>{t`shareDialog-content-10`}</DialogTitle>
      <Box
        component={'svg'}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={24}
        height={24}
        onClick={onClose}
        sx={{
          cursor: 'pointer',
          position: 'absolute',
          top: '20px',
          right: '20px',
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </Box>
      <Box paddingBottom={{ xs: 1, sm: 2 }} paddingX={{ xs: 2, sm: 4 }}>
        <Box>
          <TextField
            multiline
            rows={4}
            variant="outlined"
            name={'shareMsg'}
            type={'text'}
            fullWidth
            value={shareMsg}
            onChange={(e) => setShareMsg(e)}
          />
        </Box>
        <Box
          paddingY={{ xs: 1, sm: 2 }}
          display={'flex'}
          justifyContent={'flex-end'}
        >
          {copied ? <Box style={{ color: 'red' }} paddingY={{ xs: 1 }} paddingRight={{ xs: 1 }}>Copied.</Box> : null}
          <CopyToClipboard text={shareMsg} onCopy={() => setCopied(true)}>
            <Button
              variant={'contained'}
              sx={{ marginRight: { xs: 2, mr: 10 } }}
            >
              {t`shareDialog-content-11`}
            </Button>
          </CopyToClipboard>
          <Link
            color={'inherit'}
            target="_blank"
            sx={{
              textDecoration: 'none',
            }}
            href={
              'https://twitter.com/share?text=' +
              shareMsg +
              '&url=https://myfirstnft.info/'
            }
          >
            <PurpleButton
              variant={'contained'}
              startIcon={<Icon sx={{ color: '#fff' }}>add_circle</Icon>}
            >
              {t`shareDialog-content-12`}
            </PurpleButton>
          </Link>
        </Box>
      </Box>
    </Dialog>
  );
}

function shareDialog(options) {
  const { text } = options;
  const container = document.createDocumentFragment();
  function render({ visible }) {
    ReactDOM.render(
      <SimpleModal visible={visible} text={text} onClose={close} />,
      container
    );
  }
  function close() {
    render({ visible: false });
  }

  render({ visible: true });
}
export default shareDialog;
