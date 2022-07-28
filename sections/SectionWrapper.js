import React, { useEffect, useContext } from 'react';
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { t } from '@lingui/macro';
import { ProgressContext } from '../hooks/useProgress';

export default function SectionWrapper({
  id,
  title,
  description,
  children,
  showMarkDone = true,
  sectionColor = '#FFFEA6',
}) {
  const { setSteps, completeStep, redoStep, completed } =
    useContext(ProgressContext);
  const theme = useTheme();

  const isDone = completed[id];

  // push section data into progress context
  useEffect(() => {
    // avoid pushing duplicates
    setSteps((prev) => {
      if (prev.find((i) => i.id === id)) {
        return prev;
      }
      return id === 'next' || id === 'team'
        ? [...prev]
        : [
            ...prev,
            {
              id,
              title,
              description,
            },
          ];
    });
  }, []);

  const ref = React.useRef();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      padding={{ xs: 2, md: 4 }}
      paddingBottom={{ xs: 4, md: 6 }}
      position="relative"
      className="section"
      id={`section/${id}`}
      ref={ref}
    >
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={smallScreen ? 'column' : 'row'}
        >
          {smallScreen ? null : (
            <Box width={112} display="flex" justifyContent="center">
              <Box
                width={24}
                height={24}
                bgcolor={isDone ? sectionColor : '#D2D7E1'}
                borderRadius="50%"
                marginTop={'6px'}
                marginRight={2}
                border={isDone ? '2px solid #000' : '2px solid #D2D7E1'}
              />
            </Box>
          )}
          <Box
            marginBottom={{ xs: 4, sm: 6, md: 8 }}
            display="flex"
            justifyContent={'center'}
            flex={1}
            sx={{
              backgroundImage: 'url(/images/arrow.png)',
              backgroundPosition: 'right center',
              backgroundSize: 'auto 45px',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              bgcolor="#fff"
              paddingX={smallScreen ? 2 : 5}
              sx={{
                fontWeight: 700,
                backgroundImage: 'url(/images/short-arrow.png)',
                backgroundPosition: 'left center',
                backgroundSize: 'auto 45px',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {title}
            </Typography>
          </Box>
          {!smallScreen && showMarkDone && (
            <Box
              marginLeft={smallScreen ? 0 : 2}
              marginBottom={smallScreen ? 2 : 0}
            >
              <FormControlLabel
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginRight: 0,
                }}
                control={
                  <Checkbox
                    key={isDone}
                    checked={isDone}
                    icon={
                      <Box
                        border="3px solid #000"
                        borderRadius={'50%'}
                        width={40}
                        height={40}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor="#FEFFFE"
                      >
                        <Box
                          width="26px"
                          component={'img'}
                          src={'/icons/logo.svg'}
                        />
                      </Box>
                    }
                    checkedIcon={
                      <Box
                        border="3px solid #000"
                        borderRadius={'50%'}
                        width={40}
                        height={40}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor={sectionColor}
                      >
                        <Box
                          width="26px"
                          component={'img'}
                          src={'/icons/marked.svg'}
                        />
                      </Box>
                    }
                    sx={{
                      padding: '0',
                    }}
                    onChange={(event) => {
                      if (event.target.checked === true) {
                        completeStep(id);
                      } else {
                        redoStep(id);
                      }
                    }}
                  />
                }
                label={
                  <Typography
                    fontWeight="400"
                    fontSize={16}
                    marginTop={1}
                    display="inline-block"
                    width={122}
                    textAlign="center"
                  >
                    {isDone ? t`Marked` : t`Mark-done`}
                  </Typography>
                }
              />
            </Box>
          )}
        </Box>
        {isDone ? null : <Box>{children}</Box>}
        {isDone && !smallScreen ? null : (
          <Box>
            <FormControlLabel
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: 0,
              }}
              control={
                <Checkbox
                  key={isDone}
                  checked={isDone}
                  icon={
                    <Box
                      border="3px solid #000"
                      borderRadius={'50%'}
                      width={40}
                      height={40}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      bgcolor="#FEFFFE"
                    >
                      <Box
                        width="26px"
                        component={'img'}
                        src={'/icons/logo.svg'}
                      />
                    </Box>
                  }
                  checkedIcon={
                    <Box
                      border="3px solid #000"
                      borderRadius={'50%'}
                      width={40}
                      height={40}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      bgcolor={sectionColor}
                    >
                      <Box
                        width="26px"
                        component={'img'}
                        src={'/icons/logo.svg'}
                        sx={{
                          transform: 'rotate(270deg)',
                        }}
                      />
                    </Box>
                  }
                  sx={{
                    padding: '0',
                  }}
                  onChange={(event) => {
                    if (event.target.checked === true) {
                      completeStep(id, true);
                    } else {
                      redoStep(id);
                    }
                  }}
                />
              }
              label={
                <Typography
                  fontWeight="400"
                  fontSize={16}
                  marginTop={1}
                  display="inline-block"
                  width={122}
                  textAlign="center"
                >
                  {isDone ? t`Marked` : t`Mark-done`}
                </Typography>
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
