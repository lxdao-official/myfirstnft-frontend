import React from 'react';
import { Link, Box } from '@mui/material';
import _ from 'lodash';
import { t } from '@lingui/macro';
import showMessage from '../components/showMessage';
import SectionSimpleWrapper from './SectionSimpleWrapper';

const communities = [
  {
    img: '/images/gclx-logo.png',
    url: 'https://gclx.xyz/',
    title: 'GuoChanLiangXin',
  },
  {
    img: '/images/NextDAO-logo.png',
    url: 'https://twitter.com/theNextDAO',
    title: 'NextDAO',
  },
  {
    img: '/images/covendao-logo.png',
    url: 'https://twitter.com/CovenDao',
    title: 'CovenDAO',
  },
  {
    img: '/images/batdao-logo.png',
    url: '',
    title: 'BATDAO',
  },
  {
    img: '/images/cosmochamber-logo.png',
    url: 'https://www.cosmochamber.art/',
    title: 'Cosmo Chamber',
  },
  {
    img: '/images/996fubao-logo.png',
    url: 'https://twitter.com/996fubao_io',
    title: '996fubao',
  },
  {
    img: '/images/xrc-logo.png',
    url: 'https://xrabbits.club/',
    title: 'X RABBITS CLUB',
  },
  {
    img: '/images/sigbit-logo.png',
    url: 'https://sigbit.org/',
    title: 'SIGBIT',
  },
  {
    img: '/images/bit-logo.png',
    url: 'https://twitter.com/dotbitHQ',
    title: '.bit',
  },
];

export default function SectionTeam() {
  return (
    <SectionSimpleWrapper title={t`sectionPartners-des-1`} id="partners">
      <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
        {_.shuffle(communities).map((item, i) => (
          <Box
            width="100px"
            marginBottom={{ xs: 2 }}
            marginRight={{ xs: 1, sm: 6, md: 12 }}
            key={i}
          >
            <Link color={'inherit'} target="_blank" href={item.url}>
              <Box
                component="img"
                height={1}
                width={1}
                src={item.img}
                alt={item.title}
                title={item.title}
                sx={{
                  filter: 'contrast(0)',
                  transition: 'filter 0.3s ease-in-out',
                  ':hover': {
                    filter: 'none',
                  },
                }}
              />
            </Link>
          </Box>
        ))}
        <Box
          width="100px"
          marginBottom={{ xs: 2 }}
          marginRight={{ xs: 1, sm: 6, md: 12 }}
        >
          <Box
            sx={{
              cursor: 'pointer',
              fontSize: '0.85rem',
              filter: 'contrast(0)',
              transition: 'filter 0.3s ease-in-out',
              ':hover': {
                filter: 'none',
              },
            }}
            onClick={() => {
              showMessage({
                title: 'How to collab?',
                body: (
                  <Box>
                    <Box marginBottom={2}>
                      In general, show your supportive is fine, for example:
                    </Box>
                    <Box>- Retweet our tweets</Box>
                    <Box>
                      - Post link in your community Discord server, or groups
                    </Box>
                    <Box marginBottom={2}>
                      - Add a friendship link to your official Website (for
                      teaching newbies)
                    </Box>
                    <Box>
                      Contact Twitter:{' '}
                      <Link
                        target="_blank"
                        color={'inherit'}
                        href={`https://twitter.com/mfnft_official`}
                      >
                        @mfnft_official
                      </Link>
                    </Box>
                  </Box>
                ),
              });
            }}
          >
            + Your Community?
          </Box>
        </Box>
      </Box>
    </SectionSimpleWrapper>
  );
}
