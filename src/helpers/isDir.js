import fs from 'fs';

export default function isDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        return reject(err);
      }
      return stats.isDirectory() ? resolve() : reject();
    });
  });
}
