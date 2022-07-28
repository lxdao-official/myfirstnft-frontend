import React from 'react';
import Box from '@mui/material/Box';
import MUIListItem from '@mui/material/ListItem';
import MUIListItemText from '@mui/material/ListItemText';

export default function ListItem(props) {
  return (
    <MUIListItem sx={{ alignItems: 'flex-start', padding: 0 }}>
      <Box
        border={`6px solid ${props.color}`}
        marginRight="15px"
        flex={0}
        borderRadius="50%"
        marginTop="9px"
      />
      <MUIListItemText primary={props.text} />
    </MUIListItem>
  );
}
