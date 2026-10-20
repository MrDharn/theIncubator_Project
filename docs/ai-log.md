# AI log

Every time you give an AI tool a significant prompt, add an entry. Three lines each.
"Nothing was wrong" is allowed, but it is rarely true. Your instructor will read this.

## Build 2

### Prompt 1: Build 2 prompt (docs/build-2.md)
- **What I asked:**
- Get starter code for custom merge sort 
- **What came back:**

/**
 * Custom Stable Merge Sort Implementation
 * Time Complexity: O(N log N)
 * Space Complexity: O(N) auxiliary space
 * 
 * @template T
 * @param {T[]} items - Array of items to be sorted.
 * @param {(a: T, b: T) => number} comparator - Pure comparator function.
 *        Returns negative if a < b, positive if a > b, 0 if equal.
 * @returns {T[]} A new sorted array (non-mutating).
 */
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

/**
 * Helper function to merge two sorted arrays while preserving original relative order for equal keys.
 * 
 * @template T
 * @param {T[]} left 
 * @param {T[]} right 
 * @param {(a: T, b: T) => number} comparator 
 * @returns {T[]}
 */
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
- **What was wrong (or "nothing"):**

### Prompt 2:
- **What I asked:**
- **What came back:**
- **What was wrong (or "nothing"):**
