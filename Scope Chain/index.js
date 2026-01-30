// function a(){
//      var b=10;
//      console.log("I am from outer function",d)
//      c();
//      function c(){
//         console.log(b);
//      }
// }

// a()
// var d=15;
// console.log("I am from Global scope:::",d)

function scopeOfA(){
    var b=10;
    console.log("I am from function scope",name);
}
scopeOfA();
var name="saikumar"
console.log("I am  from Global scope::",name)