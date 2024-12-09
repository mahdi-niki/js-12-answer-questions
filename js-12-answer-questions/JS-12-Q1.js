//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
function idk() {
  const firstFun = "Action";
  return idk1();
  function idk1() {
    const secondFun = "Potential";
    return idk2();
    function idk2() {
      const thirdFun = "Signals";
      console.log(firstFun);
      console.log(secondFun);
      console.log(thirdFun);
    }
  }
}
idk();
// idk1(); //not defined
// idk2(); //not defined
