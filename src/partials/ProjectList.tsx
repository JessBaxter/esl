import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Student <GradientText>Levels</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Beginner and Elementary"
        description="Beginner students learn words and simple sentences. Elementary students use phrases and sentences to describe in simple terms their family and other people, living conditions, their educational background and their present or most recent job."
        link="/a1-a2"
        img={{
          src: '/assets/images/class-beg.png',
          alt: 'Beginner and Elementary',
        }}
        category={
          <>
            <Tags color={ColorTags.RED}>A1</Tags>
            <Tags color={ColorTags.ROSE}>A2</Tags>
          </>
        }
      />
      <Project
        name="Pre-Intermediate and Intermediate"
        description="Pre-Intermediate and Intermediate students can connect phrases in a simple way in order to describe experiences and events, their dreams, hopes and ambitions. They can briefly give reasons and explanations for opinions and plans. They can narrate a story or relate the plot of a book or film and describe their reactions."
        link="/b1"
        img={{
           src: '/assets/images/class-pre.png',
           alt: 'Pre-Intermediate and Intermediate'
          }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>B1</Tags>
          </>
        }
      />
      <Project
        name="Upper Intermediate and Advanced"
        description="Upper Intermediate students can present clear, detailed descriptions on a wide range of subjects related to their field of interest. They can explain a viewpoint on a topical issue giving the advantages and disadvantages of various options. Advanced students can present clear, detailed descriptions of complex subjects integrating sub-themes, developing particular points and rounding off with an appropriate conclusion."
        link="/b2-c1"
        img={{ 
          src: '/assets/images/class-upp.png',
          alt: 'Upper Intermediate and Advanced'
        }}
        category={
          <>
            <Tags color={ColorTags.GREEN}>B2</Tags>
            <Tags color={ColorTags.EMERALD}>C1</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
