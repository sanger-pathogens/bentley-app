import React from 'react';
import { Typography, Link } from '@material-ui/core';
// import raw from 'raw.macro';

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
      <Typography variant="h2">Variants for different sections</Typography>
      <Typography variant="h6">
        <Link href="/team-variants">Team</Link>
      </Typography>
      <Typography variant="h6">
        <Link href="/software-variants">Software</Link>
      </Typography>
      <Typography variant="h2">Possible interactive charts</Typography>
      <Typography variant="h6">
        <Link href="/tree-of-life">
          Tree of life (highlighting our species)
        </Link>
      </Typography>
      <Typography variant="h2">Demos of site</Typography>
      <Typography variant="h6">
        <Link href="/demo/scroll-with-navbar">Long scroll with navbar</Link>
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
