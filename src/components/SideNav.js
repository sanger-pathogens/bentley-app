import React from 'react';
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';

import navigationAnchored from '../content/navigationAnchored';

const SideNav = ({ anchored = true }) => (
  <React.Fragment>
    <Box p={2}>
      <Typography variant="h5">Bentley Group</Typography>
    </Box>
    <Box pt={2}>
      <List>
        {navigationAnchored.map((item, i) => (
          <ListItem
            key={i}
            button
            dense
            component={Link}
            href={`${anchored ? '#' : ''}${item.url}`}
          >
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  </React.Fragment>
);

export default SideNav;
