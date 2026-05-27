import { Section, SectionTitle } from '../home/elements';
import { TechTag, TechWrap, WorkCard, WorkGrid, WorkText, WorkTitle, WorkUrl } from './elements';
import { WorkResponseBody } from '../../data/mockApi';
import { FiExternalLink } from 'react-icons/fi';

type Props = {
  data: WorkResponseBody;
};

const Work = ({ data }: Props) => {
  return (
    <Section id="work">
      <SectionTitle>Work</SectionTitle>
      <WorkGrid>
        {data.data.map((item, key) => (
          <WorkCard key={key}>
            <WorkTitle>{item.title}</WorkTitle>
            <WorkText>{item.description}</WorkText>
            <TechWrap>
              {item.tech.map((tag) => (
                <TechTag key={tag}>{tag}</TechTag>
              ))}
            </TechWrap>
            {item.url && (
              <WorkUrl href={`https://${item.url}`} target="_blank" rel="noreferrer">
                {item.url}
                <FiExternalLink />
              </WorkUrl>
            )}
          </WorkCard>
        ))}
      </WorkGrid>
    </Section>
  );
};

export default Work;
