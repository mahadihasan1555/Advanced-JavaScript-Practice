//Array slice, splice, array join elements

//slice


const nums = [1, 2, 3, 4, 5, 6, 7];
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);

//splice

const nums = [1, 2, 3, 4, 5, 6, 7];
const removed = nums.splice(2, 5);

console.log(removed);
console.log(nums);

//inject


const nums = [1, 2, 3, 4, 5, 6, 7];
const removed = nums.splice(2, 5, 88);

console.log(removed);
console.log(nums);

//join

//empty
const nums = [1, 2, 3, 4, 5, 6, 7];
const removed = nums.splice(2, 5, 88);
const together = nums.join("");
console.log(together);
//white space
const nums = [1, 2, 3, 4, 5, 6, 7];
const removed = nums.splice(2, 5, 88);
const together = nums.join(" ");
console.log(together);
//coma
const nums = [1, 2, 3, 4, 5, 6, 7];
const removed = nums.splice(2, 5, 88);
const together = nums.join(",");
console.log(together);