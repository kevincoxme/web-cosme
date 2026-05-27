import { Section, SectionTitle } from '../home/elements';
import {
  AccentTitle,
  BodyText,
  Card,
  CompanyText,
  Pill,
  RowBetween,
  TechTag,
  TechWrap,
} from './elements';
import { ExperienceResponseBody } from '../../data/mockApi';

type Props = {
  data: ExperienceResponseBody;
};

const Experience = ({ data }: Props) => {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      {data.data.map((item, index) => (
        <Card key={`${item.title}-${index}`}>
          <RowBetween>
            <AccentTitle>{item.title}</AccentTitle>
            <Pill>{item.period}</Pill>
          </RowBetween>
          <CompanyText>
            {item.company} | {item.location}
          </CompanyText>
          <BodyText>{item.description}</BodyText>
          <TechWrap>
            {item.tech.map((tag) => (
              <TechTag key={tag}>{tag}</TechTag>
            ))}
          </TechWrap>
        </Card>
      ))}
    </Section>
  );
};

export default Experience;
