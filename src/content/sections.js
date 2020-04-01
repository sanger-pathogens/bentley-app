import React from 'react';
import raw from 'raw.macro';
import { Typography } from '@material-ui/core';

import AboutUs from '../components/AboutUs';
import ResearchThemes from '../components/ResearchThemes';
import Publications from '../components/Publications';
import Software from '../components/Software';
import Team from '../components/Team';
import WorldMap from '../components/WorldMap';
import Content from '../components/Content';

const mdVisitors = raw('../content/visitors.md');
const mdAlumni = raw('../content/alumni.md');

export default [
  {
    label: 'About Us',
    title: 'About us',
    url: 'about',
    contentComponent: AboutUs,
  },
  {
    label: 'Research',
    title: 'Research themes',
    url: 'research',
    contentComponent: ResearchThemes,
  },
  {
    label: 'Software',
    title: 'Our software',
    url: 'software',
    contentComponent: Software,
  },
  {
    label: 'Team',
    title: 'Meet the team',
    url: 'team',
    contentComponent: () => (
      <React.Fragment>
        <Typography variant="h4" style={{ paddingTop: '1rem' }}>
          Current members
        </Typography>
        <Team />
        <Typography variant="h4" style={{ paddingTop: '1rem' }}>
          Visitors
        </Typography>
        <Content md={mdVisitors} />
        <Typography variant="h4" style={{ paddingTop: '1rem' }}>
          Alumni
        </Typography>
        <Content md={mdAlumni} />
      </React.Fragment>
    ),
  },
  {
    label: 'Collaborators',
    title: 'Collaborators',
    url: 'collaborators',
    contentComponent: WorldMap,
  },
  {
    label: 'Publications',
    title: 'Publications',
    url: 'publications',
    contentComponent: Publications,
  },
];
