import fs from 'fs';
import path from 'path';

function findNovelPath(novelName) {
  const candidates = [
    path.resolve(`novels-src/${novelName}/output/novel`),
    path.resolve(`${novelName}/output/novel`),
    path.resolve(`../${novelName}/output/novel`),
  ];
  return candidates.find((c) => fs.existsSync(c));
}

function ensureLink(novelName) {
  const linkPath = path.resolve(`docs/${novelName}`);
  if (fs.existsSync(linkPath)) return;
  const target = findNovelPath(novelName);
  if (!target) {
    throw new Error(`Cannot find novel source directory for ${novelName}`);
  }
  fs.symlinkSync(target, linkPath, process.platform === 'win32' ? 'junction' : 'dir');
}

ensureLink('sf-1');
ensureLink('ss-1');
