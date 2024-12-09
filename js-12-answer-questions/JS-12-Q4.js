//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring







//todo1// use let and const instead of var when writing JavaScript code to prevent unexpected scope problems and create more predictable, maintainable code. If you need to reassign a variable, use let; if you wish to declare constants, use const

// if (true) {
//     var x = 10;
//   }
  
//   console.log(x); // Outputs 10      //<=== old



//   if (true) {
//     let y = 10;
//   }
  
//   console.log(y); // Throws an error: y is not defined




  //////////////////////////////////////////////////////////todo////////////////////


  //Arrow functions introduce concise body syntax, or implicit return. This allows the omission of the curly brackets and the return keyword. Implicit return is useful for creating succinct one-line operations in map , filter , and other common array methods



//   function timesTwo(params) {
//     return params * 2
//   }
  
//   timesTwo(4);  // 8          //<=== old


//   let timesTwo = params => params * 2

// timesTwo(4);  // 8




//////////////////////////////////////////////////////////todo///////////////////////////////////

//This makes it easier to concatenate variables and strings without the need for string concatenation operators (+). Template literals also allow for multi-line strings without the need for escape characters. Instead, you can simply press Enter to go to a new line within the template literal

// let text= "welcome"+firstName+lastName          //<=== old


// let text1 = `Welcome ${firstName}, ${lastName}!`;






///////////////////////////////////////////////todo/////////////////


//Destructuring helps to unpack values from arrays and objects into distinct variables, so you do not have to dig through large arrays or objects to get the values you need. JavaScript allows you to destructure arrays, objects, 

// const a = array[0];
// const b = array[1];
// const suv = vehicles[2];   //<=== old

// const [a, b] = array;


// const a =obj.a
// const b = obj.b    //<=== old


// const { a, b } = obj;

