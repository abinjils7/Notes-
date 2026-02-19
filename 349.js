let nums1 = [1, 2, 3, 5];
let nums2 = [1, 2, 2, 3, 4];

var intersection = function (nums1, nums2) {
  let map = new Map();

  let comon = [];

  for (let num of nums1) {
    map.set(num, true);
  }

  for (let num of nums2) {
    if (map.has(num)) {
      comon.push(num);
      map.delete(num):
    }
  }
  console.log(comon);

  return comon;
};

intersection(nums1, nums2);
