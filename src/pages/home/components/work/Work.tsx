import { Section, SectionTitle } from '../home/elements';
import { WorkCard, WorkContainer, WorkText, WorkTitle, WorkUrl } from './elements';
import { Work as WorkProps } from '../../types';

const Work = ({ work }: { work: Array<WorkProps> }) => {
  return (
    <Section id="work">
      <SectionTitle>Work</SectionTitle>
      <WorkContainer>
        {work.map((item, key) => (
          <WorkCard key={key}>
            <WorkTitle>{item.title}</WorkTitle>
            <WorkText>{item.description}</WorkText>
            <WorkUrl href={item.href} target="_blank">
              {item.href}
            </WorkUrl>
          </WorkCard>
        ))}
      </WorkContainer>
    </Section>
  );
};

export default Work;
