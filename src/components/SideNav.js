import React from 'react';
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';

const SideNav = ({ navigation }) => (
  <React.Fragment>
    <Box p={2}>
      <Typography variant="h5">Bentley Group</Typography>
    </Box>
    <Box pt={2}>
      <List>
        {navigation.map((item, i) => (
          <ListItem key={i} button dense component={Link} href={item.url}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  </React.Fragment>
);

export default SideNav;
