import React from 'react';
import {
  Link,
  Card,
  Button,
  Box,
  Typography,
  Grid,
  CardContent,
  CardActions,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { t } from '@lingui/macro';
import AddIcon from '@mui/icons-material/Add';

import DonationInstruction from '../components/Donation';
import showMessage from '../components/showMessage';
import StyledToolTip from '../components/StyledToolTip';
import SectionSimpleWrapper from './SectionSimpleWrapper';
import donation from '../donation';

function SmallAd(props) {
  if (props.type === 'instruction') {
    return (
      <Box
        width={1}
        height={1}
        sx={{
          textDecoration: 'none',
        }}
      >
        <Box
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
          position="relative"
        >
          <DonationInstruction />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
      }}
    >
      <StyledToolTip
        title={
          <Box
            component={Card}
            display={'flex'}
            flexDirection={'column'}
            width="188px"
            padding={1}
          >
            <Typography variant={'body2'} color="text.secondary">
              {props.description}
            </Typography>
            <Box marginTop={2}>
              {props.website && (
                <Link color={'inherit'} target="_blank" href={props.website}>
                  <Box
                    color="#ccc"
                    width="40px"
                    component="img"
                    src="/icons/website.svg"
                  />
                </Link>
              )}
              {props.twitter && (
                <Link color={'inherit'} target="_blank" href={props.twitter}>
                  <Box
                    width="40px"
                    color="text.secondary"
                    component="img"
                    src="/icons/twitter.svg"
                  />
                </Link>
              )}
              {props.opensea && (
                <Link color={'inherit'} target="_blank" href={props.opensea}>
                  <Box
                    width="40px"
                    color="text.secondary"
                    component="img"
                    src="/icons/opensea.svg"
                  />
                </Link>
              )}
              {props.discord && (
                <Link color={'inherit'} target="_blank" href={props.discord}>
                  <Box
                    width="40px"
                    color="text.secondary"
                    component="img"
                    src="/icons/discord.svg"
                  />
                </Link>
              )}
            </Box>
            <Box color="text.secondary" fontSize="14px">
              +{props.donation}ETH
            </Box>
          </Box>
        }
      >
        <Box
          component={Card}
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
        >
          <Box
            component="img"
            src={props.image}
            title={props.title}
            sx={{
              width: '100%',
              filter:
                props.theme.palette.mode === 'dark'
                  ? 'brightness(0.7)'
                  : 'none',
            }}
          />
          <Box
            padding="12px !important"
            component={CardContent}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant={'body1'}
              sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                fontSize: '14px',
              }}
              fontWeight={700}
            >
              {props.title}
            </Typography>
            <Typography
              variant={'body1'}
              sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                fontSize: '14px',
              }}
            >
              +{props.donation}ETH
            </Typography>
          </Box>
        </Box>
      </StyledToolTip>
    </Box>
  );
}

function BigAd(props) {
  if (props.type === 'instruction') {
    return (
      <Box
        width={1}
        height={1}
        sx={{
          textDecoration: 'none',
        }}
      >
        <Box
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
          position="relative"
        >
          <DonationInstruction />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
        transition: 'all .2s ease-in-out',
        '&:hover': {
          transform: `translateY(-${props.theme.spacing(1 / 2)})`,
        },
      }}
    >
      <Box
        component={Card}
        width={1}
        height={1}
        display={'flex'}
        flexDirection={'column'}
      >
        <Box
          component="img"
          src={props.image}
          title={props.title}
          sx={{
            width: '100%',
            filter:
              props.theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Box component={CardContent}>
          <Typography variant={'h6'} fontWeight={700} gutterBottom>
            {props.title}
          </Typography>
          <Typography variant={'body2'} color="text.secondary">
            {props.description}
          </Typography>
        </Box>
        <Box flexGrow={1} />
        <Box
          paddingLeft={2}
          paddingRight={2}
          component={CardActions}
          justifyContent={'space-between'}
        >
          <Box>
            {props.website && (
              <Link color={'inherit'} target="_blank" href={props.website}>
                <Box
                  color="#ccc"
                  width="40px"
                  component="img"
                  src="/icons/website.svg"
                />
              </Link>
            )}
            {props.twitter && (
              <Link color={'inherit'} target="_blank" href={props.twitter}>
                <Box
                  width="40px"
                  color="text.secondary"
                  component="img"
                  src="/icons/twitter.svg"
                />
              </Link>
            )}
            {props.opensea && (
              <Link color={'inherit'} target="_blank" href={props.opensea}>
                <Box
                  width="40px"
                  color="text.secondary"
                  component="img"
                  src="/icons/opensea.svg"
                />
              </Link>
            )}
            {props.discord && (
              <Link color={'inherit'} target="_blank" href={props.discord}>
                <Box
                  width="40px"
                  color="text.secondary"
                  component="img"
                  src="/icons/discord.svg"
                />
              </Link>
            )}
          </Box>
          <Box color="text.secondary" variant="h6">
            +{props.donation}ETH
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function SectionNext() {
  const theme = useTheme();

  const top4 = donation.slice(0, 4);
  const rest = donation.slice(4);

  return (
    <SectionSimpleWrapper
      title={t`sectionNext-title-10`}
      description={t`sectionNext-title-11`}
      id="next"
    >
      <Box>
        <Typography textAlign="center" marginBottom={1} variant="h6">
          {t`sectionNext-content-42`}
        </Typography>
        <Typography
          textAlign="center"
          marginBottom={{ xs: 3, sm: 6 }}
          variant="h6"
        >
          <strong>{t`sectionNext-content-44`}</strong>
        </Typography>
      </Box>
      <Box padding={2}>
        <Grid container spacing={2}>
          {top4.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <BigAd theme={theme} {...item} />
            </Grid>
          ))}
          {rest.map((item, i) => (
            <Grid item xs={6} sm={4} md={2} key={i}>
              <SmallAd theme={theme} {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionSimpleWrapper>
  );
}
