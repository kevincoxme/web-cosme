import { Experience as ExperienceType } from '../../types';
import { Grid, Section, SectionTitle } from '../home/elements';
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

const Experience = ({ experiences }: { experiences: Array<ExperienceType> }) => {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <Grid>
        {experiences.map((item, index) => (
          <Card key={`${item.title}-${index}`}>
            <RowBetween>
              <AccentTitle>{item.title}</AccentTitle>
              <Pill>{item.period}</Pill>
            </RowBetween>
            <CompanyText>{item.company}</CompanyText>
            <BodyText>{item.description}</BodyText>
            <TechWrap>
              {item.tech.map((tag) => (
                <TechTag key={tag}>{tag}</TechTag>
              ))}
            </TechWrap>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Experience;
