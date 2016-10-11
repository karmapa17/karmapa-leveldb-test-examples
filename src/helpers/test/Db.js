import should from 'should';
import {Db, rimraf, mkdirp, isDir} from './../';

describe('Db', () => {

  beforeEach((done) => {
    mkdirp('./test-db')
      .then(() => done());
  });

  it('should be able to create my database', async () => {
    const bookDb = new Db('./test-db/bookDb');
    await bookDb.close();
    isDir('./test-db/bookDb').should.be.fulfilled();
  });

  it('should let me insert data', async () => {
    const bookDb = new Db('./test-db/bookDb');
    await bookDb.put('hello', 'world');
    const word = await bookDb.get('hello');
    await bookDb.close();
    word.should.equal('world');
  });

  it('should let me delete data', async () => {
    const bookDb = new Db('./test-db/bookDb');
    await bookDb.put('hello', 'world');
    await bookDb.del('hello');

    bookDb.get('hello').should.not.be.fulfilled();
  });

  afterEach((done) => {
    rimraf('./test-db')
      .then(() => done());
  });
});
