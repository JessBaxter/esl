import type { IFrontmatter } from 'astro-boilerplate-components';
// import { PostContent, PostHeader, Section } from 'astro-boilerplate-components';
import { PostContent, Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

import { WeekHeader } from './WeekHeader';

// import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  // <Section>
  //   <PostHeader content={props.frontmatter} author={AppConfig.author} />

  //   <PostContent content={props.frontmatter}>{props.children}</PostContent>
  // </Section>
  <Section>
    <WeekHeader content={props.frontmatter} />
    <PostContent content={props.frontmatter}>
      {props.children}
    </PostContent>
  </Section>
);

export { BlogPost };
