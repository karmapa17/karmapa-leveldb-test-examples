import should from 'should';
import {map} from './../';

describe('map', () => {

  it('should have new reference', () => {

    const arr = ['apple', 'orange', 'banana'];
    const mappedArr = map(arr, (elem) => {
      return elem;
    });
    const res = (mappedArr === arr);
    res.should.equal(false);
  });

  it('should have elem argument', () => {

    const arr = ['apple', 'orange', 'banana'];
    const elems = [];
    const mappedArr = map(arr, (elem, index) => {
      elems.push(elem);
      return elem;
    });

    elems.should.deepEqual(['apple', 'orange', 'banana']);
  });

  it('should have index argument', () => {

    const arr = ['apple', 'orange', 'banana'];
    const indices = [];
    const mappedArr = map(arr, (elem, index) => {
      indices.push(index);
      return elem;
    });

    indices.should.deepEqual([0, 1, 2]);
  });

  it('should use my callback function', () => {

    const arr = ['apple', 'orange', 'banana'];
    const mappedArr = map(arr, (elem) => ({fruit: elem}));

    mappedArr.should.deepEqual([
      {fruit: 'apple'},
      {fruit: 'orange'},
      {fruit: 'banana'}
    ]);
  });
});
