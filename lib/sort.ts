import { Post } from 'contentlayer/generated';

export function sortPosts(array: Post[]) {
  return array.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
