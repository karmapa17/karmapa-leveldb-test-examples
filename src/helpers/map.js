export default function map(arr, cb) {
  const length = arr.length;
  const newArr = [];
  let index = 0;
  while (index < length) {
    newArr.push(cb(arr[index], index));
    index++;
  }
  return newArr;
}
