
export function mergeSort(items, comparator) {
    
  // Base case: arrays of length 0 or 1 are already sorted
  if (!Array.isArray(items) || items.length <= 1) {
    return items ? [...items] : [];
  }

  // Divide array into halves
  const mid = Math.floor(items.length / 2);
  const left = mergeSort(items.slice(0, mid), comparator);
  const right = mergeSort(items.slice(mid), comparator);

  // Merge sorted halves maintaining stability
  return merge(left, right, comparator);
}

function merge(left, right, comparator) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    // Note: <= 0 preserves stability by prioritizing the left array element on equality
    if (comparator(left[i], right[j]) <= 0) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Concatenate remaining elements
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}