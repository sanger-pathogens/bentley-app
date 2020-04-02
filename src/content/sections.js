import React from 'react';
import raw from 'raw.macro';
import { Typography } from '@material-ui/core';

import AboutUs from '../components/AboutUs';
import ResearchThemes from '../components/ResearchThemes';
import Publications from '../components/Publications';
import Software from '../components/Software';
import Team from '../components/Team';
import Collaborators from '../components/Collaborators';
import Markdown from '../components/Markdown';

const mdVisitors = raw('../content/visitors.md');
const mdAlumni = raw('../content/alumni.md');

export default [
  {
    label: 'About Us',
    title: 'About us',
    url: 'about',
    ContentComponent: AboutUs,
  },
  {
    label: 'Research',
    title: 'Research themes',
    url: 'research',
    ContentComponent: ResearchThemes,
  },
  {
    label: 'Software',
    title: 'Our software',
    url: 'software',
    ContentComponent: Software,
  },
  {
    label: 'Team',
    title: 'Meet the team',
    url: 'team',
    ContentComponent: () => (
      <React.Fragment>
        <Typography variant="h4" style={{ paddingTop: '1rem' }}>
          Current members
        </Typography>
        <Team />
        <Typography variant="h4" style={{ paddingTop: '1rem' }}>
          Visitors
        </Typography>
        <Markdown md={mdVisitors} />
        <Typography variant="h4" style={{ paddingTop: '1rem' }}>
          Alumni
        </Typography>
        <Markdown md={mdAlumni} />
      </React.Fragment>
    ),
  },
  {
    label: 'Collaborators',
    title: 'Collaborators',
    url: 'collaborators',
    ContentComponent: Collaborators,
  },
  {
    label: 'Publications',
    title: 'Publications',
    url: 'publications',
    ContentComponent: Publications,
  },
];
