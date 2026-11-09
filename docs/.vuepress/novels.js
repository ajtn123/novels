import { globSync, readFileSync } from 'fs';
import path from 'path';

const nz = x => x.replace(/\\/g, '/');
const id = x => parseInt(path.basename(x).match(/\d+/)?.[0]);

export default globSync('main/*/*/*/book.md', { cwd: 'docs' }).map(book => {
  const overview = book;
  const dir = path.dirname(overview);
  const title = readFileSync(`docs/${overview}`, 'utf8').split('\n', 1)[0].trim().match(/^#\s*《?([^》]+)》?$/)?.[1];
  const chapters = globSync(`${dir}/chapters/*.md`, { cwd: 'docs' })
    .map((chapter) => path.relative(`docs/${dir}`, `docs/${chapter}`))
    .sort((a, b) => id(a) - id(b));

  return {
    title,
    overview: `/${nz(overview)}`,
    dir: nz(dir),
    sidebar: [
      { text: '简介', link: 'book' },
      { text: '章节目录', items: chapters.map(nz) },
    ],
  };
});
