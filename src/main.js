import {map, Db, mkdirp} from './helpers';

(async function main() {
  await mkdirp('./db');
  const bookDb = new Db('./db/book');
  await bookDb.put('book-title', 'Rome & Juliet');
  const title = await bookDb.get('book-title');
  console.log('here', title);

  bookDb.del('book-title');

  try {
    await bookDb.get('book-title');
  }
  catch(err) {
    // key not found exception
    //console.log('err', err);
  }
})();
