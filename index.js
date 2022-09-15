let nums = [232,2353,34,23,42,234,42];
let num2 = nums.filter((e)=> {
  return e%2 !== 0
});
console.log(num2);