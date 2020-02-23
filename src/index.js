
exports.min = function min (array) {
  if (array.length == 0 || !array)
  {
    return 0;
  }
  let min = array[0];
  array.forEach(element => {
    min = Math.min(min, element);
  });
  return min;
}

exports.max = function max (array) {
  if (array.length == 0 || !array)
  {
    return 0;
  }
  let max = array[0];
  array.forEach(element => {
    max = Math.max(max, element);
  });
  return max;
}

exports.avg = function avg (array) {
  if (array.length == 0 || !array)
  {
    return 0;
  }
  let avg = 0;
  array.forEach(element => {
    avg += element;
  });
  avg /= array.length;
  return avg;
}
