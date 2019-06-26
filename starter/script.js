///////////////////////////////////////
// Lecture: Hoisting

/* Hoisting can happen with function declaration
BUT
wont work with function expression
*/

// Example. Function declaration

// calcAg(1980); Moved from line 17 to test Hoisting

/*
Hence now you can see the output, which still works fine,even though
function call has been made before function declaration itself.
Because function declaration has been stored with full function and its
statements, even before executind the code.*/


 /*
function calcAg(birthYear) {
   console.log(2019 - birthYear);
 }*/



// calcAg(1982); // Moving function call up to test Hoisting

// age(2008); Mving call from live 35 to test function expression Hoisting
// throws error of 'Uncaught TypeError: age is not a function.

/*
Now it throws error as in function expression only variable are stored not their values.
So though variable are Hoisted but they are given value of undefine, untill
code is executed and variables are given their define vlaues.*/



// Example of function expression

/*
var age = function calcAge(birthYear) {
  console.log(2019 - birthYear);
}*/



// function expression call
//age(2008); // Moving this call to upward to test Hoisting


// variables Hoisting
/*
As mention above variables are Hoisted but at that craeation phase they are only
given value of undefine.
Varaibles will only get their actual given values when code is executed.*/

// Example
// console.log(life);
// As seen in Dev tools, it shows output of undefined

// var life = 30;
// console.log(life); Lets more console.log(life); upward to test Hoisting.



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/* ** How does Scoping work ! **
The outer most envoirment is called global execution context, where a = 0,
2nd envoiment or execution context is created by function call first(),
which has access to scoping of its variables and its parent envoiment which
is global context.
when second() function call is made it creates execution stack of
child envoiment under function first(),
this second() has access to its own variable scopes, its parent's and global's.
So scoping works from bottom up, from within to upward.*/


// ** Laxical Scoping. **
var a = 'Hello!';
first();        // This is global scope where we have only access to
                // variable a = 'Hello'!

function first() {
    var b = 'Hi!';
    second();       // function first() 've access to its variables and global scopes
                    // where a = 'Hello!'

    function second() {
        var c = 'Hey!';
        console.log(a + b + c); // function second 've access to its variable &
                                // function first() variable and global scope where
                                // a = 'Hello'
    }
}





//Example to show the differece between execution stack and scope chain


var a = 'Hello!'; // execution context or global scope
first();

function first() {
    var b = 'Hi!';
    second(); // function first() has access to var b,function call second(),
              // function call first() and variable a.

    function second() {
        var c = 'Hey!';
        third(); // function second() has access to var c,b and a. function call third(),
                 //  second() and first().
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d); // function third has access to variable d and a only
                                // because of different execution context it exists.
                                // it does have access to global scope.
}




///////////////////////////////////////
// Lecture: The this keyword
