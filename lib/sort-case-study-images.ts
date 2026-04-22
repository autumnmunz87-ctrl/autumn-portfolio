/**
 * Sort image paths by the index encoded in each filename (e.g. "… image 1", "…image_8").
 * Paths without a detectable number keep their relative order after numbered paths.
 */
function fileStemFromPath(path: string): string {
  const base = decodeURIComponent(path.split("/").pop() ?? path);
  let name = base;
  while (/\.[a-z0-9]+$/i.test(name)) {
    name = name.replace(/\.[a-z0-9]+$/i, "");
  }
  return name;
}

function trailingImageIndex(path: string): number | null {
  const stem = fileStemFromPath(path);
  // `_image_1` in `coffee_image_1-uuid` has no `\b` before `image` in JS (underscore is \w).
  // Avoid falling back to trailing UUID digits — prefer explicit `image` + index.
  const imageMatches = [...stem.matchAll(/(?:^|[^a-z0-9])image[ _-]?(\d+)/gi)];
  if (imageMatches.length > 0) {
    return parseInt(imageMatches[imageMatches.length - 1][1], 10);
  }
  const tail = stem.match(/(\d+)\s*$/);
  return tail ? parseInt(tail[1], 10) : null;
}

export function sortPathsByImageFilenameNumber(paths: string[]): string[] {
  return paths
    .map((path, index) => ({ path, index, n: trailingImageIndex(path) }))
    .sort((a, b) => {
      const an = a.n;
      const bn = b.n;
      if (an != null && bn != null && an !== bn) return an - bn;
      if (an == null && bn != null) return 1;
      if (an != null && bn == null) return -1;
      return a.index - b.index;
    })
    .map((x) => x.path);
}
