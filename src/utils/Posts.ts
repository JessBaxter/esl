import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';

// export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
//   return posts.sort(
//     (a, b) =>
//       new Date(b.frontmatter.pubDate).valueOf() -
//       new Date(a.frontmatter.pubDate).valueOf()
//   );
// };

// Sort by closest to today's date with future posts being farther down
export const sortByDate = (posts: MarkdownInstance<IFrontmatter>[]) => {
  const now = new Date().valueOf();

  return posts.sort((a, b) => {
    const aTime = new Date(a.frontmatter.pubDate).valueOf();
    const bTime = new Date(b.frontmatter.pubDate).valueOf();

    const aIsFuture = aTime > now;
    const bIsFuture = bTime > now;

    if (aIsFuture && !bIsFuture) return 1;
    if (!aIsFuture && bIsFuture) return -1;

    if (!aIsFuture && !bIsFuture) {
      return bTime - aTime;
    }

    return aTime - bTime;
  });
};
