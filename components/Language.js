import { activatei18n } from '../i18n';
import { useCallback, useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Language = () => {
  const localeLang = localStorage.getItem('locale');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigatorLang = navigator.language || navigator.userLanguage;
  const navigatorLanguage = navigatorLang.substr(0, 2);
  const [lang, setLang] = useState(
    localeLang ? localeLang : navigatorLanguage === 'zh' ? 'zh' : 'en'
  );

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
  };

  const setLanguage = (value) => {
    setLang(value);
    activatei18n(value);
    localStorage.setItem('locale', value);
  };

  const handleLangSelect = (value) => {
    setLanguage(value);
  };

  const LangNode = useCallback(() => {
    return (
      <Box marginLeft="auto">
        <Button
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Box display="flex">
            <LanguageIcon
              sx={{
                fontSize: '1.5rem',
              }}
            />
            <Typography marginLeft={0.5}>
              {lang === 'zh' ? '简体中文' : 'English'}
            </Typography>
          </Box>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
            dense: true,
          }}
        >
          <MenuItem onClick={() => handleLangSelect('en')}>
            <Typography variant="subtitle1">English</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleLangSelect('zh')}>
            <Typography variant="subtitle1">简体中文</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              alert(
                'If you want to translate to your native language, please contact us on Discord.'
              );
            }}
          >
            <Typography variant="subtitle1">Your Lang?</Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  }, [lang, anchorEl]);
  return LangNode();
};

export default Language;
