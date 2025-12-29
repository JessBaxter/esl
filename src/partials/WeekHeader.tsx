import type { IFrontmatter } from 'astro-boilerplate-components';

type Props = {
  content: IFrontmatter;
};

export const WeekHeader = ({ content }: Props) => {
  const date = new Date(content.pubDate).toLocaleDateString('en-AU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
  });

  return (
    <header className="mb-10 text-center">
      <h1 className="text-3xl font-bold mb-2">{content.unit}</h1>
      <h2 className="text-xl font-bold mb-6">{content.title}</h2>
      <p className="text-xs mb-10">Week starting {date}</p>
      <p>
        👈&nbsp;&nbsp; 
        <a href={`/${content.level.toLowerCase()}`} className="text-sm underline">Back to all units</a>
      </p>
    </header>
  );
};
