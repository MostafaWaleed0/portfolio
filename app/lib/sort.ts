export function sortPosts(array) {
  return array.sort(
    (a, b) =>
      new Date(b?.metadata?.date).getTime() -
      new Date(a?.metadata?.date).getTime()
  );
}
