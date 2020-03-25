import React from 'react';
import { Typography } from '@material-ui/core';
// import raw from 'raw.macro';

import Link from './Link';
import Page from './Page';
// import WorldMap from './WorldMap';
// import Content from './Content';
// import locationsJuno from '../content/locationsJuno';
// import locationsGPS from '../content/locationsGPS';

// const pointGroups = [
//   { name: 'Juno', fill: '#F9A03F', points: locationsJuno },
//   { name: 'GPS', fill: '#9AD4D6', points: locationsGPS },
// ];

// const mdHome = raw('../content/home.md');

const PageHome = () => {
  return (
    <Page>
      <Typography variant="h4">Full site demo</Typography>
      <Typography>
        <Link href="/demo/scroll-with-navbar">Long scroll with navbar</Link>
      </Typography>
      <Typography>
        <Link href="/demo/scroll-with-sidenav">Long scroll with side menu</Link>
      </Typography>
      <Typography variant="h4">Variants for different sections</Typography>
      <Typography>
        <Link href="/team-variants">Team</Link>
      </Typography>
      <Typography>
        <Link href="/software-variants">Software</Link>
      </Typography>
      <Typography variant="h4">Possible interactive charts</Typography>
      <Typography>
        <Link href="/tree-of-life">
          Tree of life (highlighting our species)
        </Link>
      </Typography>
      <Typography variant="h4">Known TODOs</Typography>
      <Typography>
        <ul>
          <li>Add contact info to footer</li>
          <li>Add twitter feed</li>
          <li>Add some more images (eg. Sanger backdrop) maybe</li>
          <li>Try out some different colours</li>
        </ul>
      </Typography>
    </Page>
    // <React.Fragment>
    //   <Box p={2} bgcolor="black">
    //     <WorldMap pointGroups={pointGroups} />
    //   </Box>
    //   <Page>
    //     <Box>
    //       <Content md={mdHome} />
    //     </Box>
    //   </Page>
    // </React.Fragment>
  );
};

export default PageHome;
