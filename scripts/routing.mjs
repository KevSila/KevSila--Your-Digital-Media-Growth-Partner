export function netlifyRedirects(paths) {
  // Netlify resolves /path to path.html through static file shadowing.
  // Avoid redundant clean-URL rewrites: forced .html aliases can then form loops.
  const rules=['# Generated from the public route catalogue. Existing static files shadow the 404 fallback.', '/index.html / 301!'];
  for(const path of paths.filter(path=>path!=='/')) rules.push(`${path}.html ${path} 301!`);
  rules.push('/* /404.html 404');
  return rules.join('\n')+'\n';
}