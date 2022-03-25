import AboutUs from '../components/AboutUs';
import ResearchThemes from '../components/ResearchThemes';
import Publications from '../components/Publications';
import Software from '../components/Software';
import Team from '../components/Team';
import Collaborators from '../components/Collaborators';
import Outreach from '../components/Outreach';
import Gallery from '../components/Gallery';
import JoinUs from '../components/JoinUs';

export default [
  {
    label: 'About Us',
    title: 'About us',
    url: 'about',
    ContentComponent: AboutUs,
  },
  {
    label: 'Research',
    title: 'Our research',
    url: 'research',
    ContentComponent: ResearchThemes,
  },
  {
    label: 'Software',
    title: 'Software',
    url: 'software',
    ContentComponent: Software,
  },
  {
    label: 'Team',
    title: 'Meet the team',
    url: 'team',
    ContentComponent: Team,
  },
  {
    label: 'Collaborators',
    title: 'Global collaboration',
    url: 'collaborators',
    ContentComponent: Collaborators,
  },
  {
    label: 'Papers',
    title: 'Selected papers',
    url: 'papers',
    ContentComponent: Publications,
  },
  {
    label: 'Outreach',
    title: 'Outreach',
    url: 'outreach',
    ContentComponent: Outreach,
  },
  {
    label: 'Gallery',
    title: 'Gallery',
    url: 'gallery',
    ContentComponent: Gallery,
  },
  {
    label: 'Join Us',
    title: 'Join Us',
    url: 'joinus',
    ContentComponent: JoinUs,
  },
];
