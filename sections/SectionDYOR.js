import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { t } from '@lingui/macro';
import List from '@mui/material/List';

import ListItem from '../components/ListItem';
import { Step } from '../components/Stepper';
import SectionWrapper from './SectionWrapper';

export default function SectionDYOR() {
  return (
    <SectionWrapper
      title={t`sectionDYOR-title-10`}
      description={t`sectionDYOR-title-11`}
      id="dyor"
      sectionColor="#CBCDFB"
    >
      <Box
        marginBottom={{ xs: 4, sm: 6, md: 8 }}
        sx={{ maxWidth: 680, margin: '0 auto' }}
      >
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
          marginBottom={{ xs: 4, sm: 10 }}
        >
          {t`sectionDYOR-title-12`}
        </Typography>
        <Box>
          <Step index={1} label={t`sectionDYOR-content-10`}>
            <Box display="flex" alignItems="flex-start" marginBottom={2}>
              <Box
                width="24px"
                component={'img'}
                flexShrink={0}
                src={'/icons/right.svg'}
                marginRight={1}
              />
              <Typography variant="h7" component="p">
                {t`sectionDYOR-content-11`}
              </Typography>
            </Box>

            <Box display="flex" alignItems="flex-start" marginBottom={2}>
              <Box
                width="24px"
                component={'img'}
                flexShrink={0}
                src={'/icons/right.svg'}
                marginRight={1}
              />
              <Typography variant="h7" component="p">
                {t`sectionDYOR-content-12`}
              </Typography>
            </Box>

            <Box display="flex" alignItems="flex-start" marginBottom={2}>
              <Box
                width="24px"
                component={'img'}
                flexShrink={0}
                src={'/icons/right.svg'}
                marginRight={1}
              />
              <Typography variant="h7" component="p">
                {t`sectionDYOR-content-13`}
              </Typography>
            </Box>

            <Box display="flex" alignItems="flex-start" marginBottom={2}>
              <Box
                width="24px"
                component={'img'}
                flexShrink={0}
                src={'/icons/wrong.svg'}
                marginRight={1}
              />
              <Typography variant="h7" component="p">
                <del>{t`sectionDYOR-content-14`}</del>
              </Typography>
            </Box>
          </Step>

          <Step index={2} label={t`sectionDYOR-content-15`}>
            <Typography variant="h7" component="p" gutterBottom>
              {t`sectionDYOR-content-16`}
            </Typography>
            <List sx={{ padding: 0 }}>
              <ListItem text={t`sectionDYOR-content-17`} color="#CBCDFB" />
              <ListItem text={t`sectionDYOR-content-18`} color="#CBCDFB" />
              <ListItem text={t`sectionDYOR-content-19`} color="#CBCDFB" />
              <ListItem text={t`sectionDYOR-content-20`} color="#CBCDFB" />
            </List>
          </Step>

          <Step index={3} label={t`sectionDYOR-content-21`}>
            <Typography variant="h7" component="p" gutterBottom>
              {t`sectionDYOR-content-22`}
            </Typography>
            <List sx={{ padding: 0 }}>
              <ListItem text={t`sectionDYOR-content-23`} color="#CBCDFB" />
              <ListItem text={t`sectionDYOR-content-24`} color="#CBCDFB" />
            </List>
          </Step>
        </Box>
        <Typography
          variant={'h5'}
          component={'p'}
          align={'center'}
          marginTop={{ xs: 0, sm: 4 }}
          marginBottom={{ xs: 6, sm: 10 }}
        >
          {t`sectionDYOR-content-25`}
          <strong>{t`sectionDYOR-content-26`}</strong>
          <br />
          {t`sectionDYOR-content-27`}
        </Typography>
        <List sx={{ padding: 0, color: '#525f6c' }}>
          <ListItem text={t`sectionDYOR-content-28`} color="#CBCDFB" />
          <ListItem text={t`sectionDYOR-content-29`} color="#CBCDFB" />
        </List>
        <Typography color={'text.secondary'} marginTop={2}>
          {t`sectionDYOR-web3-glossary`}
          <Link
            color="#377dff"
            marginRight="10px"
            target="_blank"
            href={'https://twitter.com/punk6529/status/1433002033242595338'}
          >
            {t`sectionDYOR-web3-glossary-link-1`}
          </Link>
          <Link
            color="#377dff"
            marginRight="10px"
            target="_blank"
            href={'https://unstoppabledomains.com/blog/the-web3-glossary'}
          >
            {t`sectionDYOR-web3-glossary-link-2`}
          </Link>
          <Link
            color="#377dff"
            target="_blank"
            href={'https://github.com/WTFAcademy/WTF-gm'}
          >
            {t`sectionDYOR-web3-glossary-link-3`}
          </Link>
        </Typography>
      </Box>
    </SectionWrapper>
  );
}
