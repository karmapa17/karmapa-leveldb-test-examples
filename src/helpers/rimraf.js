import rimraf from 'rimraf';

export default function(path) {
  return new Promise((resolve, reject) => {
    rimraf(path, (err) => {
      err ? reject() : resolve();
    });
  });
}
