import { useState, useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ethers } from 'ethers';
import { t } from '@lingui/macro';
import _, { throttle } from 'lodash';

import {
  Box,
  Typography,
  Checkbox,
  Button,
  FormControlLabel,
  useMediaQuery,
  useTheme,
  Dialog,
  Tabs,
  Tab,
  Link,
  CircularProgress,
  Alert,
  AlertTitle,
} from '@mui/material';

import ConnectWallet, { connectWallet } from '../ConnectWallet';
import { WalletContext } from '../../hooks/useWallet';
import { MintDataContext } from '../../hooks/useMintData';
import StyledToolTip from '../StyledToolTip';
import { TRAITS } from './traits';
import showMessage from '../showMessage';
import { getEtherScanDomain } from '../../common/utils';

const TraitItem = styled.div`
  width: ${(props) => {
    return props.width;
  }}px;
  cursor: pointer;
  margin: 5px;
  border: 1px solid
    ${(props) => {
    return props.selected ? '#000' : '#ccc';
  }};

  &:hover {
    border: 1px solid #000;
  }

  img {
    background: url('/traits/Lian.jpg') no-repeat;
    background-size: ${(props) => {
    return props.width - 2;
  }}px;
    width: 100%;
    display: block;
  }
  div {
    font-size: 14px;
    padding: 2px 0;
    text-align: center;
    background: #eee;
    color: #000;
  }
`;

function PFPProperty(props) {
  return (
    <div
      style={{ float: 'left' }}
      onClick={() => {
        props.onClick && props.onClick();
      }}
    >
      <TraitItem selected={props.selected} width={62}>
        <img src={props.img} alt={props.name} />
        <div>{props.name}</div>
      </TraitItem>
    </div>
  );
}

const TraitsWrapper = styled.div`
  display: flex;
  min-width: 280px;
`;
const TraitsList = styled.div`
  overflow: hidden;
  padding: 10px;
`;

function PFPRTraits(props) {
  const currentTraits = TRAITS[props.currentTab] || [];
  const currentTraitSelection = props.pfp[props.currentTab];

  return (
    <TraitsWrapper>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={props.currentTab}
        onChange={props.handleChange}
        sx={{ flex: '0 0 100px' }}
      >
        <Tab label={t`trait-category-1`} value="Hairstyle" />
        <Tab label={t`trait-category-2`} value="Eye" />
        <Tab label={t`trait-category-3`} value="Nose" />
        <Tab label={t`trait-category-4`} value="Mouth" />
        <Tab label={t`trait-category-5`} value="FaceDecorations" />
        <Tab label={t`trait-category-6`} value="EyeAccessories" />
        <Tab label={t`trait-category-7`} value="HairDecorations" />
        <Tab label={t`trait-category-8`} value="LaserEye" />
      </Tabs>
      <TraitsList>
        {currentTraits.map((trait, index) => {
          const selected = currentTraitSelection === trait.key;
          return (
            <PFPProperty
              onClick={() => {
                props.onChange &&
                  props.onChange({
                    ...props.pfp,
                    [props.currentTab]: selected ? null : trait.key,
                  });
              }}
              name={index + 1}
              key={trait.key}
              img={trait.img}
              selected={selected}
            />
          );
        })}
      </TraitsList>
    </TraitsWrapper>
  );
}

const PFPAvatarWrapper = styled.div`
  background: #fff;
  width: 284px;
  height: 284px;
  border: 2px solid #000;
  margin: 0 auto;
  position: relative;
  img {
    width: 280px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

function MintButton(props) {
  const [uploading, setUploading] = useState(null);
  const { fullAddress } = useContext(WalletContext);
  const { mintData, setMintData } = useContext(MintDataContext);
  const [visible, setVisible] = useState(false);
  const [mintParams, setMintParams] = useState(null);
  const [tx, setTx] = useState(null);
  const [response, setResponse] = useState(null);
  const [minted, setMinted] = useState(false);
  const [contractStatus, setContractStatus] = useState(1);

  useEffect(() => {
    (async () => {
      if (fullAddress) {
        const { contract } = await connectWallet();

        const mintedHandler = throttle(async () => {
          const numberMinted = await contract.numberMinted(fullAddress);
          setMinted(parseInt(numberMinted));
          const status = await contract.status();
          setContractStatus(status);
        }, 500);
        contract.on('Minted', mintedHandler);

        try {
          const numberMinted = await contract.numberMinted(fullAddress);
          setMinted(parseInt(numberMinted));
          const status = await contract.status();
          setContractStatus(status);
        } catch (err) {
          showMessage({
            type: 'error',
            title: 'Failed to connect contract',
            body: err.message,
          });
        }
      }
    })();
  }, [fullAddress]);

  if (!fullAddress) {
    return <ConnectWallet pfp={props.pfp} />;
  }

  if (contractStatus !== 1) {
    return (
      <Button
        sx={{
          width: '100%',
        }}
        size="large"
        disabled={true}
        variant="contained"
      >
        {t`pfpmaker-contract-not-ready`}
      </Button>
    );
  }

  const mintedSuccessfully = response && response.confirmations > 0;

  return (
    <>
      <Button
        sx={{
          width: '100%',
        }}
        size="large"
        disabled={uploading || minted === 1}
        variant="contained"
        onClick={async () => {
          setUploading(true);
          try {
            const res = await axios.post('/api/mint', {
              pfp: props.pfp,
              enableLaser: props.enableLaser,
            });

            if (res.data.success) {
              const { image, imageURI, signature } = res.data;
              setMintParams({ image, imageURI, signature });
              setVisible(true);
            } else {
              throw new Error(res.data.errorMessage);
            }
          } catch (err) {
            showMessage({
              type: 'error',
              title: t`pfpmaker-mint-failed`,
              body: err.message,
            });
          }
          setTimeout(() => {
            setUploading(false);
          }, 2000);
        }}
      >
        {uploading === true
          ? t`pfpmaker-uploading`
          : minted === 1
            ? t`pfpmaker-minted`
            : t`pfpmaker-mint-text`}
      </Button>

      <Dialog
        onClose={() => {
          setVisible(false);
          setMintParams(null);
          setTx(null);
          setResponse(null);
        }}
        open={visible}
      >
        <Box paddingY={2} paddingX={3}>
          <Box marginBottom={2}>
            <Typography variant="h6" textAlign="center">
              {t`pfpmaker-mint-confirm-title`}
            </Typography>
          </Box>
          {mintParams && (
            <Box display="flex" flexDirection="column">
              <Box
                border="2px solid #ccc"
                component="img"
                src={mintParams.image}
                maxWidth="300px"
                marginBottom={2}
                sx={{ height: 'auto', width: '100%' }}
              />
              {!!tx && (
                <Box maxWidth="300px" marginBottom={2}>
                  <Alert severity={mintedSuccessfully ? 'success' : 'info'}>
                    <AlertTitle>
                      {mintedSuccessfully ? 'Succeed' : 'Minting...'}
                    </AlertTitle>
                    <Link
                      href={`https://${getEtherScanDomain()}/tx/${tx.hash}`}
                      target="_blank"
                      color={'inherit'}
                    >
                      {t`pfpmaker-mint-confirm-etherscan`}
                    </Link>
                    <Typography>
                      {mintedSuccessfully
                        ? t`pfpmaker-success-tip`
                        : t`pfpmaker-minting-tip`}
                    </Typography>
                  </Alert>
                </Box>
              )}

              <Box display="flex" justifyContent="center">
                <Button
                  disabled={!!tx && !mintedSuccessfully}
                  sx={{
                    marginRight: 2,
                  }}
                  variant="contained"
                  onClick={async () => {
                    setUploading(true);
                    if (mintedSuccessfully) {
                      setVisible(false);
                      setMintParams(null);
                      setTx(null);
                      setResponse(null);
                      return;
                    }
                    const { signer, contract } = await connectWallet();
                    const contractWithSigner = contract.connect(signer);
                    const value = ethers.utils.parseEther('0');
                    try {
                      const tx = await contractWithSigner.mint(
                        mintParams.imageURI,
                        mintParams.signature,
                        {
                          value,
                        }
                      );

                      setTx(tx);
                      const response = await tx.wait();
                      setResponse(response);

                      const newMintedItem = {
                        image: mintParams.image,
                        imageURI: mintParams.imageURI,
                        tx: tx.hash,
                      };
                      setMintData([...mintData, newMintedItem]);
                    } catch (err) {
                      showMessage({
                        title: t`pfpmaker-mint-failed`,
                        body: err.message,
                        type: 'error',
                      });
                    }
                    setTimeout(() => {
                      setUploading(false);
                    }, 2000);
                  }}
                >
                  {!!tx ? (
                    mintedSuccessfully ? (
                      t`pfpmaker-mint-confirm-minted`
                    ) : (
                      <Box display="flex" alignItems="center">
                        <CircularProgress size={14} />{' '}
                        <Box marginLeft={1}>Minting...</Box>
                      </Box>
                    )
                  ) : (
                    t`pfpmaker-mint-confirm-text`
                  )}
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Dialog>
    </>
  );
}

function PFPCanvas(props) {
  const canvasRef = useRef(null);
  // for stupid WeChat
  const [imgDataURI, setImgDataURI] = useState(null);
  const [enableLaser, setEnableLaser] = useState(false);

  useEffect(() => {
    (async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 600, 600);
      ctx.beginPath();
      ctx.rect(0, 0, 600, 600);
      ctx.fillStyle = '#fff';
      ctx.fill();

      let images = ['/traits/Lian.jpg'];
      Object.keys(props.pfp).forEach((pfpKey) => {
        if (props.pfp[pfpKey]) {
          images.push(`/traits/${pfpKey}/${props.pfp[pfpKey]}.png`);
        }
      });

      // always move LaserEye to the end
      images.push(
        images.splice(
          images.findIndex((img) => img.includes('LaserEye')),
          1
        )[0]
      );

      const imagesObj = await Promise.all(images.map(loadImage));

      imagesObj.forEach((image) => {
        ctx.drawImage(image, 0, 0);
      });

      setImgDataURI(canvas.toDataURL('image/png'));
    })();
  }, [props.pfp, enableLaser]);

  return (
    <Box>
      <PFPAvatarWrapper>
        <img src={imgDataURI} alt="" />
        <canvas
          style={{ display: 'none' }}
          width="600"
          height="600"
          ref={canvasRef}
        />
      </PFPAvatarWrapper>
      <Box
        sx={{ display: 'flex', alignItems: 'center' }}
        paddingY={1}
        marginTop={1}
        display="flex"
        justifyContent="center"
      >
        <div>
          <StyledToolTip
            title={
              <div
                style={{
                  background: '#000',
                  padding: '5px 10px',
                }}
              >
                {t`pfpmaker-random-generate-tip`}
              </div>
            }
            placement="top"
          >
            <Button
              style={{ marginLeft: 'auto', marginRight: 10 }}
              onClick={props.onRandom}
              size="small"
              variant="outlined"
            >
              {t`pfpmaker-random-generate`}
            </Button>
          </StyledToolTip>
          <Button onClick={props.onReset} size="small" variant="outlined">
            {t`pfpmaker-reset`}
          </Button>
        </div>
      </Box>
      <Box
        width="300px"
        margin="0 auto"
        marginTop={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <MintButton enableLaser={enableLaser} pfp={props.pfp}></MintButton>
        <Box
          fontSize={12}
          marginTop={2}
          color="#525f6c"
        >{t`pfpmaker-mint-tips`}</Box>
      </Box>
      <Box
        width="300px"
        margin="0 auto"
        marginTop={1}
        fontSize={12}
        color="#525f6c"
      >
        Contract:{' '}
        <Link
          target="_blank"
          color={'inherit'}
          href={`https://sepolia.etherscan.io/address/0x3d0172a432A1E861Df1434E44F815D32E9bed5cC`}
        >
          0x3d0172a432A1E861Df1434E44F815D32E9bed5cC
        </Link>
        . Open Source and Safe.
      </Box>
    </Box>
  );
}

function getRandomTraits() {
  let randomTraits = {};
  Object.keys(TRAITS).forEach((traitKey) => {
    randomTraits[traitKey] = _.sample(TRAITS[traitKey]).key;
  });

  if (Math.floor(Math.random() * 100) < 80) {
    randomTraits.EyeAccessories = null;
  }

  if (Math.floor(Math.random() * 100) < 60) {
    randomTraits.Decoration = null;
  }

  if (Math.floor(Math.random() * 100) < 60) {
    randomTraits['HairDecorations'] = null;
  }

  if (Math.floor(Math.random() * 100) < 60) {
    randomTraits['FaceDecorations'] = null;
  }

  if (randomTraits['Decoration'] === 'Huzi') {
    randomTraits['Nose'] = null;
    randomTraits['Mouth'] = null;
  }
  if (randomTraits['EyeAccessories'] === 'Mojing') {
    randomTraits['Eye'] = null;
  }

  randomTraits['LaserEye'] = null;

  return randomTraits;
}

const PFPMakerRight = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: '1024px') {
    flex-basis: auto;
  }
`;

function PFPMaker() {
  const [currentTab, setCurrentTab] = useState('Hairstyle');
  const [pfp, setPfp] = useState({
    Eye: null,
    Nose: null,
    Mouth: null,
    FaceDecorations: null,
    Hairstyle: null,
    HairDecorations: null,
    EyeAccessories: null,
    LaserEye: null,
  });
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      flexDirection={smallScreen ? 'column' : 'row'}
      marginLeft={smallScreen ? '-40px' : 0}
      display="flex"
      alignItems="center"
    >
      <Box
        flexBasis="50%"
        border="2px solid #000"
        borderRadius={4}
        marginBottom={smallScreen ? 2 : 0}
        minHeight="520px"
      >
        <PFPRTraits
          currentTab={currentTab}
          handleChange={(event, tab) => {
            setCurrentTab(tab);
          }}
          pfp={pfp}
          onChange={(newPfp) => {
            setPfp(newPfp);
          }}
        />
      </Box>
      <Box
        flexBasis="50%"
        alignItems="center"
        marginBottom={smallScreen ? 2 : 0}
      >
        <PFPCanvas
          onRandom={() => {
            setPfp(getRandomTraits());
          }}
          onReset={() => {
            setPfp({
              Eye: null,
              Nose: null,
              Mouth: null,
              FaceDecorations: null,
              Hairstyle: null,
              HairDecorations: null,
              EyeAccessories: null,
              LaserEye: null,
            });
          }}
          pfp={pfp}
        ></PFPCanvas>
      </Box>
    </Box>
  );
}

export default PFPMaker;
