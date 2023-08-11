import Collapsible from './Collapsible';
import Markdown from './Markdown';
import useFetchMarkDown from '../hooks/useFetchMarkDown';

const ResearchThemes = () => {
  const mdResearchIntro = useFetchMarkDown({ md: 'markdown/research-intro.md' });
  const mdResearchGPS = useFetchMarkDown({ md: 'markdown/research-gps.md' });
  const mdResearchJUNO = useFetchMarkDown({ md: 'markdown/research-juno.md' });
  const mdResearchMeningococcus = useFetchMarkDown({ md: 'markdown/research-meningococcus.md' });

  return (
    <div>
      <Markdown mdContent={mdResearchIntro} />
      <Collapsible title='Streptococcus pneumoniae' logo='logos/gps-logo.png'>
        <Markdown mdContent={mdResearchGPS} />
      </Collapsible>
      <Collapsible title='Streptococcus agalactiae' logo='logos/juno-logo.png'>
        <Markdown mdContent={mdResearchJUNO} />
      </Collapsible>
      <Collapsible title='Neisseria meningitidis' logo='logos/meningococcus.png'>
        <Markdown mdContent={mdResearchMeningococcus} />
      </Collapsible>
    </div>
  );
};

export default ResearchThemes;
