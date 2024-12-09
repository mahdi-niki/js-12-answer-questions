// ? Question-3: follow these steps:
// todo-1: Write a function that receives an array of numbers
// todo-2: In The function that you created in todo-1, you should create two functions.
// todo-3: the first function displays the first half of the array, and the second function displays the second half of the array..

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*=> output
   [ 1, 2, 3, 4, 5 ]
   [ 6, 7, 8, 9, 10 ]
 */

// !Answer:




function parent(array) {
  const part = array.length / 2;
  function child1() {
    const firstPart = array.slice(0, part);
    console.log(firstPart);
  }
  function child2() {
    const secondPart = array.slice(part);
    console.log(secondPart);
  }
  child1();
  child2();
}
parent(numbers);




///////////////arrow fun///////////////////



function parent2(array) {
  const part = array.length / 2;
  const part1 = () => array.slice(0, part);
  const part2 = () => array.slice(part);
  console.log(part1());
  console.log(part2());
}
parent2(numbers);
