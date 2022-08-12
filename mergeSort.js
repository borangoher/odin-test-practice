const mergeSort = (arr) => {
  let tempArr = arr.slice();
  return splitMerge(tempArr);
};

const splitMerge = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const midpoint = parseInt(Math.floor(arr.length / 2));

  const leftArr = splitMerge(arr.slice(0, midpoint));
  const rightArr = splitMerge(arr.slice(midpoint));

  arr = leftArr.concat(rightArr);

  arr = sortMerge(arr, midpoint);

  return arr;
};

const sortMerge = (arr, mid) => {
  let tempArr = arr.slice();
  let j = mid;
  let i = 0;
  for (let k = 0; k < arr.length; k++) {
    if (i < mid && (j >= arr.length || arr[i] < arr[j])) {
      tempArr[k] = arr[i];
      i += 1;
    } else {
      tempArr[k] = arr[j];
      j += 1;
    }
  }

  return tempArr;
};

mergeSort([1, 3, 2, 5, 4]);

console.log("hello");
