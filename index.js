function arrayPush(array, values) {
  const arrayLength = array.length;
  for (let index = 0; index < values.length; index++) {
    array[arrayLength + index] = values[index];
  }

  return array;
}

function copyArray(source, array) {
  array || (array = []);
  for (let index = 0; index < source.length; index++) {
    const element = source[index];
    array[index] = element;
  }
  return array;
}

function concat(...argumentsList) {
  let result = [];

  for (let index = 0; index < argumentsList.length; index++) {
    if (Array.isArray(argumentsList[index])) {
      arrayPush(result, argumentsList[index]);
    } else {
      arrayPush(result, [argumentsList[index]]);
    }
  }

  return result;
}

function chunk(array, size) {
  const length = array == null ? 0 : array.length;

  if (!length || size < 1) {
    return [];
  }

  let acc = [];

  for (let index = 0; index < array.length; index += size) {
    acc.push(array.slice(index, index + size));
  }

  return acc;
}

function compact(array) {
  let resIndex = 0,
    result = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value) {
      result[resIndex++] = value;
    }
  }

  return result;
}

function diffrence(array, values) {
  const set = new Set(array);

  for (let index = 0; index < values.length; index++) {
    set.delete(values[i]);
  }

  return Array.from(set);
}

function drop(array, n) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  return baseSlice(array, n < 0 ? 0 : n, length);
}

function dropRight(array, n) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = length - n;
  return baseSlice(array, n < 0 ? 0 : n, length);
}

function fill(array, value, start, end) {
  start = start ? start : 0;
  end = end ? end : array.length;
  for (let index = start; index < end; index++) {
    array[index] = value;
  }

  return array;
}

function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  let index = fromIndex == null ? 0 : Number(fromIndex);

  for (index; index < length; index++) {
    if (predicate(array[index], index, array)) return index;
  }
}

function head(array) {
  return array && array.length ? array[0] : undefined;
}

function flatten(array) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (Array.isArray(element)) {
      arrayPush(result, element);
    } else {
      arrayPush(result, [element]);
    }
  }

  return result;
}

function flattenDeep(array) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (Array.isArray(element)) {
      arrayPush(result, flattenDeep(element));
    } else {
      arrayPush(result, [element]);
    }
  }
  return result;
}

function flattenDepth(array, depth) {
  const result = [];
  depth = depth;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (Array.isArray(element)) {
      if (depth > 0) {
        arrayPush(result, flattenDepth(element, depth - 1));
      } else {
        arrayPush(result, [element]);
      }
    } else {
      arrayPush(result, [element]);
    }
  }

  return result;
}

function fromPairs(pairs) {
  const result = {};

  for (let index = 0; index < pairs.length; index++) {
    result[pairs[index][0]] = pairs[index][1];
  }

  return result;
}

function indexOf(array, value, fromIndex) {
  let index = -1;
  fromIndex = fromIndex ? fromIndex : 0;
  for (let i = fromIndex; i < array.length; i++) {
    const element = array[i];
    if (element === value) index = i;
  }
  return index;
}

function intersection(...arrays) {
  const countObj = {};
  const result = [];

  for (const num of arrays[0]) {
    countObj[num] = 1;
  }

  for (let index = 1; index < arrays.length; index++) {
    const set = new Set(arrays[index]);

    for (const num in countObj) {
      if (set.has(Number(num))) {
        countObj[num]++;
      }
    }
  }

  for (let index = 0; index < Object.entries(countObj).length; index++) {
    const [key, value] = Object.entries(countObj)[index];
    if (value === arrays.length) {
      result.push(Number(key));
    }
  }
  return result;
}

function join(array, separator) {
  let str = "";

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index !== array.length - 1) {
      str += element + separator;
    } else {
      str += element;
    }
  }

  return str;
}

function pull(array, values) {
  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];

    if (values.includes(element)) {
      array.splice(index, 1);
    }
  }

  return array;
}

function reverse(array) {
  let left = 0,
    right = array.length - 1;

  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }

  return array;
}

function slice(array, start = 0, end = array.length - 1) {
  let result = [];

  for (let index = start; index < end; index++) {
    result.push(array[index]);
  }

  return result;
}

function sortedIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= value) {
      return i;
    }
  }
  return array.length;
}

function sortedIndexOf(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else if (target > array[mid]) {
      left = mid + 1;
    }
  }
  return -1;
}
