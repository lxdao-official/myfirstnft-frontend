/*
 * @Description:
 * @Autor: Carver
 * @Date: 2022-04-03 16:22:44
 * @LastEditTime: 2022-04-03 16:48:41
 */
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import styles from './Header.module.css';
import { t } from '@lingui/macro';

export default function Header() {
  const router = useRouter();
  const lastPathnameRef = React.useRef(router.pathname);

  return (
    <Box
      className={clsx(
        styles.header,
        router.pathname !== '/' && styles['header--folded']
      )}
    >
      <Typography
        className={clsx(
          styles.title,
          router.pathname !== '/' && styles['title--folded']
        )}
        variant="h1"
      >
        {t`My First NFT`}
      </Typography>
      <Typography
        variant="h5"
        className={clsx(
          styles.subtitle,
          router.pathname !== '/' && styles['subtitle--folded']
        )}
      >
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </Typography>
    </Box>
  );
}
