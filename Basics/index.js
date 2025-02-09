// const root=document.getElementById("root");
// let b=Number(prompt());
// let c=Number(prompt());
// console.log(b + c);
// root.innerText+=b + c;
console.log("Enter the name::")
function  getName(name){
    return name;
}
let a=false;
let b=true;
console.log(  getName("saikumar")   && b);
// alert("saikumar");
// alert(23)
let admin;
let name='John';
admin=name;
// alert(admin);
// Create a variable with the name of our planet. How would you name such a variable?
let ourPlanetName="Earth";
// Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentuser="Guru";

// Uppercase const?
const BIRTHDAY='08.04.2001'
// const AGE=someCode(BIRTHDAY);


//Dynamically Typed Language:-
let message="hello";
message=12345;
// alert(message)


//BigInt:-
const bigInt=123456789098765431n;
// alert(bigInt)

//Boolean 
let isGreater=4>1;
// alert(isGreater)

/* 
NULL:-
      1.The special null value does not belong to any of the types described above.
      2.It forms a separate type of its own which contains only the null value:
      3.In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
      4.It’s just a special value which represents “nothing”, “empty” or “value unknown”.
      5.The code above states that age is unknown.
*/

let age=null;
// alert(age);


/* Undefined:-
        1.The special value undefined also stands apart. It makes a type of its own, just like null.
        2.The meaning of undefined is “value is not assigned”.
        3.variable is declared, but not assigned, then its value is undefined:    
*/
console.log("Bfore fisrt alert")
    let number;
    // alert(number);

/*
Symbol:-
    The symbol type is used to create unique identifiers for objects. 
    We have to mention it here for the sake of completeness, but also postpone the details till we know objects.
*/


//typedof Operator:-
console.log("Symbol alert")
typeof Symbol("id");
// alert(typeof Symbol("id"))


/*ALERT()  PROMPT()  CONFIRM()
PROMPT():-It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
    title
    The text to show the visitor.
CONFIRM():-The function confirm shows a modal window with a question and two buttons: OK and Cancel.
            The result is true if OK is pressed and false otherwise.    



*/
    
//  let agePrompt=prompt("How old are you ?");
//  alert(`You are ${agePrompt} years old!`)
//  prompt();
//  let result=confirm(agePrompt);
//  alert(result)
//  let namePrompt=prompt("What's ur name?");
// //  let promptResult=confirm(namePrompt);
//  alert(promptResult)
let string="";
// alert(Number(string))

// TYPE CONVERSION:-
alert(Boolean(0))
alert(Boolean(null))
alert(Boolean(undefined))
alert(Boolean(""))
alert(Boolean(NaN))
alert("" + 1 + 0 )
alert("" - 1 + 0 )
alert(true + false)
alert(6 / "3")
alert("2" * "3")
alert(4 + 5 + "px")
alert("$" + 4 + 5)
alert("4" - 2)
alert("4px" - 2)
alert("  -9  " + 5)
alert("  -9  " - 5)
alert(null + 1 )
alert(undefined + 1)
alert(" \t \n" - 2)