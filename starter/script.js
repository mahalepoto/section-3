///////////////////////////////////////
// Lecture: Hoisting

/* Hoisting can happen with function declaration
BUT
wont work with function expression
*/

// Example. Function declaration

calcAg(1980); // Moved from line 17 to test Hoisting

/*
Hence now you can see the output, which still works fine,even though
function call has been made before function declaration itself.
Because function declaration has been stored with full function and its
statements, even before executind the code.*/


 function calcAg(birthYear) {
   console.log(2019 - birthYear);
 }

// calcAg(1982); // Moving function call up to test Hoisting














///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
