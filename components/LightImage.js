import { useState } from 'react';
import { Box } from '@mui/material';
import Lightbox from 'react-image-lightbox';

export default function LightImage(props) {
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = () => {
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  return (
    <>
      <Box
        marginTop={2}
        marginBottom={4}
        maxWidth={props.maxWidth ? props.maxWidth : 600}
        onClick={openLightbox}
        component="img"
        src={props.src}
        sx={{
          width: '100%',
          borderRadius: 2,
          boxShadow: props.noShadow ? 0 : 1,
          cursor: 'pointer',
        }}
      />
      {viewerIsOpen && (
        <Lightbox
          mainSrc={props.src}
          onCloseRequest={() => closeLightbox()}
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </>
  );
}
